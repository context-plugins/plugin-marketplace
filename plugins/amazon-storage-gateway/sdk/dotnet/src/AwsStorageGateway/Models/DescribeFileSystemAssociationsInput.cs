using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeFileSystemAssociationsInput
{
    /// <summary>
    /// An array containing the Amazon Resource Name (ARN) of each file system association to be described.
    /// </summary>
    [JsonPropertyName("FileSystemAssociationARNList")]
    public required IReadOnlyList<string> FileSystemAssociationArnList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
