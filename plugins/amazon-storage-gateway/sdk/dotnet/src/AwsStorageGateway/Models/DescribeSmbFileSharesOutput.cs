using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeSmbFileSharesOutput
{
    /// <summary>
    /// An array containing a description for each requested file share.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SMBFileShareInfoList")]
    public IReadOnlyList<SmbFileShareInfo>? SmbFileShareInfoList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
