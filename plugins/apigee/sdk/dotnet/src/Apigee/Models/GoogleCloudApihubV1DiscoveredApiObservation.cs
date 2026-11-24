using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Respresents an API Observation observed in one of the sources.
/// </summary>
public record GoogleCloudApihubV1DiscoveredApiObservation
{
    /// <summary>
    /// Optional. Last event detected time stamp
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastEventDetectedTime")]
    public string? LastEventDetectedTime { get; init; }

    /// <summary>
    /// Output only. The number of unknown API Operations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unknownOperationsCount")]
    public string? UnknownOperationsCount { get; init; }

    /// <summary>
    /// Optional. The hostname of requests processed for this Observation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostname")]
    public string? Hostname { get; init; }

    /// <summary>
    /// Optional. The location of the observation source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLocations")]
    public IReadOnlyList<string>? SourceLocations { get; init; }

    /// <summary>
    /// Optional. The IP address (IPv4 or IPv6) of the origin server that the request was sent to. This field can include port information. Examples: <c>"192.168.1.1"</c>, <c>"10.0.0.1:80"</c>, <c>"FE80::0202:B3FF:FE1E:8329"</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serverIps")]
    public IReadOnlyList<string>? ServerIps { get; init; }

    /// <summary>
    /// Optional. Style of ApiObservation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("style")]
    public Style? Style { get; init; }

    /// <summary>
    /// Optional. For an observation pushed from a Google Cloud resource, this would be the Google Cloud project id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("origin")]
    public string? Origin { get; init; }

    /// <summary>
    /// Optional. The type of the source from which the observation was collected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceTypes")]
    public IReadOnlyList<SourceType1>? SourceTypes { get; init; }

    /// <summary>
    /// Optional. The number of observed API Operations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiOperationCount")]
    public string? ApiOperationCount { get; init; }

    /// <summary>
    /// Identifier. The name of the discovered API Observation. Format: <c>projects/{project}/locations/{location}/discoveredApiObservations/{discovered_api_observation}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. Create time stamp of the observation in API Hub.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. The metadata of the source from which the observation was collected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceMetadata")]
    public GoogleCloudApihubV1SourceMetadata2? SourceMetadata { get; init; }

    /// <summary>
    /// Output only. Update time stamp of the observation in API Hub.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Output only. The number of known API Operations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("knownOperationsCount")]
    public string? KnownOperationsCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
