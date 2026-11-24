using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Distributed trace configuration for all API proxies in an environment. You can also override the configuration for a specific API proxy using the distributed trace configuration overrides API.
/// </summary>
public record GoogleCloudApigeeV1TraceSamplingConfig3
{
    /// <summary>
    /// Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are &gt; 0 and &lt;= 0.5.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("samplingRate")]
    public double? SamplingRate { get; init; }

    /// <summary>
    /// Sampler of distributed tracing. OFF is the default value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sampler")]
    public Sampler? Sampler { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
