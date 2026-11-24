using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record Interconnect
{
    /// <summary>
    /// The ID of the interconnect.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interconnectId")]
    public string? InterconnectId { get; init; }

    /// <summary>
    /// The name of the interconnect.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interconnectName")]
    public string? InterconnectName { get; init; }

    /// <summary>
    /// The state of the interconnect. The following are the possible values: requested: The initial state of an interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the customer. pending: The interconnect is approved, and is being initialized. available: The network link is up, and the interconnect is ready for use. down: The network link is down. deleting: The interconnect is being deleted. deleted: The interconnect is deleted. unknown: The state of the interconnect is not available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interconnectState")]
    public InterconnectState? InterconnectState { get; init; }

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
    /// Indicates whether the interconnect supports a secondary BGP in the same address family (IPv4/IPv6).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasLogicalRedundancy")]
    public HasLogicalRedundancy1? HasLogicalRedundancy { get; init; }

    /// <summary>
    /// The tags associated with the interconnect.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The name of the service provider associated with the interconnect.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("providerName")]
    public string? ProviderName { get; init; }

    /// <summary>
    /// Indicates whether the interconnect supports MAC Security (MACsec).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("macSecCapable")]
    public bool? MacSecCapable { get; init; }

    /// <summary>
    /// The MAC Security (MACsec) port link status. The valid values are Encryption Up, which means that there is an active Connection Key Name, or Encryption Down.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("portEncryptionStatus")]
    public string? PortEncryptionStatus { get; init; }

    /// <summary>
    /// The MAC Security (MACsec) encryption mode. The valid values are no_encrypt, should_encrypt, and must_encrypt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionMode")]
    public string? EncryptionMode { get; init; }

    /// <summary>
    /// The MAC Security (MACsec) security keys.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("macSecKeys")]
    public IReadOnlyList<MacSecKey>? MacSecKeys { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
