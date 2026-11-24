using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Configuration for Apigee X and Apigee Hybrid gateways. Applicability of a filter is determined by the filter being provided. If none of the filters are provided the addon will be enabled for all data brought in by the gateway plugin instance.
/// </summary>
public record GoogleCloudApihubV1ApigeeXHybridConfig
{
    /// <summary>
    /// Optional. The filter to apply on the resources managed by the gateway plugin instance. If provided this filter applies environment specific filtering.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentFilter")]
    public GoogleCloudApihubV1EnvironmentFilter1? EnvironmentFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
