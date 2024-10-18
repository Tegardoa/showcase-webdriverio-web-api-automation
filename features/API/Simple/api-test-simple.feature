Feature: API Test

  @positive
  Scenario: Success GET api /pet/findByStatus
    When Retrieve GET request to api "/pet/findByStatus" with parameter "?status=available" #simple
    Then GET status should be 200 #simple

