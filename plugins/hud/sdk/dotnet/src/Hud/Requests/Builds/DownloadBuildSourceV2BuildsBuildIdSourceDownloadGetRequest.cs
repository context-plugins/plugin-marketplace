using System;

namespace Hud.Requests.Builds;

/// <summary>
/// The inputs of the DownloadBuildSourceV2BuildsBuildIdSourceDownloadGet operation.
/// </summary>
public sealed record DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetRequest
{
    public required Guid BuildId { get; init; }

    public required string Path { get; init; }
}
