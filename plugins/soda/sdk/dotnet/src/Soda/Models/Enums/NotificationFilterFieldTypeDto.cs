using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<NotificationFilterFieldTypeDto>))]
public sealed record NotificationFilterFieldTypeDto : OpenStringEnum<NotificationFilterFieldTypeDto>
{
    private NotificationFilterFieldTypeDto(string value) : base(value)
    {
    }

    public static readonly NotificationFilterFieldTypeDto DatasourceId = new("datasourceId");

    public static readonly NotificationFilterFieldTypeDto DatasourceLabel = new("datasourceLabel");

    public static readonly NotificationFilterFieldTypeDto DatasetId = new("datasetId");

    public static readonly NotificationFilterFieldTypeDto DatasetLabel = new("datasetLabel");

    public static readonly NotificationFilterFieldTypeDto DatasetOwnerId = new("datasetOwnerId");

    public static readonly NotificationFilterFieldTypeDto DatasetTags = new("datasetTags");

    public static readonly NotificationFilterFieldTypeDto CheckId = new("checkId");

    public static readonly NotificationFilterFieldTypeDto CheckName = new("checkName");

    public static readonly NotificationFilterFieldTypeDto CheckOwnerId = new("checkOwnerId");

    public static readonly NotificationFilterFieldTypeDto ColumnId = new("columnId");

    public static readonly NotificationFilterFieldTypeDto MetricType = new("metricType");

    public static readonly NotificationFilterFieldTypeDto DatasetResourceAttribute = new("datasetResourceAttribute");

    public static readonly NotificationFilterFieldTypeDto CheckResourceAttribute = new("checkResourceAttribute");

    public TResult Match<TResult>(Func<TResult> onDatasourceId,
        Func<TResult> onDatasourceLabel,
        Func<TResult> onDatasetId,
        Func<TResult> onDatasetLabel,
        Func<TResult> onDatasetOwnerId,
        Func<TResult> onDatasetTags,
        Func<TResult> onCheckId,
        Func<TResult> onCheckName,
        Func<TResult> onCheckOwnerId,
        Func<TResult> onColumnId,
        Func<TResult> onMetricType,
        Func<TResult> onDatasetResourceAttribute,
        Func<TResult> onCheckResourceAttribute,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DatasourceId => onDatasourceId(),
            _ when this == DatasourceLabel => onDatasourceLabel(),
            _ when this == DatasetId => onDatasetId(),
            _ when this == DatasetLabel => onDatasetLabel(),
            _ when this == DatasetOwnerId => onDatasetOwnerId(),
            _ when this == DatasetTags => onDatasetTags(),
            _ when this == CheckId => onCheckId(),
            _ when this == CheckName => onCheckName(),
            _ when this == CheckOwnerId => onCheckOwnerId(),
            _ when this == ColumnId => onColumnId(),
            _ when this == MetricType => onMetricType(),
            _ when this == DatasetResourceAttribute => onDatasetResourceAttribute(),
            _ when this == CheckResourceAttribute => onCheckResourceAttribute(),
            _ => otherwise(Value)
        };

    public void Match(Action onDatasourceId,
        Action onDatasourceLabel,
        Action onDatasetId,
        Action onDatasetLabel,
        Action onDatasetOwnerId,
        Action onDatasetTags,
        Action onCheckId,
        Action onCheckName,
        Action onCheckOwnerId,
        Action onColumnId,
        Action onMetricType,
        Action onDatasetResourceAttribute,
        Action onCheckResourceAttribute,
        Action<string> otherwise)
    {
        if (this == DatasourceId) onDatasourceId();
        else if (this == DatasourceLabel) onDatasourceLabel();
        else if (this == DatasetId) onDatasetId();
        else if (this == DatasetLabel) onDatasetLabel();
        else if (this == DatasetOwnerId) onDatasetOwnerId();
        else if (this == DatasetTags) onDatasetTags();
        else if (this == CheckId) onCheckId();
        else if (this == CheckName) onCheckName();
        else if (this == CheckOwnerId) onCheckOwnerId();
        else if (this == ColumnId) onColumnId();
        else if (this == MetricType) onMetricType();
        else if (this == DatasetResourceAttribute) onDatasetResourceAttribute();
        else if (this == CheckResourceAttribute) onCheckResourceAttribute();
        else otherwise(Value);
    }
}
