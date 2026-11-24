using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record Aes
{
    /// <summary>
    /// Effective quality when requesting AES with any legislation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("any")]
    public string? Any { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
