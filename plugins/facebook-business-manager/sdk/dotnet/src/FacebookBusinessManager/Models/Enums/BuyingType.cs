using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

/// <summary>
/// Buying type of the campaign
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BuyingType>))]
public sealed record BuyingType : OpenStringEnum<BuyingType>
{
    private BuyingType(string value) : base(value)
    {
    }

    public static readonly BuyingType Auction = new("AUCTION");

    public static readonly BuyingType Reserved = new("RESERVED");

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
