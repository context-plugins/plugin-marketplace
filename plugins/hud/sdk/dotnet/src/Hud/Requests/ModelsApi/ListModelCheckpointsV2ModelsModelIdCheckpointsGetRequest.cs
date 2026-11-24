using System;

namespace Hud.Requests.ModelsApi;

/// <summary>
/// The inputs of the ListModelCheckpointsV2ModelsModelIdCheckpointsGet operation.
/// </summary>
public sealed record ListModelCheckpointsV2ModelsModelIdCheckpointsGetRequest
{
    public required Guid ModelId { get; init; }
}
