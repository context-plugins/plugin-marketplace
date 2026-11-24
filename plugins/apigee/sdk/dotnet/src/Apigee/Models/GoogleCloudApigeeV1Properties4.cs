using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. Properties defined in the Apigee organization profile.
/// </summary>
public record GoogleCloudApigeeV1Properties4
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
