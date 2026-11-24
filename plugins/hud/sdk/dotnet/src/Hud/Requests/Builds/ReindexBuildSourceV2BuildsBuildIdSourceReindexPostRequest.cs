using System;

namespace Hud.Requests.Builds;

/// <summary>
/// The inputs of the ReindexBuildSourceV2BuildsBuildIdSourceReindexPost operation.
/// </summary>
public sealed record ReindexBuildSourceV2BuildsBuildIdSourceReindexPostRequest
{
    public required Guid BuildId { get; init; }
}
