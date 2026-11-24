using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortByDoiTComposerInsightsBetaApi>))]
public sealed record SortByDoiTComposerInsightsBetaApi : OpenStringEnum<SortByDoiTComposerInsightsBetaApi>
{
    private SortByDoiTComposerInsightsBetaApi(string value) : base(value)
    {
    }

    public static readonly SortByDoiTComposerInsightsBetaApi Severity = new("severity");

    public static readonly SortByDoiTComposerInsightsBetaApi Title = new("title");

    public static readonly SortByDoiTComposerInsightsBetaApi DetectionTime = new("detection_time");

    public static readonly SortByDoiTComposerInsightsBetaApi ActiveResultsCount = new("active_results_count");

    public static readonly SortByDoiTComposerInsightsBetaApi TotalResultsCount = new("total_results_count");

    public TResult Match<TResult>(Func<TResult> onSeverity,
        Func<TResult> onTitle,
        Func<TResult> onDetectionTime,
        Func<TResult> onActiveResultsCount,
        Func<TResult> onTotalResultsCount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Severity => onSeverity(),
            _ when this == Title => onTitle(),
            _ when this == DetectionTime => onDetectionTime(),
            _ when this == ActiveResultsCount => onActiveResultsCount(),
            _ when this == TotalResultsCount => onTotalResultsCount(),
            _ => otherwise(Value)
        };

    public void Match(Action onSeverity,
        Action onTitle,
        Action onDetectionTime,
        Action onActiveResultsCount,
        Action onTotalResultsCount,
        Action<string> otherwise)
    {
        if (this == Severity) onSeverity();
        else if (this == Title) onTitle();
        else if (this == DetectionTime) onDetectionTime();
        else if (this == ActiveResultsCount) onActiveResultsCount();
        else if (this == TotalResultsCount) onTotalResultsCount();
        else otherwise(Value);
    }
}
