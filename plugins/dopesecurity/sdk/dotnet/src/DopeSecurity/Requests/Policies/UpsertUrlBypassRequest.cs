using DopeSecurity.Models;

namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the UpsertUrlBypass operation.
/// </summary>
public sealed record UpsertUrlBypassRequest
{
    /// <summary>
    /// The name of the policy to update URL bypass entries for
    /// </summary>
    public required string PolicyName { get; init; }

    public required PoliciesBypassUrlsRequest Body { get; init; }
}
