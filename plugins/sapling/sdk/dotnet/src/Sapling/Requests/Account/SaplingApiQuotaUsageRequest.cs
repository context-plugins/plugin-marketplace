using Sapling.Models;

namespace Sapling.Requests.Account;

/// <summary>
/// The inputs of the SaplingApiQuotaUsage operation.
/// </summary>
public sealed record SaplingApiQuotaUsageRequest
{
    public required ApiV1ReportingApiQuotaUsageRequest Body { get; init; }
}
