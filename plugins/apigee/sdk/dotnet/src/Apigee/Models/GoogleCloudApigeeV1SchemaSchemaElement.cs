using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Message type for the schema element
/// </summary>
public record GoogleCloudApigeeV1SchemaSchemaElement
{
    /// <summary>
    /// Name of the field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Properties for the schema field. For example: { "createTime": "2016-02-26T10:23:09.592Z", "custom": "false", "type": "string" }
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public GoogleCloudApigeeV1SchemaSchemaProperty1? Properties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
