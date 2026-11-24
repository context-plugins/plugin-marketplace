using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;
using GoogleCloudDatastream.Models.Enums;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Spanner data source configuration.
/// </summary>
public record SpannerSourceConfig2
{
    /// <summary>
    /// Optional. The FGAC role to use for the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fgacRole")]
    public string? FgacRole { get; init; }

    /// <summary>
    /// Optional. The Spanner objects to retrieve from the data source. If some objects are both included and excluded, an error will be thrown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeObjects")]
    public SpannerDatabase3? IncludeObjects { get; init; }

    /// <summary>
    /// Optional. Maximum number of concurrent CDC tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxConcurrentCdcTasks")]
    public int? MaxConcurrentCdcTasks { get; init; }

    /// <summary>
    /// Optional. The RPC priority to use for the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spannerRpcPriority")]
    public SpannerRpcPriority? SpannerRpcPriority { get; init; }

    /// <summary>
    /// Optional. Whether to use Data Boost for Spanner backfills. Defaults to false if not set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("backfillDataBoostEnabled")]
    public bool? BackfillDataBoostEnabled { get; init; }

    /// <summary>
    /// Required. Immutable. The change stream name to use for the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changeStreamName")]
    public string? ChangeStreamName { get; init; }

    /// <summary>
    /// Optional. Maximum number of concurrent backfill tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxConcurrentBackfillTasks")]
    public int? MaxConcurrentBackfillTasks { get; init; }

    /// <summary>
    /// Optional. The Spanner objects to avoid retrieving. If some objects are both included and excluded, an error will be thrown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeObjects")]
    public SpannerDatabase4? ExcludeObjects { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
