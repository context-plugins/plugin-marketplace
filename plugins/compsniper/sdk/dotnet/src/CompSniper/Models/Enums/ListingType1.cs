using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ListingType1>))]
public sealed record ListingType1 : OpenStringEnum<ListingType1>
{
    private ListingType1(string value) : base(value)
    {
    }

    public static readonly ListingType1 Sold = new("sold");

    public TResult Match<TResult>(Func<TResult> onSold, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sold => onSold(),
            _ => otherwise(Value)
        };

    public void Match(Action onSold, Action<string> otherwise)
    {
        if (this == Sold) onSold();
        else otherwise(Value);
    }
}
