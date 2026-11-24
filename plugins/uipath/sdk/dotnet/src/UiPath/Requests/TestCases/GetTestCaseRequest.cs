namespace UiPath.Requests.TestCases;

/// <summary>
/// The inputs of the GetTestCase operation.
/// </summary>
public sealed record GetTestCaseRequest
{
    /// <summary>
    /// Unique identifier of the test project
    /// </summary>
    public required string ProjectId { get; init; }

    /// <summary>
    /// Unique identifier of the test case
    /// </summary>
    public required string TestCaseId { get; init; }
}
