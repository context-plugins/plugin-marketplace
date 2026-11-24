using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Details about the Environment that the application is running in.
/// </summary>
public record ApplicationEnvironmentInfo
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("systemProperties")]
    public IReadOnlyDictionary<string, string>? SystemProperties { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtime")]
    public SparkRuntimeInfo? Runtime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hadoopProperties")]
    public IReadOnlyDictionary<string, string>? HadoopProperties { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricsProperties")]
    public IReadOnlyDictionary<string, string>? MetricsProperties { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classpathEntries")]
    public IReadOnlyDictionary<string, string>? ClasspathEntries { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceProfiles")]
    public IReadOnlyList<ResourceProfileInfo>? ResourceProfiles { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkProperties")]
    public IReadOnlyDictionary<string, string>? SparkProperties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
