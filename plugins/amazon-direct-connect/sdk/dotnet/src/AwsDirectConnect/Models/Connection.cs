using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record Connection
{
    /// <summary>
    /// The ID of the Amazon Web Services account that owns the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownerAccount")]
    public string? OwnerAccount { get; init; }

    /// <summary>
    /// The ID of the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectionId")]
    public string? ConnectionId { get; init; }

    /// <summary>
    /// The name of the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectionName")]
    public string? ConnectionName { get; init; }

    /// <summary>
    /// The state of the connection. The following are the possible values: ordering: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order. requested: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer. pending: The connection has been approved and is being initialized. available: The network link is up and the connection is ready for use. down: The network l
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectionState")]
    public ConnectionState? ConnectionState { get; init; }

    /// <summary>
    /// The Amazon Web Services Region where the connection is located.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public string? Region { get; init; }

    /// <summary>
    /// The location of the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// The bandwidth of the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bandwidth")]
    public string? Bandwidth { get; init; }

    /// <summary>
    /// The ID of the VLAN.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vlan")]
    public int? Vlan { get; init; }

    /// <summary>
    /// The name of the Direct Connect service provider associated with the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partnerName")]
    public string? PartnerName { get; init; }

    /// <summary>
    /// The time of the most recent call to DescribeLoa for this connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loaIssueTime")]
    public DateTimeOffset? LoaIssueTime { get; init; }

    /// <summary>
    /// The ID of the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lagId")]
    public string? LagId { get; init; }

    /// <summary>
    /// The Direct Connect endpoint on which the physical connection terminates.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsDevice")]
    public string? AwsDevice { get; init; }

    /// <summary>
    /// Indicates whether jumbo frames are supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jumboFrameCapable")]
    public bool? JumboFrameCapable { get; init; }

    /// <summary>
    /// The Direct Connect endpoint that terminates the physical connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsDeviceV2")]
    public string? AwsDeviceV2 { get; init; }

    /// <summary>
    /// The Direct Connect endpoint that terminates the logical connection. This device might be different than the device that terminates the physical connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsLogicalDeviceId")]
    public string? AwsLogicalDeviceId { get; init; }

    /// <summary>
    /// Indicates whether the connection supports a secondary BGP peer in the same address family (IPv4/IPv6).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasLogicalRedundancy")]
    public HasLogicalRedundancy? HasLogicalRedundancy { get; init; }

    /// <summary>
    /// The tags associated with the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The name of the service provider associated with the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("providerName")]
    public string? ProviderName { get; init; }

    /// <summary>
    /// Indicates whether the connection supports MAC Security (MACsec).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("macSecCapable")]
    public bool? MacSecCapable { get; init; }

    /// <summary>
    /// The MAC Security (MACsec) port link status of the connection. The valid values are Encryption Up, which means that there is an active Connection Key Name, or Encryption Down.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("portEncryptionStatus")]
    public string? PortEncryptionStatus { get; init; }

    /// <summary>
    /// The MAC Security (MACsec) connection encryption mode. The valid values are no_encrypt, should_encrypt, and must_encrypt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionMode")]
    public string? EncryptionMode { get; init; }

    /// <summary>
    /// The MAC Security (MACsec) security keys associated with the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("macSecKeys")]
    public IReadOnlyList<MacSecKey>? MacSecKeys { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rateLimiterStatus")]
    public RateLimiterStatus? RateLimiterStatus { get; init; }

    /// <summary>
    /// Indicates whether the interconnect hosting this connection supports MAC Security (MACsec).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partnerInterconnectMacSecCapable")]
    public bool? PartnerInterconnectMacSecCapable { get; init; }

    /// <summary>
    /// The total number of inbound IPv4 route prefixes you can allocate across the virtual interfaces on the connection. Not applicable to hosted connections or interconnects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixPoolSizeIpv4")]
    public int? PrefixPoolSizeIpv4 { get; init; }

    /// <summary>
    /// The total number of inbound IPv6 route prefixes you can allocate across the virtual interfaces on the connection. Not applicable to hosted connections or interconnects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixPoolSizeIpv6")]
    public int? PrefixPoolSizeIpv6 { get; init; }

    /// <summary>
    /// The number of inbound IPv4 route prefixes in the connection prefix pool not yet allocated to a virtual interface. Not applicable to hosted connections or interconnects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixPoolUnallocatedCountIpv4")]
    public int? PrefixPoolUnallocatedCountIpv4 { get; init; }

    /// <summary>
    /// The number of inbound IPv6 route prefixes in the connection prefix pool not yet allocated to a virtual interface. Not applicable to hosted connections or interconnects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixPoolUnallocatedCountIpv6")]
    public int? PrefixPoolUnallocatedCountIpv6 { get; init; }

    /// <summary>
    /// The billing mode of the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingMode")]
    public BillingMode1? BillingMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
