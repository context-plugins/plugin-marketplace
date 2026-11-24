using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record StartBgpFailoverTestRequest
{
    /// <summary>
    /// The ID of the virtual interface you want to test.
    /// </summary>
    [JsonPropertyName("virtualInterfaceId")]
    public required string VirtualInterfaceId { get; init; }

    /// <summary>
    /// The BGP peers to place in the DOWN state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bgpPeers")]
    public IReadOnlyList<string>? BgpPeers { get; init; }

    /// <summary>
    /// The time in minutes that the virtual interface failover test will last. Maximum value: 4,320 minutes (72 hours). Default: 180 minutes (3 hours).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testDurationInMinutes")]
    public int? TestDurationInMinutes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
