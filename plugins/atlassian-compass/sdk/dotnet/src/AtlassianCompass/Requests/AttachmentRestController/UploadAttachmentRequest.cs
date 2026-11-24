using System;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Requests.AttachmentRestController;

/// <summary>
/// The inputs of the UploadAttachment operation.
/// </summary>
public sealed record UploadAttachmentRequest
{
    public required Guid ComponentId { get; init; }

    public required string ForgeAppId { get; init; }

    public required string Key { get; init; }

    public required BinaryContent File { get; init; }
}
