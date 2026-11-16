using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(Verifications3Converter))]
public record Verifications3
{
    private readonly Optional<PaymentInstrumentVerification> _paymentInstrumentVerificationValue;

    private readonly Optional<MerchantVerification> _merchantVerificationValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Verifications3(Optional<PaymentInstrumentVerification> paymentInstrumentVerificationValue,
        Optional<MerchantVerification> merchantVerificationValue,
        Optional<UnknownArm> unknownValue)
    {
        _paymentInstrumentVerificationValue = paymentInstrumentVerificationValue;
        _merchantVerificationValue = merchantVerificationValue;
        _unknownValue = unknownValue;
    }

    public static Verifications3 PaymentInstrumentVerification(PaymentInstrumentVerification value) =>
        new(Optional<PaymentInstrumentVerification>.Some(value), default, default);

    public static Verifications3 MerchantVerification(MerchantVerification value) =>
        new(default, Optional<MerchantVerification>.Some(value), default);

    internal static Verifications3 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetPaymentInstrumentVerification([NotNullWhen(true)] out PaymentInstrumentVerification? value) =>
        _paymentInstrumentVerificationValue.TryGetValue(out value);

    public bool TryGetMerchantVerification([NotNullWhen(true)] out MerchantVerification? value) =>
        _merchantVerificationValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Verifications3(PaymentInstrumentVerification value) =>
        PaymentInstrumentVerification(value);

    public static implicit operator Verifications3(MerchantVerification value) => MerchantVerification(value);

    public TResult Match<TResult>(Func<PaymentInstrumentVerification, TResult> onPaymentInstrumentVerification,
        Func<MerchantVerification, TResult> onMerchantVerification,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetPaymentInstrumentVerification(
                out var paymentInstrumentVerificationValue) => onPaymentInstrumentVerification(
                paymentInstrumentVerificationValue),
            _ when TryGetMerchantVerification(out var merchantVerificationValue) => onMerchantVerification(
                merchantVerificationValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Verifications3)} holds no value.")
        };

    public void Match(Action<PaymentInstrumentVerification> onPaymentInstrumentVerification,
        Action<MerchantVerification> onMerchantVerification,
        Action<JsonElement> otherwise)
    {
        if (TryGetPaymentInstrumentVerification(
            out var paymentInstrumentVerificationValue)) onPaymentInstrumentVerification(
            paymentInstrumentVerificationValue);
        else if (TryGetMerchantVerification(out var merchantVerificationValue)) onMerchantVerification(
            merchantVerificationValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Verifications3)} holds no value.");
    }
}

file sealed class Verifications3Converter : JsonConverter<Verifications3>
{
    public override Verifications3 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<PaymentInstrumentVerification>(
            root,
            options,
            out var paymentInstrumentVerificationValue))
        {
            return Verifications3.PaymentInstrumentVerification(paymentInstrumentVerificationValue);
        }
        if (JsonSerializer.TryDeserialize<MerchantVerification>(root, options, out var merchantVerificationValue))
        {
            return Verifications3.MerchantVerification(merchantVerificationValue);
        }
        return Verifications3.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Verifications3 value, JsonSerializerOptions options)
    {
        if (value.TryGetPaymentInstrumentVerification(out var paymentInstrumentVerificationValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentVerificationValue, options);
        }
        else if (value.TryGetMerchantVerification(out var merchantVerificationValue))
        {
            JsonSerializer.Serialize(writer, merchantVerificationValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Verifications3)} contains no valid value to serialize.");
        }
    }
}
