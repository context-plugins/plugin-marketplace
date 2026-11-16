using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Link to the reversals associated with the <c>Settlement</c>.
/// </summary>
public record Reversals
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("href")]
    public string? Href { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
