using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record ServiceStatistics
{
    /// <summary>
    /// The number of requests that completed with a 2xx Success status code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OkCount")]
    public int? OkCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ErrorStatistics")]
    public ErrorStatistics? ErrorStatistics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaultStatistics")]
    public FaultStatistics? FaultStatistics { get; init; }

    /// <summary>
    /// The total number of completed requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TotalCount")]
    public int? TotalCount { get; init; }

    /// <summary>
    /// The aggregate response time of completed requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TotalResponseTime")]
    public double? TotalResponseTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
