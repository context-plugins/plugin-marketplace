using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of the resource. When the status is Completed the resource is ready to build.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ImportStatus2>))]
public sealed record ImportStatus2 : OpenStringEnum<ImportStatus2>
{
    private ImportStatus2(string value) : base(value)
    {
    }

    public static readonly ImportStatus2 InProgress = new("InProgress");

    public static readonly ImportStatus2 Completed = new("Completed");

    public static readonly ImportStatus2 Failed = new("Failed");

    public static readonly ImportStatus2 Deleting = new("Deleting");

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
