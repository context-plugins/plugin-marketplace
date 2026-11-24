using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// An HdfsData resource specifies a path within an HDFS entity (e.g. a cluster). All cluster-specific settings, such as namenodes and ports, are configured on the transfer agents servicing requests, so HdfsData only contains the root path to the data in our transfer.
/// </summary>
public record HdfsData
{
    /// <summary>
    /// Root path to transfer files.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
