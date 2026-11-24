using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Specify a predefined or custom time range for the report.
/// For example, to specify a custom time range of "last 2 days", set the mode to <c>last</c>, the amount to <c>2</c>, and the unit to <c>day</c>. If <c>includeCurrent</c> is <c>true</c>, the range will be yesterday and today; otherwise, the range will be yesterday and the day before yesterday.
/// If "custom" type is specified, you need to provide a custom time range in the <c>customTimeRange</c> field.
/// </summary>
public record TimeSettings
{
    /// <summary>
    /// Number of time units to include in the time range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    [Minimum(0)]
    [Maximum(5000)]
    public long? Amount { get; init; }

    /// <summary>
    /// Whether to include the current time period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeCurrent")]
    public bool? IncludeCurrent { get; init; }

    /// <summary>
    /// Time range mode (last N periods, current period, or custom).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode2? Mode { get; init; }

    /// <summary>
    /// Time unit for the time range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit")]
    public Unit? Unit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
