using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Trace configuration for all API proxies in an environment.
/// </summary>
public record GoogleCloudApigeeV1RuntimeTraceSamplingConfig3
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
