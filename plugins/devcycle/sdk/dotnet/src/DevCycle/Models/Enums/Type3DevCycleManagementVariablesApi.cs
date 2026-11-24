using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type3DevCycleManagementVariablesApi>))]
public sealed record Type3DevCycleManagementVariablesApi : OpenStringEnum<Type3DevCycleManagementVariablesApi>
{
    private Type3DevCycleManagementVariablesApi(string value) : base(value)
    {
    }

    public static readonly Type3DevCycleManagementVariablesApi String = new("String");

    public static readonly Type3DevCycleManagementVariablesApi Boolean = new("Boolean");

    public static readonly Type3DevCycleManagementVariablesApi Number = new("Number");

    public static readonly Type3DevCycleManagementVariablesApi Json = new("JSON");

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
