using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BillingCallnodeIoWholesaleApi>))]
public sealed record BillingCallnodeIoWholesaleApi : OpenStringEnum<BillingCallnodeIoWholesaleApi>
{
    private BillingCallnodeIoWholesaleApi(string value) : base(value)
    {
    }

    public static readonly BillingCallnodeIoWholesaleApi Wallet = new("wallet");

    public TResult Match<TResult>(Func<TResult> onWallet, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Wallet => onWallet(),
            _ => otherwise(Value)
        };

    public void Match(Action onWallet, Action<string> otherwise)
    {
        if (this == Wallet) onWallet();
        else otherwise(Value);
    }
}
