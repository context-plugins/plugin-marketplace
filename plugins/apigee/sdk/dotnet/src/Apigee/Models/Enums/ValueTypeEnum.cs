using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. Type of the parameter: string, int, bool etc.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ValueTypeEnum>))]
public sealed record ValueTypeEnum : OpenStringEnum<ValueTypeEnum>
{
    private ValueTypeEnum(string value) : base(value)
    {
    }

    public static readonly ValueTypeEnum ValueTypeUnspecified = new("VALUE_TYPE_UNSPECIFIED");

    public static readonly ValueTypeEnum String = new("STRING");

    public static readonly ValueTypeEnum Int = new("INT");

    public static readonly ValueTypeEnum Bool = new("BOOL");

    public static readonly ValueTypeEnum Secret = new("SECRET");

    public static readonly ValueTypeEnum Enum = new("ENUM");

    public static readonly ValueTypeEnum MultiSelect = new("MULTI_SELECT");

    public static readonly ValueTypeEnum MultiString = new("MULTI_STRING");

    public static readonly ValueTypeEnum MultiInt = new("MULTI_INT");

    public TResult Match<TResult>(Func<TResult> onValueTypeUnspecified,
        Func<TResult> onString,
        Func<TResult> onInt,
        Func<TResult> onBool,
        Func<TResult> onSecret,
        Func<TResult> onEnum,
        Func<TResult> onMultiSelect,
        Func<TResult> onMultiString,
        Func<TResult> onMultiInt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ValueTypeUnspecified => onValueTypeUnspecified(),
            _ when this == String => onString(),
            _ when this == Int => onInt(),
            _ when this == Bool => onBool(),
            _ when this == Secret => onSecret(),
            _ when this == Enum => onEnum(),
            _ when this == MultiSelect => onMultiSelect(),
            _ when this == MultiString => onMultiString(),
            _ when this == MultiInt => onMultiInt(),
            _ => otherwise(Value)
        };

    public void Match(Action onValueTypeUnspecified,
        Action onString,
        Action onInt,
        Action onBool,
        Action onSecret,
        Action onEnum,
        Action onMultiSelect,
        Action onMultiString,
        Action onMultiInt,
        Action<string> otherwise)
    {
        if (this == ValueTypeUnspecified) onValueTypeUnspecified();
        else if (this == String) onString();
        else if (this == Int) onInt();
        else if (this == Bool) onBool();
        else if (this == Secret) onSecret();
        else if (this == Enum) onEnum();
        else if (this == MultiSelect) onMultiSelect();
        else if (this == MultiString) onMultiString();
        else if (this == MultiInt) onMultiInt();
        else otherwise(Value);
    }
}
