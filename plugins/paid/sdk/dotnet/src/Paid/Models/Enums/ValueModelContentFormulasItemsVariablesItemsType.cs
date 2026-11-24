using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ValueModelContentFormulasItemsVariablesItemsType>))]
public sealed record ValueModelContentFormulasItemsVariablesItemsType : OpenStringEnum<ValueModelContentFormulasItemsVariablesItemsType>
{
    private ValueModelContentFormulasItemsVariablesItemsType(string value) : base(value)
    {
    }

    public static readonly ValueModelContentFormulasItemsVariablesItemsType Number = new("number");

    public static readonly ValueModelContentFormulasItemsVariablesItemsType String = new("string");

    public static readonly ValueModelContentFormulasItemsVariablesItemsType Boolean = new("boolean");

    public static readonly ValueModelContentFormulasItemsVariablesItemsType Duration = new("duration");

    public TResult Match<TResult>(Func<TResult> onNumber,
        Func<TResult> onString,
        Func<TResult> onBoolean,
        Func<TResult> onDuration,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Number => onNumber(),
            _ when this == String => onString(),
            _ when this == Boolean => onBoolean(),
            _ when this == Duration => onDuration(),
            _ => otherwise(Value)
        };

    public void Match(Action onNumber, Action onString, Action onBoolean, Action onDuration, Action<string> otherwise)
    {
        if (this == Number) onNumber();
        else if (this == String) onString();
        else if (this == Boolean) onBoolean();
        else if (this == Duration) onDuration();
        else otherwise(Value);
    }
}
