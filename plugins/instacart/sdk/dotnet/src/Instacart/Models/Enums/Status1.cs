using System;
using System.Text.Json.Serialization;
using Instacart.Core.Enum;

namespace Instacart.Models.Enums;

/// <summary>
/// The current status of the item in the order.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Pending = new("pending");

    public static readonly Status1 Found = new("found");

    public static readonly Status1 Replaced = new("replaced");

    public static readonly Status1 Refunded = new("refunded");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onFound,
        Func<TResult> onReplaced,
        Func<TResult> onRefunded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Found => onFound(),
            _ when this == Replaced => onReplaced(),
            _ when this == Refunded => onRefunded(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onFound, Action onReplaced, Action onRefunded, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Found) onFound();
        else if (this == Replaced) onReplaced();
        else if (this == Refunded) onRefunded();
        else otherwise(Value);
    }
}
