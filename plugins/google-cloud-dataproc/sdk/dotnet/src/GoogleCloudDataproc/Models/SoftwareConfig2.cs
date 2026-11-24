using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. The config settings for cluster software.
/// </summary>
public record SoftwareConfig2
{
    /// <summary>
    /// Optional. The set of components to activate on the cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("optionalComponents")]
    public IReadOnlyList<OptionalComponent>? OptionalComponents { get; init; }

    /// <summary>
    /// Optional. The version of software inside the cluster. It must be one of the supported Image Versions (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported-dataproc-image-versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the "preview" version (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageVersion")]
    public string? ImageVersion { get; init; }

    /// <summary>
    /// Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. The following are supported prefixes and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xmlFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public IReadOnlyDictionary<string, string>? Properties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
