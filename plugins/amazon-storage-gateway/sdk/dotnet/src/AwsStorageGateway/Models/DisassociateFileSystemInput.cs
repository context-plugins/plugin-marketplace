using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DisassociateFileSystemInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the file system association to be deleted.
    /// </summary>
    [JsonPropertyName("FileSystemAssociationARN")]
    public required string FileSystemAssociationArn { get; init; }

    /// <summary>
    /// If this value is set to true, the operation disassociates an Amazon FSx file system immediately. It ends all data uploads to the file system, and the file system association enters the FORCE_DELETING status. If this value is set to false, the Amazon FSx file system does not disassociate until all data is uploaded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ForceDelete")]
    public bool? ForceDelete { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
