using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;
using GoogleCloudDatastream.Models.Enums;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// A resource representing streaming data from a source to a destination.
/// </summary>
public record Stream
{
    /// <summary>
    /// Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerManagedEncryptionKey")]
    public string? CustomerManagedEncryptionKey { get; init; }

    /// <summary>
    /// Required. Destination connection profile configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destinationConfig")]
    public DestinationConfig2? DestinationConfig { get; init; }

    /// <summary>
    /// Output only. If the stream was recovered, the time of the last recovery. Note: This field is currently experimental.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastRecoveryTime")]
    public string? LastRecoveryTime { get; init; }

    /// <summary>
    /// Output only. The last update time of the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Output only. Identifier. The stream's name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The state of the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State1? State { get; init; }

    /// <summary>
    /// Output only. The creation time of the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. Reserved for future use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("satisfiesPzs")]
    public bool? SatisfiesPzs { get; init; }

    /// <summary>
    /// Output only. Reserved for future use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("satisfiesPzi")]
    public bool? SatisfiesPzi { get; init; }

    /// <summary>
    /// Optional. Rule sets to apply to the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ruleSets")]
    public IReadOnlyList<RuleSet>? RuleSets { get; init; }

    /// <summary>
    /// Required. Display name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Required. Source connection profile configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceConfig")]
    public SourceConfig2? SourceConfig { get; init; }

    /// <summary>
    /// Do not automatically backfill any objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("backfillNone")]
    public object? BackfillNone { get; init; }

    /// <summary>
    /// Labels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Output only. Errors on the Stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public IReadOnlyList<Error>? Errors { get; init; }

    /// <summary>
    /// Automatically backfill objects included in the stream source configuration. Specific objects can be excluded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("backfillAll")]
    public BackfillAllStrategy1? BackfillAll { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
