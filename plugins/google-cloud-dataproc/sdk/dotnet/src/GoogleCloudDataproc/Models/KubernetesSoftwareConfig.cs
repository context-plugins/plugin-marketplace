using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// The software configuration for this Dataproc cluster running on Kubernetes.
/// </summary>
public record KubernetesSoftwareConfig
{
    /// <summary>
    /// The components that should be installed in this Dataproc cluster. The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must be specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("componentVersion")]
    public IReadOnlyDictionary<string, string>? ComponentVersion { get; init; }

    /// <summary>
    /// The properties to set on daemon config files.Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image. The following are supported prefixes and their mappings: spark: spark-defaults.confFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public IReadOnlyDictionary<string, string>? Properties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
