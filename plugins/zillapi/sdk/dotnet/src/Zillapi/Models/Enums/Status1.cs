using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 ForSale = new("for_sale");

    public static readonly Status1 ForRent = new("for_rent");

    public static readonly Status1 Sold = new("sold");

    public TResult Match<TResult>(Func<TResult> onForSale,
        Func<TResult> onForRent,
        Func<TResult> onSold,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ForSale => onForSale(),
            _ when this == ForRent => onForRent(),
            _ when this == Sold => onSold(),
            _ => otherwise(Value)
        };

    public void Match(Action onForSale, Action onForRent, Action onSold, Action<string> otherwise)
    {
        if (this == ForSale) onForSale();
        else if (this == ForRent) onForRent();
        else if (this == Sold) onSold();
        else otherwise(Value);
    }
}
