using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record ModelResultsResponse
{
    [JsonPropertyName("model_id")]
    public required Guid ModelId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checkpoint_ids")]
    public IReadOnlyList<Guid>? CheckpointIds { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<ModelTasksetResultRow> Results { get; init; }

    [JsonPropertyName("suggested")]
    public required IReadOnlyList<ModelSuggestedTaskset> Suggested { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
