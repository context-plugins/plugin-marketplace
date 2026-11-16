using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Country2>))]
public sealed record Country2 : OpenStringEnum<Country2>
{
    private Country2(string value) : base(value)
    {
    }

    public static readonly Country2 Usa = new("USA");

    public static readonly Country2 Can = new("CAN");

    public TResult Match<TResult>(Func<TResult> onUsa, Func<TResult> onCan, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Usa => onUsa(),
            _ when this == Can => onCan(),
            _ => otherwise(Value)
        };

    public void Match(Action onUsa, Action onCan, Action<string> otherwise)
    {
        if (this == Usa) onUsa();
        else if (this == Can) onCan();
        else otherwise(Value);
    }
}
