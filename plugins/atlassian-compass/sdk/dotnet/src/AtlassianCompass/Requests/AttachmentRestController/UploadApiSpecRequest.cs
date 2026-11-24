using System;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Requests.AttachmentRestController;

/// <summary>
/// The inputs of the UploadApiSpec operation.
/// </summary>
public sealed record UploadApiSpecRequest
{
    public required Guid ComponentId { get; init; }

    public required BinaryContent File { get; init; }
}
