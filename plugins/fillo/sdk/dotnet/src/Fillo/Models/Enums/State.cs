using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State Pending = new("pending");

    public static readonly State Delivered = new("delivered");

    public static readonly State Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onDelivered,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Delivered => onDelivered(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onDelivered, Action onFailed, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Delivered) onDelivered();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
