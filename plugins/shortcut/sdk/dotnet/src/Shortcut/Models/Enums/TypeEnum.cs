using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The type of the Key Result (numeric, percent, or boolean).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Percent = new("percent");

    public static readonly TypeEnum Boolean = new("boolean");

    public static readonly TypeEnum Numeric = new("numeric");

    public TResult Match<TResult>(Func<TResult> onPercent,
        Func<TResult> onBoolean,
        Func<TResult> onNumeric,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Percent => onPercent(),
            _ when this == Boolean => onBoolean(),
            _ when this == Numeric => onNumeric(),
            _ => otherwise(Value)
        };

    public void Match(Action onPercent, Action onBoolean, Action onNumeric, Action<string> otherwise)
    {
        if (this == Percent) onPercent();
        else if (this == Boolean) onBoolean();
        else if (this == Numeric) onNumeric();
        else otherwise(Value);
    }
}
