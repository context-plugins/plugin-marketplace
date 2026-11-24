using System;

namespace Skribble.Requests.Signature;

/// <summary>
/// The inputs of the InitiateSignatureRequest operation.
/// </summary>
public sealed record InitiateSignatureRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }
}
