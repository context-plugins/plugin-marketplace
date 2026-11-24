using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record AssociateFileSystemInput
{
    /// <summary>
    /// The user name of the user credential that has permission to access the root share D$ of the Amazon FSx file system. The user account must belong to the Amazon FSx delegated admin user group.
    /// </summary>
    [JsonPropertyName("UserName")]
    public required string UserName { get; init; }

    /// <summary>
    /// The password of the user credential.
    /// </summary>
    [JsonPropertyName("Password")]
    public required string Password { get; init; }

    /// <summary>
    /// A unique string value that you supply that is used by the FSx File Gateway to ensure idempotent file system association creation.
    /// </summary>
    [JsonPropertyName("ClientToken")]
    public required string ClientToken { get; init; }

    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the Amazon FSx file system to associate with the FSx File Gateway.
    /// </summary>
    [JsonPropertyName("LocationARN")]
    public required string LocationArn { get; init; }

    /// <summary>
    /// A list of up to 50 tags that can be assigned to the file system association. Each tag is a key-value pair.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the storage used for the audit logs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AuditDestinationARN")]
    public string? AuditDestinationArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CacheAttributes")]
    public CacheAttributes? CacheAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndpointNetworkConfiguration")]
    public EndpointNetworkConfiguration? EndpointNetworkConfiguration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
