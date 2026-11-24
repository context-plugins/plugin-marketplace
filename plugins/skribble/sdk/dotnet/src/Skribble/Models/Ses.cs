using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record Ses
{
    /// <summary>
    /// Effective quality when requesting SES with any legislation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("any")]
    public string? Any { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
