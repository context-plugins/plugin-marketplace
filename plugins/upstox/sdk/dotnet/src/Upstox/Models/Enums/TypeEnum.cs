using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Type of GTT order. It can be one of the following:
/// SINGLE refers to a single-leg GTT order
/// MULTIPLE refers to a multi-leg GTT order
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Single = new("SINGLE");

    public static readonly TypeEnum Multiple = new("MULTIPLE");

    public TResult Match<TResult>(Func<TResult> onSingle, Func<TResult> onMultiple, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Single => onSingle(),
            _ when this == Multiple => onMultiple(),
            _ => otherwise(Value)
        };

    public void Match(Action onSingle, Action onMultiple, Action<string> otherwise)
    {
        if (this == Single) onSingle();
        else if (this == Multiple) onMultiple();
        else otherwise(Value);
    }
}
