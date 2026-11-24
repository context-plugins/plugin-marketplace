namespace AmazonLex.Requests.Policy;

/// <summary>
/// The inputs of the DescribeResourcePolicy operation.
/// </summary>
public sealed record DescribeResourcePolicyOperationRequest
{
    public required string ResourceArn { get; init; }
}
