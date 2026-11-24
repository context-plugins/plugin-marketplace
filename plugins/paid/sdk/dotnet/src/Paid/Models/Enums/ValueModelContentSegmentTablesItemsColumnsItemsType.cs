using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ValueModelContentSegmentTablesItemsColumnsItemsType>))]
public sealed record ValueModelContentSegmentTablesItemsColumnsItemsType : OpenStringEnum<ValueModelContentSegmentTablesItemsColumnsItemsType>
{
    private ValueModelContentSegmentTablesItemsColumnsItemsType(string value) : base(value)
    {
    }

    public static readonly ValueModelContentSegmentTablesItemsColumnsItemsType Number = new("number");

    public TResult Match<TResult>(Func<TResult> onNumber, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Number => onNumber(),
            _ => otherwise(Value)
        };

    public void Match(Action onNumber, Action<string> otherwise)
    {
        if (this == Number) onNumber();
        else otherwise(Value);
    }
}
