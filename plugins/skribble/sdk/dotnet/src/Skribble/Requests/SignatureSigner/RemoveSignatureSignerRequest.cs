using System;

namespace Skribble.Requests.SignatureSigner;

/// <summary>
/// The inputs of the RemoveSignatureSigner operation.
/// </summary>
public sealed record RemoveSignatureSignerRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }

    /// <summary>
    /// Unique ID of the signer
    /// </summary>
    public required Guid Sid { get; init; }
}
