using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeSource>))]
public sealed record TypeSource : OpenStringEnum<TypeSource>
{
    private TypeSource(string value) : base(value)
    {
    }

    public static readonly TypeSource SellerName = new("seller_name");

    public static readonly TypeSource Unavailable = new("unavailable");

    public TResult Match<TResult>(Func<TResult> onSellerName,
        Func<TResult> onUnavailable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SellerName => onSellerName(),
            _ when this == Unavailable => onUnavailable(),
            _ => otherwise(Value)
        };

    public void Match(Action onSellerName, Action onUnavailable, Action<string> otherwise)
    {
        if (this == SellerName) onSellerName();
        else if (this == Unavailable) onUnavailable();
        else otherwise(Value);
    }
}
