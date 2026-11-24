using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Salesforce object.
/// </summary>
public record SalesforceObject
{
    /// <summary>
    /// Salesforce fields. When unspecified as part of include objects, includes everything, when unspecified as part of exclude objects, excludes nothing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fields")]
    public IReadOnlyList<SalesforceField>? Fields { get; init; }

    /// <summary>
    /// The object name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objectName")]
    public string? ObjectName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
