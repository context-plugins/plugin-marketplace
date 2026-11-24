using AmazonLex.Models;

namespace AmazonLex.Requests.Testsetdiscrepancy;

/// <summary>
/// The inputs of the CreateTestSetDiscrepancyReport operation.
/// </summary>
public sealed record CreateTestSetDiscrepancyReportOperationRequest
{
    public required string TestSetId { get; init; }

    public CreateTestSetDiscrepancyReportRequest? Body { get; init; }
}
