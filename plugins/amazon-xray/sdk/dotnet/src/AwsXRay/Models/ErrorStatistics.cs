using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record ErrorStatistics
{
    /// <summary>
    /// The number of requests that failed with a 429 throttling status code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ThrottleCount")]
    public int? ThrottleCount { get; init; }

    /// <summary>
    /// The number of requests that failed with untracked 4xx Client Error status codes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OtherCount")]
    public int? OtherCount { get; init; }

    /// <summary>
    /// The total number of requests that failed with a 4xx Client Error status code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TotalCount")]
    public int? TotalCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
