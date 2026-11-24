using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Tags;

/// <summary>
/// The inputs of the TagResource operation.
/// </summary>
public sealed record TagResourceRequest
{
    /// <summary>
    /// The GraphqlApi Amazon Resource Name (ARN).
    /// </summary>
    public required string ResourceArn { get; init; }

    public V1TagsRequest? Body { get; init; }
}
