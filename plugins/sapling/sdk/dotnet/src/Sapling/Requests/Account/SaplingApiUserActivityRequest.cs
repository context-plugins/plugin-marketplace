using Sapling.Models;

namespace Sapling.Requests.Account;

/// <summary>
/// The inputs of the SaplingApiUserActivity operation.
/// </summary>
public sealed record SaplingApiUserActivityRequest
{
    public required ApiV1ReportingApiUserActivityRequest Body { get; init; }
}
