using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record CheckResultDiagnosticsV4
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aggregate")]
    public AggregateDiagnosticsV4? Aggregate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aggregate_diff")]
    public AggregateDiffDiagnosticsV4? AggregateDiff { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duplicate")]
    public InvalidDiagnosticsV4? Duplicate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duplicate_diff")]
    public DuplicateDiffDiagnosticsV4? DuplicateDiff { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failed_rows")]
    public MissingDiagnosticsV4? FailedRows { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("freshness")]
    public FreshnessDiagnosticsV4? Freshness { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("freshness_diff")]
    public FreshnessDiffDiagnosticsV4? FreshnessDiff { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fuzzy_duplicate")]
    public FuzzyDuplicateDiagnosticsV4? FuzzyDuplicate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_by")]
    public GroupByDiagnosticsV4? GroupBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hierarchy")]
    public HierarchyDiagnosticsV4? Hierarchy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invalid")]
    public InvalidDiagnosticsV4? Invalid { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("llm")]
    public LlmDiagnosticsV4? Llm { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metric")]
    public MetricDiagnosticsV4? Metric { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metric_diff")]
    public MetricDiffDiagnosticsV4? MetricDiff { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("missing")]
    public MissingDiagnosticsV4? Missing { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reference_diff")]
    public ReferenceDiffDiagnosticsV4? ReferenceDiff { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("row_count")]
    public AggregateDiagnosticsV4? RowCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("row_count_diff")]
    public RowCountDiffDiagnosticsV4? RowCountDiff { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rows_diff")]
    public RowsDiffDiagnosticsV4? RowsDiff { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schema")]
    public SchemaDiagnosticsV4? Schema { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
