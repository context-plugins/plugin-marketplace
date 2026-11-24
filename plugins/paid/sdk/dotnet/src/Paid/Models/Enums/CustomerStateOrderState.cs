using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CustomerStateOrderState>))]
public sealed record CustomerStateOrderState : OpenStringEnum<CustomerStateOrderState>
{
    private CustomerStateOrderState(string value) : base(value)
    {
    }

    public static readonly CustomerStateOrderState Draft = new("draft");

    public static readonly CustomerStateOrderState Active = new("active");

    public static readonly CustomerStateOrderState Paused = new("paused");

    public static readonly CustomerStateOrderState Ended = new("ended");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onActive,
        Func<TResult> onPaused,
        Func<TResult> onEnded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Active => onActive(),
            _ when this == Paused => onPaused(),
            _ when this == Ended => onEnded(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onActive, Action onPaused, Action onEnded, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Active) onActive();
        else if (this == Paused) onPaused();
        else if (this == Ended) onEnded();
        else otherwise(Value);
    }
}
