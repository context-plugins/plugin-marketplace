using AmazonLex.Models;

namespace AmazonLex.Requests.Tags;

/// <summary>
/// The inputs of the UntagResource operation.
/// </summary>
public sealed record UntagResourceOperationRequest
{
    public required string ResourceArn { get; init; }

    public UntagResourceRequest? Body { get; init; }
}
