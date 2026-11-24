using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Filter for environments.
/// </summary>
public record GoogleCloudApihubV1EnvironmentFilter
{
    /// <summary>
    /// Optional. If provided, only environments in this list are matched. This field is ignored if <c>all_environments</c> is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environments")]
    public IReadOnlyList<string>? Environments { get; init; }

    /// <summary>
    /// Optional. Indicates if this filter should match all environments or only a subset of environments. If set to true, all environments are matched.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allEnvironments")]
    public bool? AllEnvironments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
