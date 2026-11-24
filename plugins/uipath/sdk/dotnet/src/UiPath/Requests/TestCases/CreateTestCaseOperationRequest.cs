using UiPath.Models;

namespace UiPath.Requests.TestCases;

/// <summary>
/// The inputs of the CreateTestCase operation.
/// </summary>
public sealed record CreateTestCaseOperationRequest
{
    /// <summary>
    /// Unique identifier of the test project
    /// </summary>
    public required string ProjectId { get; init; }

    public required CreateTestCaseRequest Body { get; init; }
}
