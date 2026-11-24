using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayXPayoutLinksApi>))]
public sealed record EntityRazorpayXPayoutLinksApi : OpenStringEnum<EntityRazorpayXPayoutLinksApi>
{
    private EntityRazorpayXPayoutLinksApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayXPayoutLinksApi PayoutLink = new("payout_link");

    public TResult Match<TResult>(Func<TResult> onPayoutLink, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PayoutLink => onPayoutLink(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayoutLink, Action<string> otherwise)
    {
        if (this == PayoutLink) onPayoutLink();
        else otherwise(Value);
    }
}
