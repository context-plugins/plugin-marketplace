using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record TraceStorageObjectListResponse
{
    [JsonPropertyName("trace_id")]
    public required Guid TraceId { get; init; }

    [JsonPropertyName("kind")]
    public string Kind { get; } = "artifact";

    [JsonPropertyName("objects")]
    public required IReadOnlyList<TraceStorageObject> Objects { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
