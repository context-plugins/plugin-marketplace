using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Op>))]
public sealed record Op : OpenStringEnum<Op>
{
    private Op(string value) : base(value)
    {
    }

    public static readonly Op AddFilterValues = new("addFilterValues");

    public static readonly Op RemoveFilterValues = new("removeFilterValues");

    public TResult Match<TResult>(Func<TResult> onAddFilterValues,
        Func<TResult> onRemoveFilterValues,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AddFilterValues => onAddFilterValues(),
            _ when this == RemoveFilterValues => onRemoveFilterValues(),
            _ => otherwise(Value)
        };

    public void Match(Action onAddFilterValues, Action onRemoveFilterValues, Action<string> otherwise)
    {
        if (this == AddFilterValues) onAddFilterValues();
        else if (this == RemoveFilterValues) onRemoveFilterValues();
        else otherwise(Value);
    }
}
