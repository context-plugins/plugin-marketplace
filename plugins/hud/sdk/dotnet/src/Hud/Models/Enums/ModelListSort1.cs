using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// Row order. Signed-out callers cannot sort by <c>usage</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ModelListSort1>))]
public sealed record ModelListSort1 : OpenStringEnum<ModelListSort1>
{
    private ModelListSort1(string value) : base(value)
    {
    }

    public static readonly ModelListSort1 Provider = new("provider");

    public static readonly ModelListSort1 Usage = new("usage");

    public static readonly ModelListSort1 Recent = new("recent");

    public static readonly ModelListSort1 Name = new("name");

    public static readonly ModelListSort1 PriceLow = new("price_low");

    public static readonly ModelListSort1 PriceHigh = new("price_high");

    public static readonly ModelListSort1 Speed = new("speed");

    public TResult Match<TResult>(Func<TResult> onProvider,
        Func<TResult> onUsage,
        Func<TResult> onRecent,
        Func<TResult> onName,
        Func<TResult> onPriceLow,
        Func<TResult> onPriceHigh,
        Func<TResult> onSpeed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Provider => onProvider(),
            _ when this == Usage => onUsage(),
            _ when this == Recent => onRecent(),
            _ when this == Name => onName(),
            _ when this == PriceLow => onPriceLow(),
            _ when this == PriceHigh => onPriceHigh(),
            _ when this == Speed => onSpeed(),
            _ => otherwise(Value)
        };

    public void Match(Action onProvider,
        Action onUsage,
        Action onRecent,
        Action onName,
        Action onPriceLow,
        Action onPriceHigh,
        Action onSpeed,
        Action<string> otherwise)
    {
        if (this == Provider) onProvider();
        else if (this == Usage) onUsage();
        else if (this == Recent) onRecent();
        else if (this == Name) onName();
        else if (this == PriceLow) onPriceLow();
        else if (this == PriceHigh) onPriceHigh();
        else if (this == Speed) onSpeed();
        else otherwise(Value);
    }
}
