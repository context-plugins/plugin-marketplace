using System;

namespace Skribble.Requests.SignatureObserverApi;

/// <summary>
/// The inputs of the DeleteSignatureObserver operation.
/// </summary>
public sealed record DeleteSignatureObserverRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }

    /// <summary>
    /// Unique ID returned when the Signature Observer is created.
    /// </summary>
    public required string ObserverId { get; init; }
}
