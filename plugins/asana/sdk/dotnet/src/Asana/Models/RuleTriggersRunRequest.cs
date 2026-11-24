using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record RuleTriggersRunRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public Data? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
