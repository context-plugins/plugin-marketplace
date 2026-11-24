using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for Schema call
/// </summary>
public record GoogleCloudApigeeV1Schema
{
    /// <summary>
    /// List of schema fields grouped as dimensions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<GoogleCloudApigeeV1SchemaSchemaElement>? Dimensions { get; init; }

    /// <summary>
    /// Additional metadata associated with schema. This is a legacy field and usually consists of an empty array of strings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta")]
    public IReadOnlyList<string>? Meta { get; init; }

    /// <summary>
    /// List of schema fields grouped as dimensions that can be used with an aggregate function such as <c>sum</c>, <c>avg</c>, <c>min</c>, and <c>max</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<GoogleCloudApigeeV1SchemaSchemaElement>? Metrics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
