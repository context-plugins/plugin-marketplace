using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record RolloutResponse
{
    [JsonPropertyName("job_id")]
    public required Guid JobId { get; init; }

    [JsonPropertyName("trace_id")]
    public required Guid TraceId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; } = "queued";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
