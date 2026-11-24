using System.Collections.Generic;
using System.Text.Json.Serialization;
using RelmCrm.Core.Models;
using RelmCrm.Models.Enums;

namespace RelmCrm.Models;

public record AutomationInput
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("trigger_event")]
    public required TriggerEvent TriggerEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conditions")]
    public IReadOnlyList<Condition>? Conditions { get; init; }

    [JsonPropertyName("actions")]
    public required IReadOnlyList<ActionModel> Actions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
