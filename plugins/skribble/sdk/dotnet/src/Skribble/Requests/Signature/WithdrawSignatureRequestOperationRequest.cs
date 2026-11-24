using System;
using Skribble.Models;

namespace Skribble.Requests.Signature;

/// <summary>
/// The inputs of the WithdrawSignatureRequest operation.
/// </summary>
public sealed record WithdrawSignatureRequestOperationRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }

    /// <summary>
    /// Request body to withdraw a SignatureRequest object
    /// </summary>
    public WithdrawSignatureRequest? Body { get; init; }
}
