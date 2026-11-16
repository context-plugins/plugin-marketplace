using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Defines the operating mode of the <c>Device</c>. <c>PAYMENT_APP</c> devices operate within the standard Finix ecosystem. <c>SDK</c> devices are for customers who are building their own PAX app.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IntegrationMode>))]
public sealed record IntegrationMode : OpenStringEnum<IntegrationMode>
{
    private IntegrationMode(string value) : base(value)
    {
    }

    public static readonly IntegrationMode PaymentApp = new("PAYMENT_APP");

    public static readonly IntegrationMode Sdk = new("SDK");

    public TResult Match<TResult>(Func<TResult> onPaymentApp, Func<TResult> onSdk, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PaymentApp => onPaymentApp(),
            _ when this == Sdk => onSdk(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaymentApp, Action onSdk, Action<string> otherwise)
    {
        if (this == PaymentApp) onPaymentApp();
        else if (this == Sdk) onSdk();
        else otherwise(Value);
    }
}
