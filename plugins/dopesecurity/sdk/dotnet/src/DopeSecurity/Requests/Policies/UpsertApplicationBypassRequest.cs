using DopeSecurity.Models;

namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the UpsertApplicationBypass operation.
/// </summary>
public sealed record UpsertApplicationBypassRequest
{
    /// <summary>
    /// The name of the policy to update application bypass entries for
    /// </summary>
    public required string PolicyName { get; init; }

    public required PoliciesBypassApplicationsRequest Body { get; init; }
}
