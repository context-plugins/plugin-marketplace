using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(PaymentInstrumentsResponseConverter))]
public record PaymentInstrumentsResponse
{
    private readonly Optional<PaymentInstrumentCard> _paymentInstrumentCardValue;

    private readonly Optional<PaymentInstrumentBank> _paymentInstrumentBankValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PaymentInstrumentsResponse(Optional<PaymentInstrumentCard> paymentInstrumentCardValue,
        Optional<PaymentInstrumentBank> paymentInstrumentBankValue,
        Optional<UnknownArm> unknownValue)
    {
        _paymentInstrumentCardValue = paymentInstrumentCardValue;
        _paymentInstrumentBankValue = paymentInstrumentBankValue;
        _unknownValue = unknownValue;
    }

    public static PaymentInstrumentsResponse PaymentInstrumentCard(PaymentInstrumentCard value) =>
        new(Optional<PaymentInstrumentCard>.Some(value), default, default);

    public static PaymentInstrumentsResponse PaymentInstrumentBank(PaymentInstrumentBank value) =>
        new(default, Optional<PaymentInstrumentBank>.Some(value), default);

    internal static PaymentInstrumentsResponse Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetPaymentInstrumentCard([NotNullWhen(true)] out PaymentInstrumentCard? value) =>
        _paymentInstrumentCardValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentBank([NotNullWhen(true)] out PaymentInstrumentBank? value) =>
        _paymentInstrumentBankValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PaymentInstrumentsResponse(PaymentInstrumentCard value) =>
        PaymentInstrumentCard(value);

    public static implicit operator PaymentInstrumentsResponse(PaymentInstrumentBank value) =>
        PaymentInstrumentBank(value);

    public TResult Match<TResult>(Func<PaymentInstrumentCard, TResult> onPaymentInstrumentCard,
        Func<PaymentInstrumentBank, TResult> onPaymentInstrumentBank,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetPaymentInstrumentCard(out var paymentInstrumentCardValue) => onPaymentInstrumentCard(
                paymentInstrumentCardValue),
            _ when TryGetPaymentInstrumentBank(out var paymentInstrumentBankValue) => onPaymentInstrumentBank(
                paymentInstrumentBankValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PaymentInstrumentsResponse)} holds no value.")
        };

    public void Match(Action<PaymentInstrumentCard> onPaymentInstrumentCard,
        Action<PaymentInstrumentBank> onPaymentInstrumentBank,
        Action<JsonElement> otherwise)
    {
        if (TryGetPaymentInstrumentCard(out var paymentInstrumentCardValue)) onPaymentInstrumentCard(
            paymentInstrumentCardValue);
        else if (TryGetPaymentInstrumentBank(out var paymentInstrumentBankValue)) onPaymentInstrumentBank(
            paymentInstrumentBankValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PaymentInstrumentsResponse)} holds no value.");
    }
}

file sealed class PaymentInstrumentsResponseConverter : JsonConverter<PaymentInstrumentsResponse>
{
    public override PaymentInstrumentsResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<PaymentInstrumentCard>(root, options, out var paymentInstrumentCardValue))
        {
            return PaymentInstrumentsResponse.PaymentInstrumentCard(paymentInstrumentCardValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentBank>(root, options, out var paymentInstrumentBankValue))
        {
            return PaymentInstrumentsResponse.PaymentInstrumentBank(paymentInstrumentBankValue);
        }
        return PaymentInstrumentsResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, PaymentInstrumentsResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetPaymentInstrumentCard(out var paymentInstrumentCardValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentCardValue, options);
        }
        else if (value.TryGetPaymentInstrumentBank(out var paymentInstrumentBankValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentBankValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PaymentInstrumentsResponse)} contains no valid value to serialize.");
        }
    }
}
