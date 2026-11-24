using Paid.Models;

namespace Paid.Requests.Usage;

/// <summary>
/// The inputs of the CheckUsage operation.
/// </summary>
public sealed record CheckUsageRequest
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public UsageCheckUsageRequest? Body { get; init; }
}
