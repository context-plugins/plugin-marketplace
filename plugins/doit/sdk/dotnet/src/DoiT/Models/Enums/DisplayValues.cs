using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// See <see href="https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#view-as">View data as (Comparative report)</see>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DisplayValues>))]
public sealed record DisplayValues : OpenStringEnum<DisplayValues>
{
    private DisplayValues(string value) : base(value)
    {
    }

    public static readonly DisplayValues ActualsOnly = new("actuals_only");

    public static readonly DisplayValues AbsoluteChange = new("absolute_change");

    public static readonly DisplayValues PercentageChange = new("percentage_change");

    public static readonly DisplayValues AbsoluteAndPercentage = new("absolute_and_percentage");

    public TResult Match<TResult>(Func<TResult> onActualsOnly,
        Func<TResult> onAbsoluteChange,
        Func<TResult> onPercentageChange,
        Func<TResult> onAbsoluteAndPercentage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ActualsOnly => onActualsOnly(),
            _ when this == AbsoluteChange => onAbsoluteChange(),
            _ when this == PercentageChange => onPercentageChange(),
            _ when this == AbsoluteAndPercentage => onAbsoluteAndPercentage(),
            _ => otherwise(Value)
        };

    public void Match(Action onActualsOnly,
        Action onAbsoluteChange,
        Action onPercentageChange,
        Action onAbsoluteAndPercentage,
        Action<string> otherwise)
    {
        if (this == ActualsOnly) onActualsOnly();
        else if (this == AbsoluteChange) onAbsoluteChange();
        else if (this == PercentageChange) onPercentageChange();
        else if (this == AbsoluteAndPercentage) onAbsoluteAndPercentage();
        else otherwise(Value);
    }
}
