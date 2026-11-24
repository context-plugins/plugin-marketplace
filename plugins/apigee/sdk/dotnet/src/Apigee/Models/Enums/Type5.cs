using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Data type accepted by the data collector.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type5>))]
public sealed record Type5 : OpenStringEnum<Type5>
{
    private Type5(string value) : base(value)
    {
    }

    public static readonly Type5 TypeUnspecified = new("TYPE_UNSPECIFIED");

    public static readonly Type5 Integer = new("INTEGER");

    public static readonly Type5 Float = new("FLOAT");

    public static readonly Type5 String = new("STRING");

    public static readonly Type5 Boolean = new("BOOLEAN");

    public static readonly Type5 Datetime = new("DATETIME");

    public TResult Match<TResult>(Func<TResult> onTypeUnspecified,
        Func<TResult> onInteger,
        Func<TResult> onFloat,
        Func<TResult> onString,
        Func<TResult> onBoolean,
        Func<TResult> onDatetime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TypeUnspecified => onTypeUnspecified(),
            _ when this == Integer => onInteger(),
            _ when this == Float => onFloat(),
            _ when this == String => onString(),
            _ when this == Boolean => onBoolean(),
            _ when this == Datetime => onDatetime(),
            _ => otherwise(Value)
        };

    public void Match(Action onTypeUnspecified,
        Action onInteger,
        Action onFloat,
        Action onString,
        Action onBoolean,
        Action onDatetime,
        Action<string> otherwise)
    {
        if (this == TypeUnspecified) onTypeUnspecified();
        else if (this == Integer) onInteger();
        else if (this == Float) onFloat();
        else if (this == String) onString();
        else if (this == Boolean) onBoolean();
        else if (this == Datetime) onDatetime();
        else otherwise(Value);
    }
}
