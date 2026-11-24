using System;

namespace Hud.Requests.Builds;

/// <summary>
/// The inputs of the DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGet operation.
/// </summary>
public sealed record DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetRequest
{
    public required Guid BuildId { get; init; }
}
