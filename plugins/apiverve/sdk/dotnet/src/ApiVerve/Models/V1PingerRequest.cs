using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1PingerRequest
{
    /// <summary>
    /// The host name or public IP that you want to ping
    /// </summary>
    [JsonPropertyName("host")]
    public required string Host { get; init; }

    /// <summary>
    /// The timeout for the ping request in milliseconds
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeout")]
    public int? Timeout { get; init; }

    /// <summary>
    /// How many pings to send before averaging the round-trip time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roundTrips")]
    public int? RoundTrips { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
