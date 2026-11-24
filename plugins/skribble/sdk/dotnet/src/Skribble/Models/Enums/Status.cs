using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

/// <summary>
/// Current status of the identification process.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Completed = new("COMPLETED");

    public static readonly Status Pending = new("PENDING");

    public static readonly Status Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onCompleted,
        Func<TResult> onPending,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Completed => onCompleted(),
            _ when this == Pending => onPending(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompleted, Action onPending, Action onFailed, Action<string> otherwise)
    {
        if (this == Completed) onCompleted();
        else if (this == Pending) onPending();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
