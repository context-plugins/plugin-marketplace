using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeFileSystemAssociationsOutput
{
    /// <summary>
    /// An array containing the FileSystemAssociationInfo data type of each file system association to be described.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileSystemAssociationInfoList")]
    public IReadOnlyList<FileSystemAssociationInfo>? FileSystemAssociationInfoList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
