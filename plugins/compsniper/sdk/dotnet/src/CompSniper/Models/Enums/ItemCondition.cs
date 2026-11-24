using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ItemCondition>))]
public sealed record ItemCondition : OpenStringEnum<ItemCondition>
{
    private ItemCondition(string value) : base(value)
    {
    }

    public static readonly ItemCondition Any = new("any");

    public static readonly ItemCondition New = new("new");

    public static readonly ItemCondition Used = new("used");

    public TResult Match<TResult>(Func<TResult> onAny,
        Func<TResult> onNew,
        Func<TResult> onUsed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Any => onAny(),
            _ when this == New => onNew(),
            _ when this == Used => onUsed(),
            _ => otherwise(Value)
        };

    public void Match(Action onAny, Action onNew, Action onUsed, Action<string> otherwise)
    {
        if (this == Any) onAny();
        else if (this == New) onNew();
        else if (this == Used) onUsed();
        else otherwise(Value);
    }
}
