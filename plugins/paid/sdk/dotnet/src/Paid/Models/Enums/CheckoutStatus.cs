using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CheckoutStatus>))]
public sealed record CheckoutStatus : OpenStringEnum<CheckoutStatus>
{
    private CheckoutStatus(string value) : base(value)
    {
    }

    public static readonly CheckoutStatus Active = new("active");

    public static readonly CheckoutStatus Completed = new("completed");

    public static readonly CheckoutStatus Expired = new("expired");

    public static readonly CheckoutStatus Archived = new("archived");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onCompleted,
        Func<TResult> onExpired,
        Func<TResult> onArchived,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Completed => onCompleted(),
            _ when this == Expired => onExpired(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive,
        Action onCompleted,
        Action onExpired,
        Action onArchived,
        Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Completed) onCompleted();
        else if (this == Expired) onExpired();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
