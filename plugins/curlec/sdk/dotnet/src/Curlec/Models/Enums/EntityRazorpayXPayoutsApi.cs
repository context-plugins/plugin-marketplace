using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayXPayoutsApi>))]
public sealed record EntityRazorpayXPayoutsApi : OpenStringEnum<EntityRazorpayXPayoutsApi>
{
    private EntityRazorpayXPayoutsApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayXPayoutsApi Payout = new("payout");

    public TResult Match<TResult>(Func<TResult> onPayout, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Payout => onPayout(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayout, Action<string> otherwise)
    {
        if (this == Payout) onPayout();
        else otherwise(Value);
    }
}
