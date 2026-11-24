using System.Text.Json.Serialization;
using CarsXe.Core.Models;

namespace CarsXe.Models;

public record Usage
{
    /// <summary>
    /// Current usage in the billing period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current")]
    public double? Current { get; init; }

    /// <summary>
    /// Included quota for the billing period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public double? Limit { get; init; }

    /// <summary>
    /// Remaining included quota.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remaining")]
    public double? Remaining { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
