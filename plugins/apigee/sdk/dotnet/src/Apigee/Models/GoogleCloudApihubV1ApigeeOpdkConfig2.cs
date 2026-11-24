using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Configuration for Apigee OPDK gateways.
/// </summary>
public record GoogleCloudApihubV1ApigeeOpdkConfig2
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
