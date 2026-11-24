using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// The web settings to use for this post. If not provided, the default value will be used.
/// </summary>
public record PostWebSettings1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_subtitle_on_web")]
    public bool? DisplaySubtitleOnWeb { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_thumbnail_on_web")]
    public bool? DisplayThumbnailOnWeb { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_title_on_web")]
    public bool? DisplayTitleOnWeb { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hide_from_feed")]
    public bool? HideFromFeed { get; init; }

    /// <summary>
    /// The prefixed ID of the price.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paywall_break_price_id")]
    public string? PaywallBreakPriceId { get; init; }

    /// <summary>
    /// The prefixed ID of the paywall.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paywall_id")]
    public string? PaywallId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public string? Slug { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
