using System;

namespace Skribble.Requests.Signature;

/// <summary>
/// The inputs of the GetSignatureRequestDetails operation.
/// </summary>
public sealed record GetSignatureRequestDetailsRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }
}
