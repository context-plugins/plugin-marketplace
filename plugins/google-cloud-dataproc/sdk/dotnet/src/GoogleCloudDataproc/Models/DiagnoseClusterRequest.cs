using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A request to collect cluster diagnostic information.
/// </summary>
public record DiagnoseClusterRequest
{
    /// <summary>
    /// Optional. Specifies a list of yarn applications on which diagnosis is to be performed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("yarnApplicationIds")]
    public IReadOnlyList<string>? YarnApplicationIds { get; init; }

    /// <summary>
    /// Optional. DEPRECATED Specifies the yarn application on which diagnosis is to be performed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("yarnApplicationId")]
    public string? YarnApplicationId { get; init; }

    /// <summary>
    /// Optional. Time interval in which diagnosis should be carried out on the cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diagnosisInterval")]
    public Interval2? DiagnosisInterval { get; init; }

    /// <summary>
    /// Optional. DEPRECATED Specifies the job on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("job")]
    public string? Job { get; init; }

    /// <summary>
    /// Optional. (Optional) The access type to the diagnostic tarball. If not specified, falls back to default access of the bucket
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tarballAccess")]
    public TarballAccess? TarballAccess { get; init; }

    /// <summary>
    /// Optional. Specifies a list of jobs on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobs")]
    public IReadOnlyList<string>? Jobs { get; init; }

    /// <summary>
    /// Optional. (Optional) The output Cloud Storage directory for the diagnostic tarball. If not specified, a task-specific directory in the cluster's staging bucket will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tarballGcsDir")]
    public string? TarballGcsDir { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
