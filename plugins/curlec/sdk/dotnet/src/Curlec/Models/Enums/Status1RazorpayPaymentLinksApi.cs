using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1RazorpayPaymentLinksApi>))]
public sealed record Status1RazorpayPaymentLinksApi : OpenStringEnum<Status1RazorpayPaymentLinksApi>
{
    private Status1RazorpayPaymentLinksApi(string value) : base(value)
    {
    }

    public static readonly Status1RazorpayPaymentLinksApi Captured = new("captured");

    public TResult Match<TResult>(Func<TResult> onCaptured, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Captured => onCaptured(),
            _ => otherwise(Value)
        };

    public void Match(Action onCaptured, Action<string> otherwise)
    {
        if (this == Captured) onCaptured();
        else otherwise(Value);
    }
}
