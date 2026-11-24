using System;

namespace Skribble.Requests.SignatureHandling;

/// <summary>
/// The inputs of the GetSignatureRequestDetails2 operation.
/// </summary>
public sealed record GetSignatureRequestDetails2Request
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }
}
