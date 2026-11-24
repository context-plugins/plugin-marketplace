using System;

namespace Skribble.Requests.SignatureHandling;

/// <summary>
/// The inputs of the GetSignatureRequestCallbacksV3 operation.
/// </summary>
public sealed record GetSignatureRequestCallbacksV3Request
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }
}
