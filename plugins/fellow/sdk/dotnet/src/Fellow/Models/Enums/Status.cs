using System;
using System.Text.Json.Serialization;
using Fellow.Core.Enum;

namespace Fellow.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Failed = new("FAILED");

    public static readonly Status Pending = new("PENDING");

    public static readonly Status Success = new("SUCCESS");

    public TResult Match<TResult>(Func<TResult> onFailed,
        Func<TResult> onPending,
        Func<TResult> onSuccess,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Failed => onFailed(),
            _ when this == Pending => onPending(),
            _ when this == Success => onSuccess(),
            _ => otherwise(Value)
        };

    public void Match(Action onFailed, Action onPending, Action onSuccess, Action<string> otherwise)
    {
        if (this == Failed) onFailed();
        else if (this == Pending) onPending();
        else if (this == Success) onSuccess();
        else otherwise(Value);
    }
}
