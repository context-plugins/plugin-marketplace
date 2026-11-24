using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record AudienceMatchFilter
{
    [JsonPropertyName("type")]
    public string Type { get; } = "audienceMatch";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comparator")]
    public Comparator5? Comparator { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_audiences")]
    public IReadOnlyList<string>? Audiences { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
