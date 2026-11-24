using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record RateLimiterStatus
{
    /// <summary>
    /// The maximum number of rate limiters allowed on the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxAllowed")]
    public int? MaxAllowed { get; init; }

    /// <summary>
    /// The number of rate limiters currently in use on the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inUse")]
    public int? InUse { get; init; }

    /// <summary>
    /// The number of rate limiters remaining (available) on the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remaining")]
    public int? Remaining { get; init; }

    /// <summary>
    /// The total bandwidth allocated across all rate limiters on the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalBandwidth")]
    public string? TotalBandwidth { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
