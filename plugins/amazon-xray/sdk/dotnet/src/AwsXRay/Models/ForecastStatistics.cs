using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record ForecastStatistics
{
    /// <summary>
    /// The upper limit of fault counts for a service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaultCountHigh")]
    public int? FaultCountHigh { get; init; }

    /// <summary>
    /// The lower limit of fault counts for a service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaultCountLow")]
    public int? FaultCountLow { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
