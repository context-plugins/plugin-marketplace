using System;
using Tabby.Models;

namespace Tabby.Requests.DisputesApi;

/// <summary>
/// The inputs of the PostDisputeProvideEvidence operation.
/// </summary>
public sealed record PostDisputeProvideEvidenceRequest
{
    /// <summary>
    /// ID of the dispute.
    /// </summary>
    public required Guid DisputeId { get; init; }

    public required string DisputeIdTemplate { get; init; }

    public required ApiV1DisputesProvideEvidenceRequest Body { get; init; }
}
