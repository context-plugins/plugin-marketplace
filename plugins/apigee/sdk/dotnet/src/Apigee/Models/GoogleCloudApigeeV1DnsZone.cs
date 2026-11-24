using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// A DNS zone is a resource under an Apigee organization that is used to create a DNS peering with Apigee's network. DNS peering will let Apigee instances resolve the hostnames created in a peered network.
/// </summary>
public record GoogleCloudApigeeV1DnsZone
{
    /// <summary>
    /// Output only. The time that this resource was created on the server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// DNS PEERING zone configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("peeringConfig")]
    public GoogleCloudApigeeV1DnsZonePeeringConfig1? PeeringConfig { get; init; }

    /// <summary>
    /// Identifier. Unique name for the resource. Defined by the server Format: "organizations/{organization}/dnsZones/{dns_zone}".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. State of the DNS Peering. Values other than <c>ACTIVE</c> mean the resource is not ready to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State11? State { get; init; }

    /// <summary>
    /// Required. The domain name for hosts in this private zone, for instance "example.com.".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    /// <summary>
    /// Output only. The time that this resource was updated on the server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Required. Description of the resource. String of at most 1024 characters associated with this resource for the user's convenience.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
