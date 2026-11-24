using Sapling.Models;

namespace Sapling.Requests.Account;

/// <summary>
/// The inputs of the SaplingApiUsage operation.
/// </summary>
public sealed record SaplingApiUsageRequest
{
    public ApiV1ReportingApiUsageRequest? Body { get; init; }
}
