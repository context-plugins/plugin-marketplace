using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Models;
using AmazonVpc.Models.Enums;

namespace AmazonVpc.Models;

/// <summary>
/// Describes a NAT gateway
/// </summary>
public record NatGateway
{
    /// <summary>
    /// The ID of the NAT gateway
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("natGatewayId")]
    public string? NatGatewayId { get; init; }

    /// <summary>
    /// The ID of the subnet in which the NAT gateway is located
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subnetId")]
    public string? SubnetId { get; init; }

    /// <summary>
    /// The ID of the VPC in which the NAT gateway is located
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpcId")]
    public string? VpcId { get; init; }

    /// <summary>
    /// The state of the NAT gateway
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public StateAmazonVpcNatGatewaysApi? State { get; init; }

    /// <summary>
    /// Indicates whether the NAT gateway supports public or private connectivity
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectivityType")]
    public ConnectivityType? ConnectivityType { get; init; }

    /// <summary>
    /// Information about the IP addresses and network interface associated with the NAT gateway
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("natGatewayAddresses")]
    public IReadOnlyList<NatGatewayAddress>? NatGatewayAddresses { get; init; }

    /// <summary>
    /// The date and time the NAT gateway was created
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public DateTimeOffset? CreateTime { get; init; }

    /// <summary>
    /// Any tags assigned to the NAT gateway
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
