using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record TeamDisplayRulesResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayRules")]
    public DisplayRules? DisplayRules { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
