using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Whether the price is on-sale (<c>PROMOTIONAL</c>) or the normal price (<c>REGULAR</c>).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PriceType>))]
public sealed record PriceType : OpenStringEnum<PriceType>
{
    private PriceType(string value) : base(value)
    {
    }

    public static readonly PriceType Promotional = new("PROMOTIONAL");

    public static readonly PriceType Regular = new("REGULAR");

    public TResult Match<TResult>(Func<TResult> onPromotional,
        Func<TResult> onRegular,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Promotional => onPromotional(),
            _ when this == Regular => onRegular(),
            _ => otherwise(Value)
        };

    public void Match(Action onPromotional, Action onRegular, Action<string> otherwise)
    {
        if (this == Promotional) onPromotional();
        else if (this == Regular) onRegular();
        else otherwise(Value);
    }
}
