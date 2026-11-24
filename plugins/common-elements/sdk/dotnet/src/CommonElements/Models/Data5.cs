using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record Data5
{
    /// <summary>
    /// Mapped buildings for this association.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("building_count")]
    public double? BuildingCount { get; init; }

    /// <summary>
    /// Summed footprint area across mapped buildings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_footprint_sqft")]
    public double? TotalFootprintSqft { get; init; }

    /// <summary>
    /// Summed footprint area across mapped buildings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_footprint_sqm")]
    public double? TotalFootprintSqm { get; init; }

    /// <summary>
    /// Largest building's footprint, and the average across all of them.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary_building_sqft")]
    public double? PrimaryBuildingSqft { get; init; }

    /// <summary>
    /// Largest building's footprint, and the average across all of them.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avg_footprint_sqm")]
    public double? AvgFootprintSqm { get; init; }

    /// <summary>
    /// Estimated from footprint; add a pitch multiplier for sloped roofs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roof_area_sqft_estimate")]
    public double? RoofAreaSqftEstimate { get; init; }

    /// <summary>
    /// Perimeter x height estimate. A starting point for painting/waterproofing scope.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("facade_area_sqft_estimate")]
    public double? FacadeAreaSqftEstimate { get; init; }

    /// <summary>
    /// Rough estimate from measured height only. Not a milestone determination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("floors_estimate")]
    public double? FloorsEstimate { get; init; }

    /// <summary>
    /// Measured height, capped ~34m by the underlying source; null when unmeasured. Never a hard stories count.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_height_m")]
    public double? MaxHeightM { get; init; }

    /// <summary>
    /// Confidence label for the height figure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("height_confidence")]
    public string? HeightConfidence { get; init; }

    /// <summary>
    /// Recorded stories from the county parcel roll (FL only currently) — measured, not estimated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stories")]
    public double? Stories { get; init; }

    /// <summary>
    /// Earliest recorded year built across the association's buildings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("year_built")]
    public double? YearBuilt { get; init; }

    /// <summary>
    /// True when a recorded building has 3+ stories — the real FL Ch. 553 signal. Reference-only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milestone_inspection_relevant")]
    public bool? MilestoneInspectionRelevant { get; init; }

    /// <summary>
    /// Where each figure came from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("structural_source")]
    public string? StructuralSource { get; init; }

    /// <summary>
    /// Where each figure came from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public string? Source { get; init; }

    /// <summary>
    /// Where each figure came from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attribution")]
    public string? Attribution { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
