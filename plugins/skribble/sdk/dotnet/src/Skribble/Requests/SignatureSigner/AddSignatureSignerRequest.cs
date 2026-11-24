using System;
using Skribble.Models.AnyOf;

namespace Skribble.Requests.SignatureSigner;

/// <summary>
/// The inputs of the AddSignatureSigner operation.
/// </summary>
public sealed record AddSignatureSignerRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }

    /// <summary>
    /// Request body to add a Signer
    /// </summary>
    public required SignatureRecipientModel Body { get; init; }
}
