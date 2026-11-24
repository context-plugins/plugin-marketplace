using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DatasetMonitorMetricTypeDto>))]
public sealed record DatasetMonitorMetricTypeDto : OpenStringEnum<DatasetMonitorMetricTypeDto>
{
    private DatasetMonitorMetricTypeDto(string value) : base(value)
    {
    }

    public static readonly DatasetMonitorMetricTypeDto RowCount = new("rowCount");

    public static readonly DatasetMonitorMetricTypeDto Freshness = new("freshness");

    public static readonly DatasetMonitorMetricTypeDto Schema = new("schema");

    public static readonly DatasetMonitorMetricTypeDto RowsInserted = new("rowsInserted");

    public static readonly DatasetMonitorMetricTypeDto TotalRowCountChange = new("totalRowCountChange");

    public static readonly DatasetMonitorMetricTypeDto Timeliness = new("timeliness");

    public static readonly DatasetMonitorMetricTypeDto RecordAnomalyScore = new("recordAnomalyScore");

    public TResult Match<TResult>(Func<TResult> onRowCount,
        Func<TResult> onFreshness,
        Func<TResult> onSchema,
        Func<TResult> onRowsInserted,
        Func<TResult> onTotalRowCountChange,
        Func<TResult> onTimeliness,
        Func<TResult> onRecordAnomalyScore,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RowCount => onRowCount(),
            _ when this == Freshness => onFreshness(),
            _ when this == Schema => onSchema(),
            _ when this == RowsInserted => onRowsInserted(),
            _ when this == TotalRowCountChange => onTotalRowCountChange(),
            _ when this == Timeliness => onTimeliness(),
            _ when this == RecordAnomalyScore => onRecordAnomalyScore(),
            _ => otherwise(Value)
        };

    public void Match(Action onRowCount,
        Action onFreshness,
        Action onSchema,
        Action onRowsInserted,
        Action onTotalRowCountChange,
        Action onTimeliness,
        Action onRecordAnomalyScore,
        Action<string> otherwise)
    {
        if (this == RowCount) onRowCount();
        else if (this == Freshness) onFreshness();
        else if (this == Schema) onSchema();
        else if (this == RowsInserted) onRowsInserted();
        else if (this == TotalRowCountChange) onTotalRowCountChange();
        else if (this == Timeliness) onTimeliness();
        else if (this == RecordAnomalyScore) onRecordAnomalyScore();
        else otherwise(Value);
    }
}
