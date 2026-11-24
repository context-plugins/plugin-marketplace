using AmazonFreeRtos.Models;

namespace AmazonFreeRtos.Requests.Tags;

/// <summary>
/// The inputs of the TagResource operation.
/// </summary>
public sealed record TagResourceRequest
{
    /// <summary>
    /// The ARN of the resource.
    /// </summary>
    public required string ResourceArn { get; init; }

    public required TagsRequest Body { get; init; }
}
