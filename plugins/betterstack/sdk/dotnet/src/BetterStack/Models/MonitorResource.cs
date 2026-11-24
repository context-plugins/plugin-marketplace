using System.Text.Json.Serialization;
using BetterStack.Core.Models;

namespace BetterStack.Models;

public record MonitorResource
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public JsonApiResource? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
