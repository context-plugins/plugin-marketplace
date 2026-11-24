using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record PublishTraceResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("success")]
    public bool? Success { get; init; } = true;

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("public_url")]
    public required string PublicUrl { get; init; }

    [JsonPropertyName("trace_id")]
    public required Guid TraceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
