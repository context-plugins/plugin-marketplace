using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of the export. When the status is Completed, you can use the DescribeExport operation to get the pre-signed S3 URL link to your exported bot or bot locale.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExportStatus>))]
public sealed record ExportStatus : OpenStringEnum<ExportStatus>
{
    private ExportStatus(string value) : base(value)
    {
    }

    public static readonly ExportStatus InProgress = new("InProgress");

    public static readonly ExportStatus Completed = new("Completed");

    public static readonly ExportStatus Failed = new("Failed");

    public static readonly ExportStatus Deleting = new("Deleting");

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
