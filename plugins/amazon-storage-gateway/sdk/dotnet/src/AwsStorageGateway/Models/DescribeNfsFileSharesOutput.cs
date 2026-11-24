using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeNfsFileSharesOutput
{
    /// <summary>
    /// An array containing a description for each requested file share.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NFSFileShareInfoList")]
    public IReadOnlyList<NfsFileShareInfo>? NfsFileShareInfoList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
