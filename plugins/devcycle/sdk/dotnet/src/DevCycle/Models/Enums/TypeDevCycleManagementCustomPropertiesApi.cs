using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Type of the Custom Propety. Must be one of: "Boolean", "Number" or "String"
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeDevCycleManagementCustomPropertiesApi>))]
public sealed record TypeDevCycleManagementCustomPropertiesApi : OpenStringEnum<TypeDevCycleManagementCustomPropertiesApi>
{
    private TypeDevCycleManagementCustomPropertiesApi(string value) : base(value)
    {
    }

    public static readonly TypeDevCycleManagementCustomPropertiesApi String = new("String");

    public static readonly TypeDevCycleManagementCustomPropertiesApi Boolean = new("Boolean");

    public static readonly TypeDevCycleManagementCustomPropertiesApi Number = new("Number");

    public TResult Match<TResult>(Func<TResult> onString,
        Func<TResult> onBoolean,
        Func<TResult> onNumber,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == String => onString(),
            _ when this == Boolean => onBoolean(),
            _ when this == Number => onNumber(),
            _ => otherwise(Value)
        };

    public void Match(Action onString, Action onBoolean, Action onNumber, Action<string> otherwise)
    {
        if (this == String) onString();
        else if (this == Boolean) onBoolean();
        else if (this == Number) onNumber();
        else otherwise(Value);
    }
}
