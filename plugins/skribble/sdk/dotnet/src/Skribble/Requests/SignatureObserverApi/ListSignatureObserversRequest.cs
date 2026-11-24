using System;

namespace Skribble.Requests.SignatureObserverApi;

/// <summary>
/// The inputs of the ListSignatureObservers operation.
/// </summary>
public sealed record ListSignatureObserversRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }
}
