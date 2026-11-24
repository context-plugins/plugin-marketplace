using System.Text.Json.Serialization;

namespace CompSniper.Models;

public record Contents
{
    /// <summary>
    /// Set true only when the contents qualify under USPS Media Mail standards.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mediaMailEligible")]
    public bool? MediaMailEligible { get; init; } = false;
}
