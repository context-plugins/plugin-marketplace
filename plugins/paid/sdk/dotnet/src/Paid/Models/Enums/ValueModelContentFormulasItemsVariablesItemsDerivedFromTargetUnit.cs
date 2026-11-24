using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit>))]
public sealed record ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit : OpenStringEnum<ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit>
{
    private ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit(string value) : base(value)
    {
    }

    public static readonly ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit Seconds = new("seconds");

    public static readonly ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit Minutes = new("minutes");

    public static readonly ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit Hours = new("hours");

    public static readonly ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit Days = new("days");

    public TResult Match<TResult>(Func<TResult> onSeconds,
        Func<TResult> onMinutes,
        Func<TResult> onHours,
        Func<TResult> onDays,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Seconds => onSeconds(),
            _ when this == Minutes => onMinutes(),
            _ when this == Hours => onHours(),
            _ when this == Days => onDays(),
            _ => otherwise(Value)
        };

    public void Match(Action onSeconds, Action onMinutes, Action onHours, Action onDays, Action<string> otherwise)
    {
        if (this == Seconds) onSeconds();
        else if (this == Minutes) onMinutes();
        else if (this == Hours) onHours();
        else if (this == Days) onDays();
        else otherwise(Value);
    }
}
