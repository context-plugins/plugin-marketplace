using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of the export. IN_PROGRESS - The export is in progress. READY - The export is complete. FAILED - The export could not be completed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExportStatus4>))]
public sealed record ExportStatus4 : OpenStringEnum<ExportStatus4>
{
    private ExportStatus4(string value) : base(value)
    {
    }

    public static readonly ExportStatus4 InProgress = new("IN_PROGRESS");

    public static readonly ExportStatus4 Ready = new("READY");

    public static readonly ExportStatus4 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onReady,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Ready => onReady(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress, Action onReady, Action onFailed, Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Ready) onReady();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
