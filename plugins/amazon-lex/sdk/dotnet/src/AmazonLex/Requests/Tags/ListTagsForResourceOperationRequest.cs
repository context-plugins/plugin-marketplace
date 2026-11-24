namespace AmazonLex.Requests.Tags;

/// <summary>
/// The inputs of the ListTagsForResource operation.
/// </summary>
public sealed record ListTagsForResourceOperationRequest
{
    public required string ResourceArn { get; init; }
}
