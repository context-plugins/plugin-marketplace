using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Promotional tag on an offer
/// </summary>
public record OfferTag
{
    /// <summary>
    /// Tag text
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    /// <summary>
    /// Tag tooltip text
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tooltip")]
    public string? Tooltip { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
