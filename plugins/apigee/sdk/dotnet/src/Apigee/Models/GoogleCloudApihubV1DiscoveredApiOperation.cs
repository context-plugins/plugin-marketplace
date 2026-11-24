using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// DiscoveredApiOperation represents an API Operation observed in one of the sources.
/// </summary>
public record GoogleCloudApihubV1DiscoveredApiOperation
{
    /// <summary>
    /// Output only. Create time stamp of the discovered API operation in API Hub.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Identifier. The name of the discovered API Operation. Format: <c>projects/{project}/locations/{location}/discoveredApiObservations/{discovered_api_observation}/discoveredApiOperations/{discovered_api_operation}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. The number of occurrences of this API Operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    public string? Count { get; init; }

    /// <summary>
    /// Output only. The classification of the discovered API operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classification")]
    public Classification? Classification { get; init; }

    /// <summary>
    /// Output only. The metadata of the source from which the api operation was collected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceMetadata")]
    public GoogleCloudApihubV1SourceMetadata1? SourceMetadata { get; init; }

    /// <summary>
    /// Output only. Update time stamp of the discovered API operation in API Hub.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Optional. An HTTP Operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpOperation")]
    public GoogleCloudApihubV1HttpOperationDetails2? HttpOperation { get; init; }

    /// <summary>
    /// Optional. Last seen time stamp
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastSeenTime")]
    public string? LastSeenTime { get; init; }

    /// <summary>
    /// Output only. The list of matched results for the discovered API operation. This will be populated only if the classification is known. The current usecase is for a single match. Keeping it repeated to support multiple matches in future.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matchResults")]
    public IReadOnlyList<GoogleCloudApihubV1MatchResult>? MatchResults { get; init; }

    /// <summary>
    /// Optional. First seen time stamp
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstSeenTime")]
    public string? FirstSeenTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
