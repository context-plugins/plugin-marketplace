namespace AmazonLex.Requests.Testexecutions;

/// <summary>
/// The inputs of the DescribeTestExecution operation.
/// </summary>
public sealed record DescribeTestExecutionOperationRequest
{
    public required string TestExecutionId { get; init; }
}
