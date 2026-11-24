using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Encapsulates a <c>stats</c> response.
/// </summary>
public record GoogleCloudApigeeV1Stats
{
    /// <summary>
    /// List of query results grouped by host.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hosts")]
    public IReadOnlyList<GoogleCloudApigeeV1StatsHostStats>? Hosts { get; init; }

    /// <summary>
    /// List of query results on the environment level.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environments")]
    public IReadOnlyList<GoogleCloudApigeeV1StatsEnvironmentStats>? Environments { get; init; }

    /// <summary>
    /// Metadata information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metaData")]
    public GoogleCloudApigeeV1Metadata2? MetaData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
