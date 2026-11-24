namespace AmazonLex.Requests.Testsets;

/// <summary>
/// The inputs of the DescribeTestSet operation.
/// </summary>
public sealed record DescribeTestSetOperationRequest
{
    public required string TestSetId { get; init; }
}
