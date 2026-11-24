using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Properties of the workload organized by origin.
/// </summary>
public record PropertiesInfo
{
    /// <summary>
    /// Output only. Properties set by autotuning engine.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autotuningProperties")]
    public IReadOnlyDictionary<string, ValueInfo>? AutotuningProperties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
