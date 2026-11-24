using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record JobEnrichmentData
{
    /// <summary>
    /// Up to 200 of the job's most recent traces; use trace_summary for whole-job counts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chart_data")]
    public IReadOnlyList<JobChartDataPoint>? ChartData { get; init; }

    /// <summary>
    /// Trace counts over the whole job.
    /// <para>
    /// Invalidated traces count only toward ``invalidated``. ``running`` includes traces
    /// that are still cancelling, and ``queued`` is pending or initializing. ``scored``
    /// and ``unscored`` split every terminal non-error trace by whether it has a reward.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trace_summary")]
    public JobTraceSummary? TraceSummary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskset_coverage")]
    public IReadOnlyList<JobTaskCoverage>? TasksetCoverage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("models")]
    public IReadOnlyList<TraceThumbnailModel>? Models { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskset")]
    public Taskset? Taskset { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
