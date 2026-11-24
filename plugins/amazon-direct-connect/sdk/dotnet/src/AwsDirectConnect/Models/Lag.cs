using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record Lag
{
    /// <summary>
    /// The individual bandwidth of the physical connections bundled by the LAG. The possible values are 1Gbps, 10Gbps, 100Gbps, or 400 Gbps..
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectionsBandwidth")]
    public string? ConnectionsBandwidth { get; init; }

    /// <summary>
    /// The number of physical dedicated connections initially provisioned and bundled by the LAG. You can have a maximum of four connections when the port speed is 1 Gbps or 10 Gbps, or two when the port speed is 100 Gbps or 400 Gbps.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numberOfConnections")]
    public int? NumberOfConnections { get; init; }

    /// <summary>
    /// The ID of the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lagId")]
    public string? LagId { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account that owns the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownerAccount")]
    public string? OwnerAccount { get; init; }

    /// <summary>
    /// The name of the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lagName")]
    public string? LagName { get; init; }

    /// <summary>
    /// The state of the LAG. The following are the possible values: requested: The initial state of a LAG. The LAG stays in the requested state until the Letter of Authorization (LOA) is available. pending: The LAG has been approved and is being initialized. available: The network link is established and the LAG is ready for use. down: The network link is down. deleting: The LAG is being deleted. deleted: The LAG is deleted. unknown: The state of the LAG is not available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lagState")]
    public LagState? LagState { get; init; }

    /// <summary>
    /// The location of the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// The Amazon Web Services Region where the connection is located.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public string? Region { get; init; }

    /// <summary>
    /// The minimum number of physical dedicated connections that must be operational for the LAG itself to be operational.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minimumLinks")]
    public int? MinimumLinks { get; init; }

    /// <summary>
    /// The Direct Connect endpoint that hosts the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsDevice")]
    public string? AwsDevice { get; init; }

    /// <summary>
    /// The Direct Connect endpoint that hosts the LAG.
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
    /// The connections bundled by the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connections")]
    public IReadOnlyList<Connection>? Connections { get; init; }

    /// <summary>
    /// Indicates whether the LAG can host other connections.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowsHostedConnections")]
    public bool? AllowsHostedConnections { get; init; }

    /// <summary>
    /// Indicates whether jumbo frames are supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jumboFrameCapable")]
    public bool? JumboFrameCapable { get; init; }

    /// <summary>
    /// Indicates whether the LAG supports a secondary BGP peer in the same address family (IPv4/IPv6).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasLogicalRedundancy")]
    public HasLogicalRedundancy2? HasLogicalRedundancy { get; init; }

    /// <summary>
    /// The tags associated with the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The name of the service provider associated with the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("providerName")]
    public string? ProviderName { get; init; }

    /// <summary>
    /// Indicates whether the LAG supports MAC Security (MACsec).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("macSecCapable")]
    public bool? MacSecCapable { get; init; }

    /// <summary>
    /// The LAG MAC Security (MACsec) encryption mode. The valid values are no_encrypt, should_encrypt, and must_encrypt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionMode")]
    public string? EncryptionMode { get; init; }

    /// <summary>
    /// The MAC Security (MACsec) security keys associated with the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("macSecKeys")]
    public IReadOnlyList<MacSecKey>? MacSecKeys { get; init; }

    /// <summary>
    /// The total number of inbound IPv4 route prefixes you can allocate across the virtual interfaces on the LAG. Not applicable to LAGs that are interconnects and support hosted connections.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixPoolSizeIpv4")]
    public int? PrefixPoolSizeIpv4 { get; init; }

    /// <summary>
    /// The total number of inbound IPv6 route prefixes you can allocate across the virtual interfaces on the LAG. Not applicable to LAGs that are interconnects and support hosted connections.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixPoolSizeIpv6")]
    public int? PrefixPoolSizeIpv6 { get; init; }

    /// <summary>
    /// The number of inbound IPv4 route prefixes in the LAG prefix pool not yet allocated to a virtual interface. Not applicable to LAGs that are interconnects and support hosted connections.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixPoolUnallocatedCountIpv4")]
    public int? PrefixPoolUnallocatedCountIpv4 { get; init; }

    /// <summary>
    /// The number of inbound IPv6 route prefixes in the LAG prefix pool not yet allocated to a virtual interface. Not applicable to LAGs that are interconnects and support hosted connections.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixPoolUnallocatedCountIpv6")]
    public int? PrefixPoolUnallocatedCountIpv6 { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rateLimiterStatus")]
    public RateLimiterStatus? RateLimiterStatus { get; init; }

    /// <summary>
    /// The billing mode of the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingMode")]
    public BillingMode4? BillingMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
