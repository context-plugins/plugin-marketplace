using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DisassociateFileSystemOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the deleted file system association.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileSystemAssociationARN")]
    public string? FileSystemAssociationArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
