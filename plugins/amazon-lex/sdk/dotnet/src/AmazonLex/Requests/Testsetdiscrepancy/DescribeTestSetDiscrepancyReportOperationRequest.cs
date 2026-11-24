namespace AmazonLex.Requests.Testsetdiscrepancy;

/// <summary>
/// The inputs of the DescribeTestSetDiscrepancyReport operation.
/// </summary>
public sealed record DescribeTestSetDiscrepancyReportOperationRequest
{
    public required string TestSetDiscrepancyReportId { get; init; }
}
