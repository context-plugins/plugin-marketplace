using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. Input schema for the operation. This can be parsed only from MCP schema type.
/// </summary>
public record GoogleCloudApihubV1OperationSchema3
{
    /// <summary>
    /// The JSON schema. Only valid JSON is accepted but semantic validation of schema is not supported right now.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jsonSchema")]
    public IReadOnlyDictionary<string, object>? JsonSchema { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
