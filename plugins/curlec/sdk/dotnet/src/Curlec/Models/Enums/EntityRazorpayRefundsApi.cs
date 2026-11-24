using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayRefundsApi>))]
public sealed record EntityRazorpayRefundsApi : OpenStringEnum<EntityRazorpayRefundsApi>
{
    private EntityRazorpayRefundsApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayRefundsApi Refund = new("refund");

    public TResult Match<TResult>(Func<TResult> onRefund, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Refund => onRefund(),
            _ => otherwise(Value)
        };

    public void Match(Action onRefund, Action<string> otherwise)
    {
        if (this == Refund) onRefund();
        else otherwise(Value);
    }
}
