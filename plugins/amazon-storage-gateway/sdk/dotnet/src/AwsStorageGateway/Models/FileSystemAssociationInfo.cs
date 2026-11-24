using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record FileSystemAssociationInfo
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the file system association.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileSystemAssociationARN")]
    public string? FileSystemAssociationArn { get; init; }

    /// <summary>
    /// The ARN of the backend Amazon FSx file system used for storing file data. For information, see FileSystem in the Amazon FSx API Reference.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LocationARN")]
    public string? LocationArn { get; init; }

    /// <summary>
    /// The status of the file system association. Valid Values: AVAILABLE | CREATING | DELETING | FORCE_DELETING | UPDATING | ERROR
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileSystemAssociationStatus")]
    public string? FileSystemAssociationStatus { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the storage used for the audit logs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AuditDestinationARN")]
    public string? AuditDestinationArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayARN")]
    public string? GatewayArn { get; init; }

    /// <summary>
    /// A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key name. Each tag is a key-value pair.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CacheAttributes")]
    public CacheAttributes? CacheAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndpointNetworkConfiguration")]
    public EndpointNetworkConfiguration? EndpointNetworkConfiguration { get; init; }

    /// <summary>
    /// An array containing the FileSystemAssociationStatusDetail data type, which provides detailed information on file system association status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileSystemAssociationStatusDetails")]
    public IReadOnlyList<FileSystemAssociationStatusDetail>? FileSystemAssociationStatusDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
