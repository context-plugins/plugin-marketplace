using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record CalendarEvents
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("events")]
    public IReadOnlyList<CalendarEvent>? Events { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
