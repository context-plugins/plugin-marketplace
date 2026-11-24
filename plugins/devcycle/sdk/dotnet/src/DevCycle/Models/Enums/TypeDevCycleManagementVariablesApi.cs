using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// The type of Variable. Must be one of [String | Boolean | Number | JSON]
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeDevCycleManagementVariablesApi>))]
public sealed record TypeDevCycleManagementVariablesApi : OpenStringEnum<TypeDevCycleManagementVariablesApi>
{
    private TypeDevCycleManagementVariablesApi(string value) : base(value)
    {
    }

    public static readonly TypeDevCycleManagementVariablesApi String = new("String");

    public static readonly TypeDevCycleManagementVariablesApi Boolean = new("Boolean");

    public static readonly TypeDevCycleManagementVariablesApi Number = new("Number");

    public static readonly TypeDevCycleManagementVariablesApi Json = new("JSON");

    public TResult Match<TResult>(Func<TResult> onString,
        Func<TResult> onBoolean,
        Func<TResult> onNumber,
        Func<TResult> onJson,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == String => onString(),
            _ when this == Boolean => onBoolean(),
            _ when this == Number => onNumber(),
            _ when this == Json => onJson(),
            _ => otherwise(Value)
        };

    public void Match(Action onString, Action onBoolean, Action onNumber, Action onJson, Action<string> otherwise)
    {
        if (this == String) onString();
        else if (this == Boolean) onBoolean();
        else if (this == Number) onNumber();
        else if (this == Json) onJson();
        else otherwise(Value);
    }
}
