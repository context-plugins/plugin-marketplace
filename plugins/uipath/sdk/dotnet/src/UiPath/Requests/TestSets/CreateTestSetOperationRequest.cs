using UiPath.Models;

namespace UiPath.Requests.TestSets;

/// <summary>
/// The inputs of the CreateTestSet operation.
/// </summary>
public sealed record CreateTestSetOperationRequest
{
    /// <summary>
    /// Unique identifier of the test project
    /// </summary>
    public required string ProjectId { get; init; }

    public required CreateTestSetRequest Body { get; init; }
}
