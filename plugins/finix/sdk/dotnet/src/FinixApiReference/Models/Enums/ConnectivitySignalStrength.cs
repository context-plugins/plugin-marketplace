using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ConnectivitySignalStrength>))]
public sealed record ConnectivitySignalStrength : OpenStringEnum<ConnectivitySignalStrength>
{
    private ConnectivitySignalStrength(string value) : base(value)
    {
    }

    public static readonly ConnectivitySignalStrength Excellent = new("EXCELLENT");

    public static readonly ConnectivitySignalStrength Good = new("GOOD");

    public static readonly ConnectivitySignalStrength Poor = new("POOR");

    public static readonly ConnectivitySignalStrength VeryPoor = new("VERY_POOR");

    public TResult Match<TResult>(Func<TResult> onExcellent,
        Func<TResult> onGood,
        Func<TResult> onPoor,
        Func<TResult> onVeryPoor,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Excellent => onExcellent(),
            _ when this == Good => onGood(),
            _ when this == Poor => onPoor(),
            _ when this == VeryPoor => onVeryPoor(),
            _ => otherwise(Value)
        };

    public void Match(Action onExcellent, Action onGood, Action onPoor, Action onVeryPoor, Action<string> otherwise)
    {
        if (this == Excellent) onExcellent();
        else if (this == Good) onGood();
        else if (this == Poor) onPoor();
        else if (this == VeryPoor) onVeryPoor();
        else otherwise(Value);
    }
}
