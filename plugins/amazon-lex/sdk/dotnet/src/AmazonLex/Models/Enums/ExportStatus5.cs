using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of the export. When the status is Completed the export archive is available for download.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExportStatus5>))]
public sealed record ExportStatus5 : OpenStringEnum<ExportStatus5>
{
    private ExportStatus5(string value) : base(value)
    {
    }

    public static readonly ExportStatus5 InProgress = new("InProgress");

    public static readonly ExportStatus5 Completed = new("Completed");

    public static readonly ExportStatus5 Failed = new("Failed");

    public static readonly ExportStatus5 Deleting = new("Deleting");

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
