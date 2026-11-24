using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BuyingType1>))]
public sealed record BuyingType1 : OpenStringEnum<BuyingType1>
{
    private BuyingType1(string value) : base(value)
    {
    }

    public static readonly BuyingType1 Auction = new("AUCTION");

    public static readonly BuyingType1 Reserved = new("RESERVED");

    public TResult Match<TResult>(Func<TResult> onAuction, Func<TResult> onReserved, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Auction => onAuction(),
            _ when this == Reserved => onReserved(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuction, Action onReserved, Action<string> otherwise)
    {
        if (this == Auction) onAuction();
        else if (this == Reserved) onReserved();
        else otherwise(Value);
    }
}
