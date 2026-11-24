using System;

namespace Skribble.Requests.SignatureHandling;

/// <summary>
/// The inputs of the DeleteSignatureRequestExpiresAt operation.
/// </summary>
public sealed record DeleteSignatureRequestExpiresAtRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }
}
