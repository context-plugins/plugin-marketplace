using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record UserDataAndEventsBody
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("events")]
    public IReadOnlyList<Event>? Events { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user")]
    public UserData? User { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
