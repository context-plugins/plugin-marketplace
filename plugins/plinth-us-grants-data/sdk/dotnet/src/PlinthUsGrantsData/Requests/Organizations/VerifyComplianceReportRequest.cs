using PlinthUsGrantsData.Models;

namespace PlinthUsGrantsData.Requests.Organizations;

/// <summary>
/// The inputs of the VerifyComplianceReport operation.
/// </summary>
public sealed record VerifyComplianceReportRequest
{
    public required VerifyReport Body { get; init; }
}
