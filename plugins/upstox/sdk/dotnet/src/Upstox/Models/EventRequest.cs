using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record EventRequest
{
    [JsonPropertyName("event_type")]
    [MinLength(1)]
    public required string EventType { get; init; }

    [JsonPropertyName("event")]
    [MinLength(1)]
    public required string Event { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyDictionary<string, object>? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
