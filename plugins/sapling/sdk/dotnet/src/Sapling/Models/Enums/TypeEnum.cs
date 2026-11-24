using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

/// <summary>
/// Value type (default string). "date" is returned as YYYY-MM-DD; "list" is a list of strings.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum String = new("string");

    public static readonly TypeEnum Number = new("number");

    public static readonly TypeEnum Integer = new("integer");

    public static readonly TypeEnum Boolean = new("boolean");

    public static readonly TypeEnum Date = new("date");

    public static readonly TypeEnum List = new("list");

    public TResult Match<TResult>(Func<TResult> onString,
        Func<TResult> onNumber,
        Func<TResult> onInteger,
        Func<TResult> onBoolean,
        Func<TResult> onDate,
        Func<TResult> onList,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == String => onString(),
            _ when this == Number => onNumber(),
            _ when this == Integer => onInteger(),
            _ when this == Boolean => onBoolean(),
            _ when this == Date => onDate(),
            _ when this == List => onList(),
            _ => otherwise(Value)
        };

    public void Match(Action onString,
        Action onNumber,
        Action onInteger,
        Action onBoolean,
        Action onDate,
        Action onList,
        Action<string> otherwise)
    {
        if (this == String) onString();
        else if (this == Number) onNumber();
        else if (this == Integer) onInteger();
        else if (this == Boolean) onBoolean();
        else if (this == Date) onDate();
        else if (this == List) onList();
        else otherwise(Value);
    }
}
