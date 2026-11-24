using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// An attribute in the API Hub. An attribute is a name value pair which can be attached to different resources in the API hub based on the scope of the attribute. Attributes can either be pre-defined by the API Hub or created by users.
/// </summary>
public record GoogleCloudApihubV1Attribute
{
    /// <summary>
    /// Required. The type of the data of the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataType")]
    public DataType3? DataType { get; init; }

    /// <summary>
    /// Output only. The time at which the attribute was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Output only. The time at which the attribute was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Identifier. The name of the attribute in the API Hub. Format: <c>projects/{project}/locations/{location}/attributes/{attribute}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. When mandatory is true, the attribute is mandatory for the resource specified in the scope. Only System defined attributes can be mandatory.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mandatory")]
    public bool? Mandatory { get; init; }

    /// <summary>
    /// Optional. The description of the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Output only. The definition type of the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("definitionType")]
    public DefinitionType? DefinitionType { get; init; }

    /// <summary>
    /// Optional. The maximum number of values that the attribute can have when associated with an API Hub resource. Cardinality 1 would represent a single-valued attribute. It must not be less than 1 or greater than 20. If not specified, the cardinality would be set to 1 by default and represent a single-valued attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cardinality")]
    public int? Cardinality { get; init; }

    /// <summary>
    /// Optional. The list of allowed values when the attribute value is of type enum. This is required when the data_type of the attribute is ENUM. The maximum number of allowed values of an attribute will be 1000.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowedValues")]
    public IReadOnlyList<GoogleCloudApihubV1AllowedValue>? AllowedValues { get; init; }

    /// <summary>
    /// Required. The display name of the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Required. The scope of the attribute. It represents the resource in the API Hub to which the attribute can be linked.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scope")]
    public Scope? Scope { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
