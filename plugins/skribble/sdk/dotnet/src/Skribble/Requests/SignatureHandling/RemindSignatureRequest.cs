using System;

namespace Skribble.Requests.SignatureHandling;

/// <summary>
/// The inputs of the RemindSignatureRequest operation.
/// </summary>
public sealed record RemindSignatureRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }
}
