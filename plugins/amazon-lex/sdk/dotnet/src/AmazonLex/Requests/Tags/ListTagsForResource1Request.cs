namespace AmazonLex.Requests.Tags;

/// <summary>
/// The inputs of the ListTagsForResource1 operation.
/// </summary>
public sealed record ListTagsForResource1Request
{
    public required string ResourceArn { get; init; }
}
