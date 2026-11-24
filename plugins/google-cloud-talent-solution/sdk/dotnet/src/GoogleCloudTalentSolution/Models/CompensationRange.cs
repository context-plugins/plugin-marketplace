using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Compensation range.
/// </summary>
public record CompensationRange
{
    /// <summary>
    /// The maximum amount of compensation. If left empty, the value is set to a maximal compensation value and the currency code is set to match the currency code of min_compensation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxCompensation")]
    public Money4? MaxCompensation { get; init; }

    /// <summary>
    /// The minimum amount of compensation. If left empty, the value is set to zero and the currency code is set to match the currency code of max_compensation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minCompensation")]
    public Money1? MinCompensation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
