using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record Transition
{
    /// <summary>
    /// Key of the node this transition points at.
    /// </summary>
    [JsonPropertyName("target")]
    public required string Target { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pathId")]
    public string? PathId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
