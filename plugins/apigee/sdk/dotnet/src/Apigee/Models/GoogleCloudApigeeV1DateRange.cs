using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Date range of the data to export.
/// </summary>
public record GoogleCloudApigeeV1DateRange
{
    /// <summary>
    /// Required. Start date of the data to export in the format <c>yyyy-mm-dd</c>. The date range begins at 00:00:00 UTC on the start date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start")]
    public string? Start { get; init; }

    /// <summary>
    /// Required. End date (exclusive) of the data to export in the format <c>yyyy-mm-dd</c>. The date range ends at 00:00:00 UTC on the end date- which will not be in the output.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end")]
    public string? End { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
