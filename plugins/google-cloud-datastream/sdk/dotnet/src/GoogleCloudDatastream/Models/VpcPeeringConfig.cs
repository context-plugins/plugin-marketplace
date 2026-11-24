using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC.
/// </summary>
public record VpcPeeringConfig
{
    /// <summary>
    /// Required. A free subnet for peering. (CIDR of /29)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subnet")]
    public string? Subnet { get; init; }

    /// <summary>
    /// Required. Fully qualified name of the VPC that Datastream will peer to. Format: <c>projects/{project}/global/{networks}/{name}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpc")]
    public string? Vpc { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
