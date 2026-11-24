using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

public record ShufflePushReadQuantileMetrics
{
    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("corruptMergedBlockChunks")]
    public Quantiles? CorruptMergedBlockChunks { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localMergedBlocksFetched")]
    public Quantiles? LocalMergedBlocksFetched { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localMergedBytesRead")]
    public Quantiles? LocalMergedBytesRead { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localMergedChunksFetched")]
    public Quantiles? LocalMergedChunksFetched { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remoteMergedReqsDuration")]
    public Quantiles? RemoteMergedReqsDuration { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remoteMergedChunksFetched")]
    public Quantiles? RemoteMergedChunksFetched { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remoteMergedBytesRead")]
    public Quantiles? RemoteMergedBytesRead { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mergedFetchFallbackCount")]
    public Quantiles? MergedFetchFallbackCount { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remoteMergedBlocksFetched")]
    public Quantiles? RemoteMergedBlocksFetched { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
