using System;
using Skribble.Models;

namespace Skribble.Requests.SignatureAttachmentApi;

/// <summary>
/// The inputs of the CreateSignatureAttachment operation.
/// </summary>
public sealed record CreateSignatureAttachmentOperationRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }

    /// <summary>
    /// Request body to create a SignatureAttachment object
    /// </summary>
    public required CreateSignatureAttachmentRequest Body { get; init; }
}
