using System;

namespace Skribble.Requests.Identification;

/// <summary>
/// The inputs of the GetIdentificationEvidenceFiles operation.
/// </summary>
public sealed record GetIdentificationEvidenceFilesRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }

    /// <summary>
    /// Unique ID of the identification evidence record, available in the <c>signer_identity_data.evidence_id</c> field of the SignatureRequest response once identification is complete.
    /// </summary>
    public required string EvidenceId { get; init; }
}
