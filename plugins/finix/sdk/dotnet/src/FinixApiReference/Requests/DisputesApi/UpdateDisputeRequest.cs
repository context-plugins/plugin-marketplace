using FinixApiReference.Models;

namespace FinixApiReference.Requests.DisputesApi;

/// <summary>
/// The inputs of the UpdateDispute operation.
/// </summary>
public sealed record UpdateDisputeRequest
{
    /// <summary>
    /// The ID of <c>Dispute</c>.
    /// </summary>
    public required string DisputeId { get; init; }

    public required UpdateDispute Body { get; init; }
}
