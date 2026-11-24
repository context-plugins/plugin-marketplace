using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CheckTypeDto>))]
public sealed record CheckTypeDto : OpenStringEnum<CheckTypeDto>
{
    private CheckTypeDto(string value) : base(value)
    {
    }

    public static readonly CheckTypeDto Missing = new("missing");

    public static readonly CheckTypeDto Invalid = new("invalid");

    public static readonly CheckTypeDto RowCount = new("row_count");

    public static readonly CheckTypeDto Aggregate = new("aggregate");

    public static readonly CheckTypeDto Schema = new("schema");

    public static readonly CheckTypeDto Duplicate = new("duplicate");

    public static readonly CheckTypeDto Freshness = new("freshness");

    public static readonly CheckTypeDto FailedRows = new("failed_rows");

    public static readonly CheckTypeDto Metric = new("metric");

    public static readonly CheckTypeDto GroupBy = new("group_by");

    public static readonly CheckTypeDto RowCountDiff = new("row_count_diff");

    public static readonly CheckTypeDto AggregateDiff = new("aggregate_diff");

    public static readonly CheckTypeDto FreshnessDiff = new("freshness_diff");

    public static readonly CheckTypeDto MetricDiff = new("metric_diff");

    public static readonly CheckTypeDto RowsDiff = new("rows_diff");

    public static readonly CheckTypeDto DuplicateDiff = new("duplicate_diff");

    public static readonly CheckTypeDto Llm = new("llm");

    public static readonly CheckTypeDto Hierarchy = new("hierarchy");

    public static readonly CheckTypeDto FuzzyDuplicate = new("fuzzy_duplicate");

    public static readonly CheckTypeDto ReferenceDiff = new("reference_diff");

    public TResult Match<TResult>(Func<TResult> onMissing,
        Func<TResult> onInvalid,
        Func<TResult> onRowCount,
        Func<TResult> onAggregate,
        Func<TResult> onSchema,
        Func<TResult> onDuplicate,
        Func<TResult> onFreshness,
        Func<TResult> onFailedRows,
        Func<TResult> onMetric,
        Func<TResult> onGroupBy,
        Func<TResult> onRowCountDiff,
        Func<TResult> onAggregateDiff,
        Func<TResult> onFreshnessDiff,
        Func<TResult> onMetricDiff,
        Func<TResult> onRowsDiff,
        Func<TResult> onDuplicateDiff,
        Func<TResult> onLlm,
        Func<TResult> onHierarchy,
        Func<TResult> onFuzzyDuplicate,
        Func<TResult> onReferenceDiff,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Missing => onMissing(),
            _ when this == Invalid => onInvalid(),
            _ when this == RowCount => onRowCount(),
            _ when this == Aggregate => onAggregate(),
            _ when this == Schema => onSchema(),
            _ when this == Duplicate => onDuplicate(),
            _ when this == Freshness => onFreshness(),
            _ when this == FailedRows => onFailedRows(),
            _ when this == Metric => onMetric(),
            _ when this == GroupBy => onGroupBy(),
            _ when this == RowCountDiff => onRowCountDiff(),
            _ when this == AggregateDiff => onAggregateDiff(),
            _ when this == FreshnessDiff => onFreshnessDiff(),
            _ when this == MetricDiff => onMetricDiff(),
            _ when this == RowsDiff => onRowsDiff(),
            _ when this == DuplicateDiff => onDuplicateDiff(),
            _ when this == Llm => onLlm(),
            _ when this == Hierarchy => onHierarchy(),
            _ when this == FuzzyDuplicate => onFuzzyDuplicate(),
            _ when this == ReferenceDiff => onReferenceDiff(),
            _ => otherwise(Value)
        };

    public void Match(Action onMissing,
        Action onInvalid,
        Action onRowCount,
        Action onAggregate,
        Action onSchema,
        Action onDuplicate,
        Action onFreshness,
        Action onFailedRows,
        Action onMetric,
        Action onGroupBy,
        Action onRowCountDiff,
        Action onAggregateDiff,
        Action onFreshnessDiff,
        Action onMetricDiff,
        Action onRowsDiff,
        Action onDuplicateDiff,
        Action onLlm,
        Action onHierarchy,
        Action onFuzzyDuplicate,
        Action onReferenceDiff,
        Action<string> otherwise)
    {
        if (this == Missing) onMissing();
        else if (this == Invalid) onInvalid();
        else if (this == RowCount) onRowCount();
        else if (this == Aggregate) onAggregate();
        else if (this == Schema) onSchema();
        else if (this == Duplicate) onDuplicate();
        else if (this == Freshness) onFreshness();
        else if (this == FailedRows) onFailedRows();
        else if (this == Metric) onMetric();
        else if (this == GroupBy) onGroupBy();
        else if (this == RowCountDiff) onRowCountDiff();
        else if (this == AggregateDiff) onAggregateDiff();
        else if (this == FreshnessDiff) onFreshnessDiff();
        else if (this == MetricDiff) onMetricDiff();
        else if (this == RowsDiff) onRowsDiff();
        else if (this == DuplicateDiff) onDuplicateDiff();
        else if (this == Llm) onLlm();
        else if (this == Hierarchy) onHierarchy();
        else if (this == FuzzyDuplicate) onFuzzyDuplicate();
        else if (this == ReferenceDiff) onReferenceDiff();
        else otherwise(Value);
    }
}
