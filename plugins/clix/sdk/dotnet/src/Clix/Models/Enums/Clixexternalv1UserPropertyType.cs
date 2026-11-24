using System;
using System.Text.Json.Serialization;
using Clix.Core.Enum;

namespace Clix.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Clixexternalv1UserPropertyType>))]
public sealed record Clixexternalv1UserPropertyType : OpenStringEnum<Clixexternalv1UserPropertyType>
{
    private Clixexternalv1UserPropertyType(string value) : base(value)
    {
    }

    public static readonly Clixexternalv1UserPropertyType UserPropertyTypeString = new("USER_PROPERTY_TYPE_STRING");

    public static readonly Clixexternalv1UserPropertyType UserPropertyTypeNumber = new("USER_PROPERTY_TYPE_NUMBER");

    public static readonly Clixexternalv1UserPropertyType UserPropertyTypeBoolean = new("USER_PROPERTY_TYPE_BOOLEAN");

    public TResult Match<TResult>(Func<TResult> onUserPropertyTypeString,
        Func<TResult> onUserPropertyTypeNumber,
        Func<TResult> onUserPropertyTypeBoolean,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UserPropertyTypeString => onUserPropertyTypeString(),
            _ when this == UserPropertyTypeNumber => onUserPropertyTypeNumber(),
            _ when this == UserPropertyTypeBoolean => onUserPropertyTypeBoolean(),
            _ => otherwise(Value)
        };

    public void Match(Action onUserPropertyTypeString,
        Action onUserPropertyTypeNumber,
        Action onUserPropertyTypeBoolean,
        Action<string> otherwise)
    {
        if (this == UserPropertyTypeString) onUserPropertyTypeString();
        else if (this == UserPropertyTypeNumber) onUserPropertyTypeNumber();
        else if (this == UserPropertyTypeBoolean) onUserPropertyTypeBoolean();
        else otherwise(Value);
    }
}
