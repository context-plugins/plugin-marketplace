using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

public record LocalResult1
{
    /// <summary>
    /// Position within the pack (1-indexed)
    /// </summary>
    [JsonPropertyName("position")]
    public required double Position { get; init; }

    /// <summary>
    /// Business name as displayed on the SERP
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Google entity id for the place
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("placeId")]
    public string? PlaceId { get; init; }

    /// <summary>
    /// Google's numeric place id (CID) as a decimal string. <c>https://maps.google.com/?cid=&lt;cid&gt;</c> opens the place. Not sent for the newer layout that most German, French, Spanish, Italian, Danish and Polish SERPs use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cid")]
    public string? Cid { get; init; }

    /// <summary>
    /// Google viewer URL for the place: the page that opens when you click the place on the SERP
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link")]
    [Format(FormatKind.Uri)]
    public string? Link { get; init; }

    /// <summary>
    /// Average star rating (0–5)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating")]
    public double? Rating { get; init; }

    /// <summary>
    /// Review count as displayed by Google (e.g. "26K"). Free-form string — not normalized to a number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reviews")]
    public string? Reviews { get; init; }

    /// <summary>
    /// Price band as displayed by Google (e.g. "$10–20"). Currency symbol matches the locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public string? Price { get; init; }

    /// <summary>
    /// Business category (e.g. "Pizza", "Plumber")
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// Years-in-business badge, when shown (typical on service-style packs)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("yearsInBusiness")]
    public string? YearsInBusiness { get; init; }

    /// <summary>
    /// Street address or locality as displayed on the SERP
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public string? Address { get; init; }

    /// <summary>
    /// Phone number. Desktop gives the number as Google displays it (e.g. "(702) 777-3777"). Mobile gives the number from the card's Call button (e.g. "+17027773777"). When the card does not show it, it comes from the place data in the page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public string? Phone { get; init; }

    /// <summary>
    /// Opening-hours text as displayed (e.g. "Open · Closes 11 PM", "Open 24 hours")
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hours")]
    public string? Hours { get; init; }

    /// <summary>
    /// Trailing snippet — a review quote or a service-options line
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Action links rendered on the place, typically on business/service-style packs (plumbers, salons, …) and absent on restaurant packs whose places are plain buttons. Each key is present only when Google rendered that button.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public Links1? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
