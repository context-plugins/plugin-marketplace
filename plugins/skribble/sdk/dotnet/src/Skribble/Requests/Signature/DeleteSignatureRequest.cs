using System;

namespace Skribble.Requests.Signature;

/// <summary>
/// The inputs of the DeleteSignatureRequest operation.
/// </summary>
public sealed record DeleteSignatureRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }
}
