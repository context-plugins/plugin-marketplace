using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The current status of the deletion. When the deletion is complete, the export will no longer be returned by the ListExports operation and calls to the DescribeExport operation with the export identifier will fail.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExportStatus1>))]
public sealed record ExportStatus1 : OpenStringEnum<ExportStatus1>
{
    private ExportStatus1(string value) : base(value)
    {
    }

    public static readonly ExportStatus1 InProgress = new("InProgress");

    public static readonly ExportStatus1 Completed = new("Completed");

    public static readonly ExportStatus1 Failed = new("Failed");

    public static readonly ExportStatus1 Deleting = new("Deleting");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onDeleting,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == Deleting => onDeleting(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress,
        Action onCompleted,
        Action onFailed,
        Action onDeleting,
        Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == Deleting) onDeleting();
        else otherwise(Value);
    }
}
