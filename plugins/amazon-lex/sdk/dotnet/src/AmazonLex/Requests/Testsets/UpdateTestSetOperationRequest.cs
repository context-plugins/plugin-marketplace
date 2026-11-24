using AmazonLex.Models;

namespace AmazonLex.Requests.Testsets;

/// <summary>
/// The inputs of the UpdateTestSet operation.
/// </summary>
public sealed record UpdateTestSetOperationRequest
{
    public required string TestSetId { get; init; }

    public UpdateTestSetRequest? Body { get; init; }
}
