using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record State
{
    /// <summary>
    /// Opaque token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateId")]
    public string? StateId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateName")]
    public string? StateName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
