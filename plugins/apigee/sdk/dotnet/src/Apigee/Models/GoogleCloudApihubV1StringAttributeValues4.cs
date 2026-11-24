using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The attribute values associated with a resource in case attribute data type is URL, URI or IP, like gs://bucket-name/object-name.
/// </summary>
public record GoogleCloudApihubV1StringAttributeValues4
{
    /// <summary>
    /// Required. The attribute values in case attribute data type is string or JSON.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<string>? Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
