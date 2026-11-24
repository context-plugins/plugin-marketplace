using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record RuleTriggersRunResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public Data1? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
