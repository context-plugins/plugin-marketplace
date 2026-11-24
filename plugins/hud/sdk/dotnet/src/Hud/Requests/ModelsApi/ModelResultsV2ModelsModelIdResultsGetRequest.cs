using System;
using Hud.Models.AnyOf;

namespace Hud.Requests.ModelsApi;

/// <summary>
/// The inputs of the ModelResultsV2ModelsModelIdResultsGet operation.
/// </summary>
public sealed record ModelResultsV2ModelsModelIdResultsGetRequest
{
    public required Guid ModelId { get; init; }

    public CheckpointIds? CheckpointIds { get; init; }

    public Purpose2? Purpose { get; init; }
}
