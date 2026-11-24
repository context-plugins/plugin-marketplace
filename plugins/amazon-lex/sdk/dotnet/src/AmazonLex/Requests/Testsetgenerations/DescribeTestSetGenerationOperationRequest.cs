namespace AmazonLex.Requests.Testsetgenerations;

/// <summary>
/// The inputs of the DescribeTestSetGeneration operation.
/// </summary>
public sealed record DescribeTestSetGenerationOperationRequest
{
    public required string TestSetGenerationId { get; init; }
}
