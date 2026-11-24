using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

/// <summary>
/// Best possible quality, but AES at a minimum.
/// </summary>
public record AesMinimal
{
    /// <summary>
    /// Effective quality when requesting AES_MINIMAL with ZERTES legislation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("zertes")]
    public string? Zertes { get; init; }

    /// <summary>
    /// Effective quality when requesting AES_MINIMAL with eIDAS legislation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eidas")]
    public string? Eidas { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
