using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Configuration information for the auxiliary service versions.
/// </summary>
public record AuxiliaryVersionConfig
{
    /// <summary>
    /// Output only. The network configuration contains the endpoint URI(s) of the auxiliary Hive metastore service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("networkConfig")]
    public NetworkConfig1? NetworkConfig { get; init; }

    /// <summary>
    /// Optional. The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public string? Version { get; init; }

    /// <summary>
    /// Optional. A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("configOverrides")]
    public IReadOnlyDictionary<string, string>? ConfigOverrides { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
