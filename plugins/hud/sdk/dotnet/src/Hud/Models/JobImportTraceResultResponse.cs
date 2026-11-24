using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

public record JobImportTraceResultResponse
{
    [JsonPropertyName("trace_id")]
    public required Guid TraceId { get; init; }

    [JsonPropertyName("status")]
    public required TraceStatus Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
