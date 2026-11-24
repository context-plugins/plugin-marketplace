using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record Qes
{
    /// <summary>
    /// Effective quality when requesting QES with ZERTES legislation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("zertes")]
    public string? Zertes { get; init; }

    /// <summary>
    /// Effective quality when requesting QES with eIDAS legislation. Null if not available for this user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eidas")]
    public string? Eidas { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
