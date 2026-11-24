using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The attribute values of data type enum.
/// </summary>
public record GoogleCloudApihubV1EnumAttributeValues
{
    /// <summary>
    /// Required. The attribute values in case attribute data type is enum.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<GoogleCloudApihubV1AllowedValue>? Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
