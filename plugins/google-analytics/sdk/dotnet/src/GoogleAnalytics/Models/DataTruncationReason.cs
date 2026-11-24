using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// Describes a reason for data truncation in the report.
/// </summary>
public record DataTruncationReason
{
    /// <summary>
    /// The type of data truncation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataTruncationType")]
    public DataTruncationType? DataTruncationType { get; init; }

    /// <summary>
    /// The data truncation date in the format YYYY-MM-DD. Indicates data before this date is truncated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataTruncationDate")]
    public string? DataTruncationDate { get; init; }

    /// <summary>
    /// The truncated date ranges.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataTruncationDateRanges")]
    public IReadOnlyList<DataTruncationDateRange>? DataTruncationDateRanges { get; init; }

    /// <summary>
    /// A descriptive message explaining the data truncation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataTruncationMessage")]
    public string? DataTruncationMessage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
