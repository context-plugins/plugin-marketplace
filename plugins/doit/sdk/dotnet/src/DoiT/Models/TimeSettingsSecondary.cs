using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Secondary time range for comparative reports.
/// </summary>
public record TimeSettingsSecondary
{
    /// <summary>
    /// Number of periods to shift back.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public long? Amount { get; init; }

    /// <summary>
    /// Whether to align to complete previous periods (full year/quarter/month) vs shifting dates by amount.
    ///     When <c>true</c>, selects complete periods (e.g., full previous year Jan 1-Dec 31, not up to today).
    ///     When <c>false</c>, shifts dates by amount, which may result in partial periods extending to today.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeCurrent")]
    public bool? IncludeCurrent { get; init; }

    /// <summary>
    /// Time interval unit for shifting.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit")]
    public Unit1? Unit { get; init; }

    /// <summary>
    /// Custom date range for the secondary time range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customTimeRange")]
    public CustomTimeRange? CustomTimeRange { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
