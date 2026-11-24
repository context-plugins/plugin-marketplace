namespace AmazonFreeRtos.Requests.Tags;

/// <summary>
/// The inputs of the ListTagsForResource operation.
/// </summary>
public sealed record ListTagsForResourceRequest
{
    /// <summary>
    /// The ARN of the resource.
    /// </summary>
    public required string ResourceArn { get; init; }
}
