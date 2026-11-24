using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// A representation of a configuration override.
/// </summary>
public record GoogleCloudApigeeV1TraceConfigOverride
{
    /// <summary>
    /// ID of the trace configuration override specified as a system-generated UUID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// ID of the API proxy that will have its trace configuration overridden.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiProxy")]
    public string? ApiProxy { get; init; }

    /// <summary>
    /// Trace configuration to override.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("samplingConfig")]
    public GoogleCloudApigeeV1TraceSamplingConfig2? SamplingConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
