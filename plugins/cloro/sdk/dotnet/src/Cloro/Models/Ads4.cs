using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Models.Enums;

namespace Cloro.Models;

public record Ads4
{
    /// <summary>
    /// Position of the ad (1-indexed)
    /// </summary>
    [JsonPropertyName("position")]
    public required double Position { get; init; }

    /// <summary>
    /// Ad title
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Ad destination URL
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// Sub-type discriminator. TEXT ads carry <c>domain</c> + <c>description</c>; SHOPPING ads carry <c>price</c> + <c>store</c> (+ optional <c>old_price</c>). Always present.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type2 Type { get; init; }

    /// <summary>
    /// Domain name of the advertiser (present when <c>type</c> is <c>TEXT</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    /// <summary>
    /// Ad description text (present when <c>type</c> is <c>TEXT</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Product price (present when <c>type</c> is <c>SHOPPING</c>). <c>currency</c> and <c>raw</c> are always present; <c>value</c> is omitted when the number doesn't parse, and the whole object is omitted when no currency appears beside a number. <c>raw</c> carries the visible text verbatim.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public Price4? Price { get; init; }

    /// <summary>
    /// Original price before discount (present when <c>type</c> is <c>SHOPPING</c> and the ad has sale pricing). Same shape as <c>price</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_price")]
    public OldPrice2? OldPrice { get; init; }

    /// <summary>
    /// Retailer name (present when <c>type</c> is <c>SHOPPING</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("store")]
    public string? Store { get; init; }

    /// <summary>
    /// Ad image URL (product photo for shopping ads, hero image for text ads)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image")]
    public string? Image { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
