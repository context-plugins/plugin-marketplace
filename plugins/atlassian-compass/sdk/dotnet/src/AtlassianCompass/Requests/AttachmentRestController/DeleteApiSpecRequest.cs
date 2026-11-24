using System;

namespace AtlassianCompass.Requests.AttachmentRestController;

/// <summary>
/// The inputs of the DeleteApiSpec operation.
/// </summary>
public sealed record DeleteApiSpecRequest
{
    public required Guid ComponentId { get; init; }
}
