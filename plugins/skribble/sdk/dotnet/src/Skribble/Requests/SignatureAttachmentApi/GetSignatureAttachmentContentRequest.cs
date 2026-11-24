using System;

namespace Skribble.Requests.SignatureAttachmentApi;

/// <summary>
/// The inputs of the GetSignatureAttachmentContent operation.
/// </summary>
public sealed record GetSignatureAttachmentContentRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }

    /// <summary>
    /// Unique ID returned when the Signature Attachment is created.
    /// </summary>
    public required Guid AttachmentId { get; init; }
}
