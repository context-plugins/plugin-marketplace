using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record FileSystemAssociationSummary
{
    /// <summary>
    /// The ID of the file system association.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileSystemAssociationId")]
    public string? FileSystemAssociationId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the file system association.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileSystemAssociationARN")]
    public string? FileSystemAssociationArn { get; init; }

    /// <summary>
    /// The status of the file share. Valid Values: AVAILABLE | CREATING | DELETING | FORCE_DELETING | UPDATING | ERROR
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileSystemAssociationStatus")]
    public string? FileSystemAssociationStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayARN")]
    public string? GatewayArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
