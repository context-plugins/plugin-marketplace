using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// API call volume range and the fees charged when the total number of API calls is within the range.
/// </summary>
public record GoogleCloudApigeeV1RateRange
{
    /// <summary>
    /// Ending value of the range. Set to 0 or <c>null</c> for the last range of values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end")]
    public string? End { get; init; }

    /// <summary>
    /// Starting value of the range. Set to 0 or <c>null</c> for the initial range of values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start")]
    public string? Start { get; init; }

    /// <summary>
    /// Fee to charge when total number of API calls falls within this range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fee")]
    public GoogleTypeMoney4? Fee { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
