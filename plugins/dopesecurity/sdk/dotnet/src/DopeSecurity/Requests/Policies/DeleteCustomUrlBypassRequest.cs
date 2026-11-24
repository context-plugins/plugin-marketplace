using DopeSecurity.Models;

namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the DeleteCustomUrlBypass operation.
/// </summary>
public sealed record DeleteCustomUrlBypassRequest
{
    /// <summary>
    /// The name of the policy to delete URL bypass entries from
    /// </summary>
    public required string PolicyName { get; init; }

    public required PoliciesBypassUrlsRequest1 Body { get; init; }
}
