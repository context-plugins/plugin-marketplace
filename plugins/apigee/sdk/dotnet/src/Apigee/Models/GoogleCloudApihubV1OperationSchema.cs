using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The operation schema needed for an operation.
/// </summary>
public record GoogleCloudApihubV1OperationSchema
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
