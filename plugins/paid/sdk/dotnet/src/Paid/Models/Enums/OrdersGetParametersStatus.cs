using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OrdersGetParametersStatus>))]
public sealed record OrdersGetParametersStatus : OpenStringEnum<OrdersGetParametersStatus>
{
    private OrdersGetParametersStatus(string value) : base(value)
    {
    }

    public static readonly OrdersGetParametersStatus Draft = new("draft");

    public static readonly OrdersGetParametersStatus Paused = new("paused");

    public static readonly OrdersGetParametersStatus Active = new("active");

    public static readonly OrdersGetParametersStatus Ended = new("ended");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onPaused,
        Func<TResult> onActive,
        Func<TResult> onEnded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Paused => onPaused(),
            _ when this == Active => onActive(),
            _ when this == Ended => onEnded(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onPaused, Action onActive, Action onEnded, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Paused) onPaused();
        else if (this == Active) onActive();
        else if (this == Ended) onEnded();
        else otherwise(Value);
    }
}
