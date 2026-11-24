using AmazonLex.Models;

namespace AmazonLex.Requests.Tags;

/// <summary>
/// The inputs of the TagResource operation.
/// </summary>
public sealed record TagResourceOperationRequest
{
    public required string ResourceArn { get; init; }

    public TagResourceRequest? Body { get; init; }
}
