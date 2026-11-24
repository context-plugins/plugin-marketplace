using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<InputType>))]
public sealed record InputType : OpenStringEnum<InputType>
{
    private InputType(string value) : base(value)
    {
    }

    public static readonly InputType RazorpayToken = new("razorpay_token");

    public static readonly InputType ServiceProviderToken = new("service_provider_token");

    public static readonly InputType Raw = new("raw");

    public TResult Match<TResult>(Func<TResult> onRazorpayToken,
        Func<TResult> onServiceProviderToken,
        Func<TResult> onRaw,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RazorpayToken => onRazorpayToken(),
            _ when this == ServiceProviderToken => onServiceProviderToken(),
            _ when this == Raw => onRaw(),
            _ => otherwise(Value)
        };

    public void Match(Action onRazorpayToken, Action onServiceProviderToken, Action onRaw, Action<string> otherwise)
    {
        if (this == RazorpayToken) onRazorpayToken();
        else if (this == ServiceProviderToken) onServiceProviderToken();
        else if (this == Raw) onRaw();
        else otherwise(Value);
    }
}
