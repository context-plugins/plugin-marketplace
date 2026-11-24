using System;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Enum;

namespace PlinthUsGrantsData.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Example1>))]
public sealed record Example1 : OpenStringEnum<Example1>
{
    private Example1(string value) : base(value)
    {
    }

    public static readonly Example1 _1 = new("1");

    public static readonly Example1 List = new("list");

    public TResult Match<TResult>(Func<TResult> on_1, Func<TResult> onList, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1 => on_1(),
            _ when this == List => onList(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1, Action onList, Action<string> otherwise)
    {
        if (this == _1) on_1();
        else if (this == List) onList();
        else otherwise(Value);
    }
}
