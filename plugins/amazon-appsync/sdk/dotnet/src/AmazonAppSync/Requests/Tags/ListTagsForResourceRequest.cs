namespace AmazonAppSync.Requests.Tags;

/// <summary>
/// The inputs of the ListTagsForResource operation.
/// </summary>
public sealed record ListTagsForResourceRequest
{
    /// <summary>
    /// The GraphqlApi Amazon Resource Name (ARN).
    /// </summary>
    public required string ResourceArn { get; init; }
}
