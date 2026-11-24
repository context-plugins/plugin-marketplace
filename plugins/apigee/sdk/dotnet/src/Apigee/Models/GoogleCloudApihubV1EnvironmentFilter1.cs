using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. The filter to apply on the resources managed by the gateway plugin instance. If provided this filter applies environment specific filtering.
/// </summary>
public record GoogleCloudApihubV1EnvironmentFilter1
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
