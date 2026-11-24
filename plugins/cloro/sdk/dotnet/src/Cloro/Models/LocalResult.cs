using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record LocalResult
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
    /// Phone number, when shown (locale-formatted)
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
    public Links? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
