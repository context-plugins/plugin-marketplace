using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Sort order
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortBy>))]
public sealed record SortBy : OpenStringEnum<SortBy>
{
    private SortBy(string value) : base(value)
    {
    }

    public static readonly SortBy Recent = new("recent");

    public static readonly SortBy PriceDesc = new("price_desc");

    public static readonly SortBy PriceAsc = new("price_asc");

    public TResult Match<TResult>(Func<TResult> onRecent,
        Func<TResult> onPriceDesc,
        Func<TResult> onPriceAsc,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Recent => onRecent(),
            _ when this == PriceDesc => onPriceDesc(),
            _ when this == PriceAsc => onPriceAsc(),
            _ => otherwise(Value)
        };

    public void Match(Action onRecent, Action onPriceDesc, Action onPriceAsc, Action<string> otherwise)
    {
        if (this == Recent) onRecent();
        else if (this == PriceDesc) onPriceDesc();
        else if (this == PriceAsc) onPriceAsc();
        else otherwise(Value);
    }
}
