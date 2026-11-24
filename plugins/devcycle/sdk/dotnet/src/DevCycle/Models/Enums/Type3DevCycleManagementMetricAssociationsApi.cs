using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// The type of Variable. Must be one of [String | Boolean | Number | JSON]
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type3DevCycleManagementMetricAssociationsApi>))]
public sealed record Type3DevCycleManagementMetricAssociationsApi : OpenStringEnum<Type3DevCycleManagementMetricAssociationsApi>
{
    private Type3DevCycleManagementMetricAssociationsApi(string value) : base(value)
    {
    }

    public static readonly Type3DevCycleManagementMetricAssociationsApi String = new("String");

    public static readonly Type3DevCycleManagementMetricAssociationsApi Boolean = new("Boolean");

    public static readonly Type3DevCycleManagementMetricAssociationsApi Number = new("Number");

    public static readonly Type3DevCycleManagementMetricAssociationsApi Json = new("JSON");

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
