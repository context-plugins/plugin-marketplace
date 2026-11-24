using System;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Enum;

namespace PlinthUsGrantsData.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Example3>))]
public sealed record Example3 : OpenStringEnum<Example3>
{
    private Example3(string value) : base(value)
    {
    }

    public static readonly Example3 _1 = new("1");

    public static readonly Example3 Trial = new("trial");

    public static readonly Example3 Unsupported = new("unsupported");

    public static readonly Example3 List = new("list");

    public TResult Match<TResult>(Func<TResult> on_1,
        Func<TResult> onTrial,
        Func<TResult> onUnsupported,
        Func<TResult> onList,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1 => on_1(),
            _ when this == Trial => onTrial(),
            _ when this == Unsupported => onUnsupported(),
            _ when this == List => onList(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1, Action onTrial, Action onUnsupported, Action onList, Action<string> otherwise)
    {
        if (this == _1) on_1();
        else if (this == Trial) onTrial();
        else if (this == Unsupported) onUnsupported();
        else if (this == List) onList();
        else otherwise(Value);
    }
}
