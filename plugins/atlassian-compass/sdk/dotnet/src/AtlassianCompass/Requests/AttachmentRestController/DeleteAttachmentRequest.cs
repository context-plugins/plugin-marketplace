using System;

namespace AtlassianCompass.Requests.AttachmentRestController;

/// <summary>
/// The inputs of the DeleteAttachment operation.
/// </summary>
public sealed record DeleteAttachmentRequest
{
    public required Guid ComponentId { get; init; }

    public required string ForgeAppId { get; init; }

    public required string Key { get; init; }
}
