using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record ResolvedAgent
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model_id")]
    public ModelId? ModelId { get; init; }

    [JsonPropertyName("model_name")]
    public required string ModelName { get; init; }

    [JsonPropertyName("sdk_agent_type")]
    public required string SdkAgentType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
