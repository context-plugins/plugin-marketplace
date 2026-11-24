using System;

namespace Hud.Requests.Builds;

/// <summary>
/// The inputs of the PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGet operation.
/// </summary>
public sealed record PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetRequest
{
    public required Guid BuildId { get; init; }

    public required string Path { get; init; }
}
