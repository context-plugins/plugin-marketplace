using AmazonLex.Models;

namespace AmazonLex.Requests.Testsets;

/// <summary>
/// The inputs of the CreateTestSetDiscrepancyReport2 operation.
/// </summary>
public sealed record CreateTestSetDiscrepancyReport2Request
{
    public required string TestSetId { get; init; }

    public CreateTestSetDiscrepancyReportRequest? Body { get; init; }
}
