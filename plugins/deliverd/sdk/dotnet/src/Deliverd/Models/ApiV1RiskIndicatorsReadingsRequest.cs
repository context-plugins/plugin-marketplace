using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Models;

public record ApiV1RiskIndicatorsReadingsRequest
{
    /// <summary>
    /// The whole month the figure is for, YYYY-MM
    /// </summary>
    [JsonPropertyName("period")]
    [RegularExpression("^\\d{4}-(0[1-9]|1[0-2])$")]
    public required string Period { get; init; }

    /// <summary>
    /// The figure: a count, minutes, or a percentage. Omit for a ratio indicator and give numerator and denominator
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    [Minimum(0.0)]
    public double? Value { get; init; }

    /// <summary>
    /// For a ratio indicator: how many were in the condition counted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numerator")]
    [Minimum(0)]
    public int? Numerator { get; init; }

    /// <summary>
    /// For a ratio indicator: how many there were in all
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("denominator")]
    [Minimum(0)]
    public int? Denominator { get; init; }

    /// <summary>
    /// How much of what should have been counted was counted, as a percentage
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completeness")]
    [Minimum(0.0)]
    [Maximum(100.0)]
    public double? Completeness { get; init; }

    /// <summary>
    /// Where the figure comes from: the report, review or system, and where to find it
    /// </summary>
    [JsonPropertyName("evidence")]
    [StringLength(4000, MinimumLength = 1)]
    public required string Evidence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    [MaxLength(2000)]
    public string? Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
