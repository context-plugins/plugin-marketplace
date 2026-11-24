using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status for the test set discrepancy report.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TestSetDiscrepancyReportStatus>))]
public sealed record TestSetDiscrepancyReportStatus : OpenStringEnum<TestSetDiscrepancyReportStatus>
{
    private TestSetDiscrepancyReportStatus(string value) : base(value)
    {
    }

    public static readonly TestSetDiscrepancyReportStatus InProgress = new("InProgress");

    public static readonly TestSetDiscrepancyReportStatus Completed = new("Completed");

    public static readonly TestSetDiscrepancyReportStatus Failed = new("Failed");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress, Action onCompleted, Action onFailed, Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
