using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Models;
using AmazonVpc.Models.Enums;

namespace AmazonVpc.Models;

/// <summary>
/// Describes a subnet
/// </summary>
public record Subnet
{
    /// <summary>
    /// The ID of the subnet
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subnetId")]
    public string? SubnetId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the subnet
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subnetArn")]
    public string? SubnetArn { get; init; }

    /// <summary>
    /// The ID of the VPC the subnet is in
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpcId")]
    public string? VpcId { get; init; }

    /// <summary>
    /// The current state of the subnet
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public StateAmazonVpcSubnetsApi? State { get; init; }

    /// <summary>
    /// The IPv4 CIDR block assigned to the subnet
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cidrBlock")]
    public string? CidrBlock { get; init; }

    /// <summary>
    /// The Availability Zone of the subnet
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("availabilityZone")]
    public string? AvailabilityZone { get; init; }

    /// <summary>
    /// The AZ ID of the subnet
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("availabilityZoneId")]
    public string? AvailabilityZoneId { get; init; }

    /// <summary>
    /// The number of unused private IPv4 addresses in the subnet
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("availableIpAddressCount")]
    public int? AvailableIpAddressCount { get; init; }

    /// <summary>
    /// Indicates whether this is the default subnet for the Availability Zone
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultForAz")]
    public bool? DefaultForAz { get; init; }

    /// <summary>
    /// Indicates whether instances launched in this subnet receive a public IPv4 address
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapPublicIpOnLaunch")]
    public bool? MapPublicIpOnLaunch { get; init; }

    /// <summary>
    /// The ID of the AWS account that owns the subnet
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownerId")]
    public string? OwnerId { get; init; }

    /// <summary>
    /// Any tags assigned to the subnet
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
