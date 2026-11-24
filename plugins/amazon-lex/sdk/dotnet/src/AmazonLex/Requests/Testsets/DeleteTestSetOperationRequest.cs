using AmazonLex.Models;

namespace AmazonLex.Requests.Testsets;

/// <summary>
/// The inputs of the DeleteTestSet operation.
/// </summary>
public sealed record DeleteTestSetOperationRequest
{
    public required string TestSetId { get; init; }

    public DeleteTestSetRequest? Body { get; init; }
}
