using Sapling.Models;

namespace Sapling.Requests.Account;

/// <summary>
/// The inputs of the SaplingApiEndpointUsage operation.
/// </summary>
public sealed record SaplingApiEndpointUsageRequest
{
    public required ApiV1ReportingApiEndpointUsageRequest Body { get; init; }
}
