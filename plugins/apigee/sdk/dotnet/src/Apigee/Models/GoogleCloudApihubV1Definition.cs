using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Represents a definition for example schema, request, response definitions contained in an API version. A definition is added/updated/deleted in an API version when a new spec is added or an existing spec is updated/deleted in a version. Currently, definition will be created only corresponding to OpenAPI spec as parsing is supported for OpenAPI spec. Also, within OpenAPI spec, only <c>schema</c> object is supported.
/// </summary>
public record GoogleCloudApihubV1Definition
{
    /// <summary>
    /// Output only. The value of a schema definition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schema")]
    public GoogleCloudApihubV1Schema2? Schema { get; init; }

    /// <summary>
    /// Identifier. The name of the definition. Format: <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}/definitions/{definition}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. The name of the spec from where the definition was parsed. Format is <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spec")]
    public string? Spec { get; init; }

    /// <summary>
    /// Output only. The time at which the definition was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. The type of the definition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeApigeeProjectsApi? Type { get; init; }

    /// <summary>
    /// Output only. The time at which the definition was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Optional. The list of user defined attributes associated with the definition resource. The key is the attribute name. It will be of the format: <c>projects/{project}/locations/{location}/attributes/{attribute}</c>. The value is the attribute values associated with the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyDictionary<string, GoogleCloudApihubV1AttributeValues>? Attributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
