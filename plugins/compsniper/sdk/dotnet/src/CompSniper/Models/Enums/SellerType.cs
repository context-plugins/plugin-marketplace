using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SellerType>))]
public sealed record SellerType : OpenStringEnum<SellerType>
{
    private SellerType(string value) : base(value)
    {
    }

    public static readonly SellerType Private = new("private");

    public static readonly SellerType Business = new("business");

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
