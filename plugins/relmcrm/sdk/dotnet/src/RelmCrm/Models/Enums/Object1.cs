using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Object1>))]
public sealed record Object1 : OpenStringEnum<Object1>
{
    private Object1(string value) : base(value)
    {
    }

    public static readonly Object1 List = new("list");

    public TResult Match<TResult>(Func<TResult> onList, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == List => onList(),
            _ => otherwise(Value)
        };

    public void Match(Action onList, Action<string> otherwise)
    {
        if (this == List) onList();
        else otherwise(Value);
    }
}
