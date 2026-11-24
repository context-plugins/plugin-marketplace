using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Output only. Runtime information about session execution.
/// </summary>
public record RuntimeInfo1
{
    /// <summary>
    /// Output only. Approximate workload resource usage, calculated when the workload completes (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).Note: This metric calculation may change in the future, for example, to capture cumulative workload resource consumption during workload execution (see the Dataproc Serverless release notes (https://cloud.google.com/dataproc-serverless/docs/release-notes) for announcements, changes, fixes and other Dataproc developments).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approximateUsage")]
    public UsageMetrics1? ApproximateUsage { get; init; }

    /// <summary>
    /// Output only. Information about the cohort that the workload belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cohortInfo")]
    public CohortInfo2? CohortInfo { get; init; }

    /// <summary>
    /// Optional. Properties of the workload organized by origin.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("propertiesInfo")]
    public PropertiesInfo2? PropertiesInfo { get; init; }

    /// <summary>
    /// Output only. Snapshot of current workload resource usage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentUsage")]
    public UsageSnapshot2? CurrentUsage { get; init; }

    /// <summary>
    /// Output only. A URI pointing to the location of the stdout and stderr of the workload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputUri")]
    public string? OutputUri { get; init; }

    /// <summary>
    /// Output only. A URI pointing to the location of the diagnostics tarball.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diagnosticOutputUri")]
    public string? DiagnosticOutputUri { get; init; }

    /// <summary>
    /// Output only. Map of remote access endpoints (such as web interfaces and APIs) to their URIs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpoints")]
    public IReadOnlyDictionary<string, string>? Endpoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
