using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MethodRazorpayPaymentDowntimesApi>))]
public sealed record MethodRazorpayPaymentDowntimesApi : OpenStringEnum<MethodRazorpayPaymentDowntimesApi>
{
    private MethodRazorpayPaymentDowntimesApi(string value) : base(value)
    {
    }

    public static readonly MethodRazorpayPaymentDowntimesApi Card = new("card");

    public static readonly MethodRazorpayPaymentDowntimesApi Netbanking = new("netbanking");

    public static readonly MethodRazorpayPaymentDowntimesApi Upi = new("upi");

    public TResult Match<TResult>(Func<TResult> onCard,
        Func<TResult> onNetbanking,
        Func<TResult> onUpi,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Card => onCard(),
            _ when this == Netbanking => onNetbanking(),
            _ when this == Upi => onUpi(),
            _ => otherwise(Value)
        };

    public void Match(Action onCard, Action onNetbanking, Action onUpi, Action<string> otherwise)
    {
        if (this == Card) onCard();
        else if (this == Netbanking) onNetbanking();
        else if (this == Upi) onUpi();
        else otherwise(Value);
    }
}
