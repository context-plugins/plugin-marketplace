using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record RequestImpactStatistics
{
    /// <summary>
    /// The number of requests that have resulted in a fault,
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaultCount")]
    public int? FaultCount { get; init; }

    /// <summary>
    /// The number of successful requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OkCount")]
    public int? OkCount { get; init; }

    /// <summary>
    /// The total number of requests to the service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TotalCount")]
    public int? TotalCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
