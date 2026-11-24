using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeNfsFileSharesInput
{
    /// <summary>
    /// An array containing the Amazon Resource Name (ARN) of each file share to be described.
    /// </summary>
    [JsonPropertyName("FileShareARNList")]
    public required IReadOnlyList<string> FileShareArnList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
