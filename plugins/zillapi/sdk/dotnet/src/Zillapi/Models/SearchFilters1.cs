using System.Collections.Generic;
using System.Text.Json.Serialization;
using Zillapi.Core.Models;
using Zillapi.Models.Enums;

namespace Zillapi.Models;

/// <summary>
/// Normalized search filters. A <c>bbox</c> is required (unless the request supplies <c>searchUrls</c> instead); a free-text search without a bounding box is rejected with 400 invalid_filters and never hits upstream.
/// </summary>
public record SearchFilters1
{
    /// <summary>
    /// Listing status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusZillapiZillowPropertyDataListingsApi? Status { get; init; }

    /// <summary>
    /// Bounding box in decimal degrees. REQUIRED unless searchUrls is supplied at the request level — the search engine needs a real bounding box to render results.
    /// </summary>
    [JsonPropertyName("bbox")]
    public required Bbox Bbox { get; init; }

    /// <summary>
    /// Price range in dollars.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public Price? Price { get; init; }

    /// <summary>
    /// Bedroom count range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("beds")]
    public Beds? Beds { get; init; }

    /// <summary>
    /// Bathroom count range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("baths")]
    public Baths? Baths { get; init; }

    /// <summary>
    /// Living-area range in square feet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sqft")]
    public Sqft? Sqft { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lotSize")]
    public LotSize? LotSize { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("yearBuilt")]
    public YearBuilt? YearBuilt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daysOnZillow")]
    public DaysOnZillow? DaysOnZillow { get; init; }

    /// <summary>
    /// Home types to include.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("homeTypes")]
    public IReadOnlyList<HomeType>? HomeTypes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasPool")]
    public bool? HasPool { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasGarage")]
    public bool? HasGarage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasAirConditioning")]
    public bool? HasAirConditioning { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasBasement")]
    public bool? HasBasement { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isWaterfront")]
    public bool? IsWaterfront { get; init; }

    /// <summary>
    /// Optional free-text place label (city/ZIP/neighborhood) — a hint only. A <c>bbox</c> (or request-level <c>searchUrls</c>) is REQUIRED; <c>location</c> alone returns 400 (invalid_filters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
