using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Runtime configuration for the session execution.
/// </summary>
public record RuntimeConfig2
{
    /// <summary>
    /// Optional. A mapping of property names to values, which are used to configure workload execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public IReadOnlyDictionary<string, string>? Properties { get; init; }

    /// <summary>
    /// Optional. Dependency repository configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("repositoryConfig")]
    public RepositoryConfig2? RepositoryConfig { get; init; }

    /// <summary>
    /// Optional. Optional custom container image for the job runtime environment. If not specified, a default container image will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("containerImage")]
    public string? ContainerImage { get; init; }

    /// <summary>
    /// Optional. Version of the batch runtime.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public string? Version { get; init; }

    /// <summary>
    /// Optional. Autotuning configuration of the workload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autotuningConfig")]
    public AutotuningConfig2? AutotuningConfig { get; init; }

    /// <summary>
    /// Optional. Cohort identifier. Identifies families of the workloads that have the same shape, for example, daily ETL jobs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cohort")]
    public string? Cohort { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
