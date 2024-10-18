Feature: Gorest API Test

  Scenario: CREATE new user through api /public-api/users and VALIDATE success to create new user
    When Execute POST request to api "public/v2/users" with payload name "generated_name_user" and email "generated_email_user"
    Then POST status should be 201
    When Retrieve GET request to api "public/v2/users/" with parameter "unique_id"
    Then GET status should be 200
    And 'name' should be 'generated_name_user'
    And 'email' should be 'generated_email_user'

  Scenario: Create new user and GET user through api /public-api/users and VALIDATE success get user
    When Execute POST request to api "public/v2/users" with payload name "generated_name_user" and email "generated_email_user"
    Then POST status should be 201
    When Retrieve GET request to api "public/v2/users/" with parameter "unique_id"
    Then GET status should be 200
    And 'name' should be 'generated_name_user'
    And 'email' should be 'generated_email_user'

  Scenario: Create new user and UPDATE user through api /public-api/users and VALIDATE success update user
    When Execute POST request to api "public/v2/users" with payload name "generated_name_user" and email "generated_email_user"
    Then POST status should be 201
    When Execute PUT request to api "public/v2/users/" with parameter "unique_id" and payload name "generated_name_user" and email "generated_email_user"
    Then PUT status should be 200
    When Retrieve GET request to api "public/v2/users/" with parameter "unique_id"
    Then GET status should be 200
    And 'name' should be 'generated_name_user'
    And 'email' should be 'generated_email_user'
    And 'id' should be 'unique_id'