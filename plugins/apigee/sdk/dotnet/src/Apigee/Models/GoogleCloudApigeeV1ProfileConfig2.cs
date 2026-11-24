using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. Customized profile configuration that computes the security score.
/// </summary>
public record GoogleCloudApigeeV1ProfileConfig2
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
