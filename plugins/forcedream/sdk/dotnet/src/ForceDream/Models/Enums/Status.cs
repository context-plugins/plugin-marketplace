using System;
using System.Text.Json.Serialization;
using ForceDream.Core.Enum;

namespace ForceDream.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Completed = new("completed");

    public static readonly Status Insufficient = new("insufficient");

    public static readonly Status Pending = new("pending");

    public static readonly Status Error = new("error");

    public TResult Match<TResult>(Func<TResult> onCompleted,
        Func<TResult> onInsufficient,
        Func<TResult> onPending,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Completed => onCompleted(),
            _ when this == Insufficient => onInsufficient(),
            _ when this == Pending => onPending(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompleted,
        Action onInsufficient,
        Action onPending,
        Action onError,
        Action<string> otherwise)
    {
        if (this == Completed) onCompleted();
        else if (this == Insufficient) onInsufficient();
        else if (this == Pending) onPending();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
