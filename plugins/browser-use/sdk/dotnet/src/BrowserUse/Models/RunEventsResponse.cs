using System.Collections.Generic;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

public record RunEventsResponse
{
    [JsonPropertyName("events")]
    public required IReadOnlyList<RunEvent> Events { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextAfter")]
    public Nextafter? NextAfter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasMore")]
    public bool? HasMore { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
