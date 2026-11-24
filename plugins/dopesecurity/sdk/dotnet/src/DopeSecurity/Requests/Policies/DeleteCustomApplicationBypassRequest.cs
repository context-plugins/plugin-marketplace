using DopeSecurity.Models;

namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the DeleteCustomApplicationBypass operation.
/// </summary>
public sealed record DeleteCustomApplicationBypassRequest
{
    /// <summary>
    /// The name of the policy to delete application bypass entries from
    /// </summary>
    public required string PolicyName { get; init; }

    public required PoliciesBypassApplicationsRequest1 Body { get; init; }
}
