using System.Text.Json.Serialization;
using Apibara.Core.Models;
using Apibara.Core.Validation.Attributes;
using Apibara.Models.Enums;

namespace Apibara.Models;

/// <summary>
/// Apibara robust historical price estimate. The base comparable set uses distinct final sold lots matching exact make + model + model year + primary damage; Copart "Sold on Approval" is excluded because it is a non-final high bid. Base from/to are Q1-Q3 and at least 3 exact final-sale comparables are required. When enough final sales exist for the target engine and mileage band (or engine alone), a market-value multiplier refines the range for high/low trims. The most recent retained non-final high bid from the same lot may be exposed as previous_high_bid_usd for context only; it never changes from, median or to and is never treated as a confirmed sale.
/// </summary>
public record EstimatedCost
{
    /// <summary>
    /// Lower bound in USD. Starts from the exact-damage Q1 and may be engine/mileage-refined when sufficient final-sale data exists.
    /// </summary>
    [JsonPropertyName("from")]
    [Minimum(101)]
    public required int From { get; init; }

    /// <summary>
    /// Upper bound in USD. Starts from the exact-damage Q3 and may be engine/mileage-refined when sufficient final-sale data exists. Previous lot bids never extend this bound.
    /// </summary>
    [JsonPropertyName("to")]
    [Minimum(101)]
    public required int To { get; init; }

    /// <summary>
    /// Central estimate in USD. Starts from the exact-damage median and may be engine/mileage-refined when sufficient final-sale data exists. Previous lot bids never change this value.
    /// </summary>
    [JsonPropertyName("median")]
    [Minimum(101)]
    public required int Median { get; init; }

    /// <summary>
    /// Human-readable Q1-Q3 USD range.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// Number of distinct exact make + model + year + primary-damage final sold comparable lots. Copart Sold on Approval is excluded. Estimate is null when fewer than 3 exist.
    /// </summary>
    [JsonPropertyName("sample_count")]
    [Minimum(3)]
    public required int SampleCount { get; init; }

    /// <summary>
    /// Optional high/low-trim refinement. engine_mileage is preferred when at least 5 final-sale comparables exist in the target engine+mileage band; engine is the fallback when at least 5 engine-matched final sales exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refinement_method")]
    public RefinementMethod? RefinementMethod { get; init; }

    /// <summary>
    /// Number of final-sale comparables behind the engine or engine+mileage refinement; null when no refinement was applied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refinement_sample_count")]
    [Minimum(5)]
    public int? RefinementSampleCount { get; init; }

    /// <summary>
    /// Normalized engine displacement used by the refinement, in liters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("engine_size_l")]
    public double? EngineSizeL { get; init; }

    /// <summary>
    /// Mileage band considered by the refinement, for example 0-30k or 30-75k. Engine-only fallback may still report the target band.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mileage_bucket")]
    public string? MileageBucket { get; init; }

    /// <summary>
    /// Median market-value ratio of the selected engine/mileage cohort to the same make+model+year market, applied to the damage-specific base range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("market_multiplier")]
    public double? MarketMultiplier { get; init; }

    /// <summary>
    /// Most recent retained high bid from the previous non-final auction cycle for the same platform+lot (for example Not Sold or Sold on Approval). This is context only: it does not change from, median or to and is not a confirmed sale price.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_high_bid_usd")]
    [Minimum(101)]
    public int? PreviousHighBidUsd { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
