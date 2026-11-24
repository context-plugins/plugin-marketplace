using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record Ads2
{
    /// <summary>
    /// Advertiser brand information
    /// </summary>
    [JsonPropertyName("brand")]
    public required Brand Brand { get; init; }

    /// <summary>
    /// Array of carousel cards in the ad
    /// </summary>
    [JsonPropertyName("cards")]
    public required IReadOnlyList<Card> Cards { get; init; }

    /// <summary>
    /// OpenAI serving status for the ad. <c>allowed</c> means the ad was eligible to serve; <c>hidden</c> means OpenAI filtered it (for example, an integrity check).
    /// </summary>
    [JsonPropertyName("visibility")]
    public required string Visibility { get; init; }

    /// <summary>
    /// The ad's slot position in OpenAI's served ad response. This reflects served order, not what was shown — use <c>rendered</c> for actual exposure.
    /// </summary>
    [JsonPropertyName("adsResponseIndex")]
    public required int AdsResponseIndex { get; init; }

    /// <summary>
    /// Whether the ad was shown as a visible card in the response. OpenAI serves several candidates but the interface renders at most one; ads with <c>rendered: false</c> were served but not displayed.
    /// </summary>
    [JsonPropertyName("rendered")]
    public required bool Rendered { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
