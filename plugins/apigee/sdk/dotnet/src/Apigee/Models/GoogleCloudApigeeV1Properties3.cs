using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. Key-value pairs that may be used for customizing the environment.
/// </summary>
public record GoogleCloudApigeeV1Properties3
{
    /// <summary>
    /// List of all properties in the object
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("property")]
    public IReadOnlyList<GoogleCloudApigeeV1Property>? Property { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
