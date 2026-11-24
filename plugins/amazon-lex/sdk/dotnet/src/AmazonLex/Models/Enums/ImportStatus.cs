using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The current status of the deletion. When the deletion is complete, the import will no longer be returned by the ListImports operation and calls to the DescribeImport operation with the import identifier will fail.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ImportStatus>))]
public sealed record ImportStatus : OpenStringEnum<ImportStatus>
{
    private ImportStatus(string value) : base(value)
    {
    }

    public static readonly ImportStatus InProgress = new("InProgress");

    public static readonly ImportStatus Completed = new("Completed");

    public static readonly ImportStatus Failed = new("Failed");

    public static readonly ImportStatus Deleting = new("Deleting");

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
