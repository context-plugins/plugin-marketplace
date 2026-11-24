using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record TraceBatchValidateRequest
{
    [JsonPropertyName("trace_ids")]
    public required IReadOnlyList<Guid> TraceIds { get; init; }

    [JsonPropertyName("is_valid")]
    public required bool IsValid { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
