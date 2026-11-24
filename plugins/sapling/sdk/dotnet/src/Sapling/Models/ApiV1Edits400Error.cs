using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record ApiV1Edits400Error
{
    /// <summary>
    /// Human-readable error message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("msg")]
    public string? Msg { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
