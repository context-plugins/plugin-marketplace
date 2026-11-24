using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// A dependency resource defined in the API hub describes a dependency directed from a consumer to a supplier entity. A dependency can be defined between two Operations or between an Operation and External API.
/// </summary>
public record GoogleCloudApihubV1Dependency
{
    /// <summary>
    /// Output only. The time at which the dependency was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Optional. Human readable description corresponding of the dependency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Output only. The time at which the dependency was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Required. Immutable. The entity acting as the consumer in the dependency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consumer")]
    public GoogleCloudApihubV1DependencyEntityReference3? Consumer { get; init; }

    /// <summary>
    /// Required. Immutable. The entity acting as the supplier in the dependency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supplier")]
    public GoogleCloudApihubV1DependencyEntityReference1? Supplier { get; init; }

    /// <summary>
    /// Output only. Error details of a dependency if the system has detected it internally.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorDetail")]
    public GoogleCloudApihubV1DependencyErrorDetail2? ErrorDetail { get; init; }

    /// <summary>
    /// Output only. State of the dependency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State5ApigeeProjectsApi? State { get; init; }

    /// <summary>
    /// Optional. The list of user defined attributes associated with the dependency resource. The key is the attribute name. It will be of the format: <c>projects/{project}/locations/{location}/attributes/{attribute}</c>. The value is the attribute values associated with the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyDictionary<string, GoogleCloudApihubV1AttributeValues>? Attributes { get; init; }

    /// <summary>
    /// Identifier. The name of the dependency in the API Hub. Format: <c>projects/{project}/locations/{location}/dependencies/{dependency}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. Discovery mode of the dependency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discoveryMode")]
    public DiscoveryMode? DiscoveryMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
