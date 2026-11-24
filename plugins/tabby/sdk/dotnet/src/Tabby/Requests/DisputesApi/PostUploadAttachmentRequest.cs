using Tabby.Core.Models;

namespace Tabby.Requests.DisputesApi;

/// <summary>
/// The inputs of the PostUploadAttachment operation.
/// </summary>
public sealed record PostUploadAttachmentRequest
{
    /// <summary>
    /// Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size. Files larger than 5 MB are rejected.
    /// </summary>
    public required BinaryContent Attachment { get; init; }
}
