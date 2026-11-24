using System;

namespace AtlassianCompass.Requests.AttachmentRestController;

/// <summary>
/// The inputs of the GetAttachment operation.
/// </summary>
public sealed record GetAttachmentRequest
{
    public required Guid ComponentId { get; init; }

    public required string ForgeAppId { get; init; }

    public required string Key { get; init; }
}
