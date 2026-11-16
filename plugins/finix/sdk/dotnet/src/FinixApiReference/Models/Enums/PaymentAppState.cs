using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PaymentAppState>))]
public sealed record PaymentAppState : OpenStringEnum<PaymentAppState>
{
    private PaymentAppState(string value) : base(value)
    {
    }

    public static readonly PaymentAppState Background = new("BACKGROUND");

    public static readonly PaymentAppState Foreground = new("FOREGROUND");

    public TResult Match<TResult>(Func<TResult> onBackground,
        Func<TResult> onForeground,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Background => onBackground(),
            _ when this == Foreground => onForeground(),
            _ => otherwise(Value)
        };

    public void Match(Action onBackground, Action onForeground, Action<string> otherwise)
    {
        if (this == Background) onBackground();
        else if (this == Foreground) onForeground();
        else otherwise(Value);
    }
}
