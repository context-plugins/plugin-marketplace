using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Labeled seller classification on EU marketplaces.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SellerType1>))]
public sealed record SellerType1 : OpenStringEnum<SellerType1>
{
    private SellerType1(string value) : base(value)
    {
    }

    public static readonly SellerType1 Private = new("private");

    public static readonly SellerType1 Business = new("business");

    public TResult Match<TResult>(Func<TResult> onPrivate, Func<TResult> onBusiness, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Private => onPrivate(),
            _ when this == Business => onBusiness(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrivate, Action onBusiness, Action<string> otherwise)
    {
        if (this == Private) onPrivate();
        else if (this == Business) onBusiness();
        else otherwise(Value);
    }
}
