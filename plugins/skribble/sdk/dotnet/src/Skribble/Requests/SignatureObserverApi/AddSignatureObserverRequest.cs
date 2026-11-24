using System;
using Skribble.Models.AnyOf;

namespace Skribble.Requests.SignatureObserverApi;

/// <summary>
/// The inputs of the AddSignatureObserver operation.
/// </summary>
public sealed record AddSignatureObserverRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }

    /// <summary>
    /// Request body to create a SignatureObserver object
    /// </summary>
    public required SignatureObserver Body { get; init; }
}
