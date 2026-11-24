using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Point a trainable model's active checkpoint (head) at one of its nodes.
/// </summary>
public record SetHeadRequest
{
    [JsonPropertyName("checkpoint_id")]
    public required Guid CheckpointId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
