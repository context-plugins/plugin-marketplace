using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ItemLocation>))]
public sealed record ItemLocation : OpenStringEnum<ItemLocation>
{
    private ItemLocation(string value) : base(value)
    {
    }

    public static readonly ItemLocation Default = new("default");

    public static readonly ItemLocation Domestic = new("domestic");

    public static readonly ItemLocation Worldwide = new("worldwide");

    public TResult Match<TResult>(Func<TResult> onDefault,
        Func<TResult> onDomestic,
        Func<TResult> onWorldwide,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Default => onDefault(),
            _ when this == Domestic => onDomestic(),
            _ when this == Worldwide => onWorldwide(),
            _ => otherwise(Value)
        };

    public void Match(Action onDefault, Action onDomestic, Action onWorldwide, Action<string> otherwise)
    {
        if (this == Default) onDefault();
        else if (this == Domestic) onDomestic();
        else if (this == Worldwide) onWorldwide();
        else otherwise(Value);
    }
}
