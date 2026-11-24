using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// API call volume range and the percentage of revenue to share with the developer when the total number of API calls is within the range.
/// </summary>
public record GoogleCloudApigeeV1RevenueShareRange
{
    /// <summary>
    /// Ending value of the range. Set to 0 or <c>null</c> for the last range of values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end")]
    public string? End { get; init; }

    /// <summary>
    /// Percentage of the revenue to be shared with the developer. For example, to share 21 percent of the total revenue with the developer, set this value to 21. Specify a decimal number with a maximum of two digits following the decimal point.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sharePercentage")]
    public double? SharePercentage { get; init; }

    /// <summary>
    /// Starting value of the range. Set to 0 or <c>null</c> for the initial range of values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start")]
    public string? Start { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
