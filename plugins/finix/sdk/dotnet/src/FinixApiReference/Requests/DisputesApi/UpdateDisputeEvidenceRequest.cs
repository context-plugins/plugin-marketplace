using FinixApiReference.Models;

namespace FinixApiReference.Requests.DisputesApi;

/// <summary>
/// The inputs of the UpdateDisputeEvidence operation.
/// </summary>
public sealed record UpdateDisputeEvidenceRequest
{
    /// <summary>
    /// The ID of <c>Dispute</c> to fetch evidence for.
    /// </summary>
    public required string DisputeId { get; init; }

    /// <summary>
    /// The ID of <c>Dispute Evidence</c> to fetch.
    /// </summary>
    public required string EvidenceId { get; init; }

    public required UpdateDisputeEvidence Body { get; init; }
}
