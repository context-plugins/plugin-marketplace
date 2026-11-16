using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(VerificationsResponseConverter))]
public record VerificationsResponse
{
    private readonly Optional<MerchantVerification> _merchantVerificationValue;

    private readonly Optional<PaymentInstrumentVerification> _paymentInstrumentVerificationValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private VerificationsResponse(Optional<MerchantVerification> merchantVerificationValue,
        Optional<PaymentInstrumentVerification> paymentInstrumentVerificationValue,
        Optional<UnknownArm> unknownValue)
    {
        _merchantVerificationValue = merchantVerificationValue;
        _paymentInstrumentVerificationValue = paymentInstrumentVerificationValue;
        _unknownValue = unknownValue;
    }

    public static VerificationsResponse MerchantVerification(MerchantVerification value) =>
        new(Optional<MerchantVerification>.Some(value), default, default);

    public static VerificationsResponse PaymentInstrumentVerification(PaymentInstrumentVerification value) =>
        new(default, Optional<PaymentInstrumentVerification>.Some(value), default);

    internal static VerificationsResponse Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMerchantVerification([NotNullWhen(true)] out MerchantVerification? value) =>
        _merchantVerificationValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentVerification([NotNullWhen(true)] out PaymentInstrumentVerification? value) =>
        _paymentInstrumentVerificationValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator VerificationsResponse(MerchantVerification value) => MerchantVerification(value);

    public static implicit operator VerificationsResponse(PaymentInstrumentVerification value) =>
        PaymentInstrumentVerification(value);

    public TResult Match<TResult>(Func<MerchantVerification, TResult> onMerchantVerification,
        Func<PaymentInstrumentVerification, TResult> onPaymentInstrumentVerification,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMerchantVerification(out var merchantVerificationValue) => onMerchantVerification(
                merchantVerificationValue),
            _ when TryGetPaymentInstrumentVerification(
                out var paymentInstrumentVerificationValue) => onPaymentInstrumentVerification(
                paymentInstrumentVerificationValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(VerificationsResponse)} holds no value.")
        };

    public void Match(Action<MerchantVerification> onMerchantVerification,
        Action<PaymentInstrumentVerification> onPaymentInstrumentVerification,
        Action<JsonElement> otherwise)
    {
        if (TryGetMerchantVerification(out var merchantVerificationValue)) onMerchantVerification(
            merchantVerificationValue);
        else if (TryGetPaymentInstrumentVerification(
            out var paymentInstrumentVerificationValue)) onPaymentInstrumentVerification(
            paymentInstrumentVerificationValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(VerificationsResponse)} holds no value.");
    }
}

file sealed class VerificationsResponseConverter : JsonConverter<VerificationsResponse>
{
    public override VerificationsResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<MerchantVerification>(root, options, out var merchantVerificationValue))
        {
            return VerificationsResponse.MerchantVerification(merchantVerificationValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentVerification>(
            root,
            options,
            out var paymentInstrumentVerificationValue))
        {
            return VerificationsResponse.PaymentInstrumentVerification(paymentInstrumentVerificationValue);
        }
        return VerificationsResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, VerificationsResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetMerchantVerification(out var merchantVerificationValue))
        {
            JsonSerializer.Serialize(writer, merchantVerificationValue, options);
        }
        else if (value.TryGetPaymentInstrumentVerification(out var paymentInstrumentVerificationValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentVerificationValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(VerificationsResponse)} contains no valid value to serialize.");
        }
    }
}
