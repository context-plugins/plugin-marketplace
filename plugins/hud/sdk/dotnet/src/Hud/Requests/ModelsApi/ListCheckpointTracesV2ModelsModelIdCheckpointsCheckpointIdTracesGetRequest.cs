using System;
using Hud.Core.Validation.Attributes;

namespace Hud.Requests.ModelsApi;

/// <summary>
/// The inputs of the ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGet operation.
/// </summary>
public sealed record ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest
{
    public required Guid ModelId { get; init; }

    public required Guid CheckpointId { get; init; }

    [Minimum(1)]
    [Maximum(500)]
    public int Limit { get; init; } = 200;
}
