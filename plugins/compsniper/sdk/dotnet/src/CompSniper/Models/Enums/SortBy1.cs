using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Sort order
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortBy1>))]
public sealed record SortBy1 : OpenStringEnum<SortBy1>
{
    private SortBy1(string value) : base(value)
    {
    }

    public static readonly SortBy1 Default = new("default");

    public static readonly SortBy1 Newest = new("newest");

    public static readonly SortBy1 PriceAsc = new("price_asc");

    public static readonly SortBy1 PriceDesc = new("price_desc");

    public TResult Match<TResult>(Func<TResult> onDefault,
        Func<TResult> onNewest,
        Func<TResult> onPriceAsc,
        Func<TResult> onPriceDesc,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Default => onDefault(),
            _ when this == Newest => onNewest(),
            _ when this == PriceAsc => onPriceAsc(),
            _ when this == PriceDesc => onPriceDesc(),
            _ => otherwise(Value)
        };

    public void Match(Action onDefault,
        Action onNewest,
        Action onPriceAsc,
        Action onPriceDesc,
        Action<string> otherwise)
    {
        if (this == Default) onDefault();
        else if (this == Newest) onNewest();
        else if (this == PriceAsc) onPriceAsc();
        else if (this == PriceDesc) onPriceDesc();
        else otherwise(Value);
    }
}
