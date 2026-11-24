using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record NetworkInterface
{
    /// <summary>
    /// The Internet Protocol version 4 (IPv4) address of the interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Ipv4Address")]
    public string? Ipv4Address { get; init; }

    /// <summary>
    /// The Media Access Control (MAC) address of the interface. This is currently unsupported and will not be returned in output.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MacAddress")]
    public string? MacAddress { get; init; }

    /// <summary>
    /// The Internet Protocol version 6 (IPv6) address of the interface. This element returns IPv6 addresses for all gateway types except FSx File Gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Ipv6Address")]
    public string? Ipv6Address { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
