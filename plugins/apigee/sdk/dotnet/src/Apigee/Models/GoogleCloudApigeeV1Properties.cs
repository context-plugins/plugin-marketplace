using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Message for compatibility with legacy Edge specification for Java Properties object in JSON.
/// </summary>
public record GoogleCloudApigeeV1Properties
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
