using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// ProfileConfig defines a set of categories and policies which will be used to compute security score.
/// </summary>
public record GoogleCloudApigeeV1ProfileConfig
{
    /// <summary>
    /// List of categories of profile config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("categories")]
    public IReadOnlyList<GoogleCloudApigeeV1ProfileConfigCategory>? Categories { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
