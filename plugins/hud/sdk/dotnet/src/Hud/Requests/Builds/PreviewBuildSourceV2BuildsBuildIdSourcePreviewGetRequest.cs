using System;

namespace Hud.Requests.Builds;

/// <summary>
/// The inputs of the PreviewBuildSourceV2BuildsBuildIdSourcePreviewGet operation.
/// </summary>
public sealed record PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetRequest
{
    public required Guid BuildId { get; init; }

    public required string Path { get; init; }
}
