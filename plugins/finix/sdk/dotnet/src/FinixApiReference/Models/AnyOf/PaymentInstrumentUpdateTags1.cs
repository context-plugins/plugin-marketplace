using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(PaymentInstrumentUpdateTags1Converter))]
public record PaymentInstrumentUpdateTags1
{
    private readonly Optional<PaymentInstrumentBank> _paymentInstrumentBankValue;

    private readonly Optional<PaymentInstrumentCard> _paymentInstrumentCardValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PaymentInstrumentUpdateTags1(Optional<PaymentInstrumentBank> paymentInstrumentBankValue,
        Optional<PaymentInstrumentCard> paymentInstrumentCardValue,
        Optional<UnknownArm> unknownValue)
    {
        _paymentInstrumentBankValue = paymentInstrumentBankValue;
        _paymentInstrumentCardValue = paymentInstrumentCardValue;
        _unknownValue = unknownValue;
    }

    public static PaymentInstrumentUpdateTags1 PaymentInstrumentBank(PaymentInstrumentBank value) =>
        new(Optional<PaymentInstrumentBank>.Some(value), default, default);

    public static PaymentInstrumentUpdateTags1 PaymentInstrumentCard(PaymentInstrumentCard value) =>
        new(default, Optional<PaymentInstrumentCard>.Some(value), default);

    internal static PaymentInstrumentUpdateTags1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetPaymentInstrumentBank([NotNullWhen(true)] out PaymentInstrumentBank? value) =>
        _paymentInstrumentBankValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentCard([NotNullWhen(true)] out PaymentInstrumentCard? value) =>
        _paymentInstrumentCardValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PaymentInstrumentUpdateTags1(PaymentInstrumentBank value) =>
        PaymentInstrumentBank(value);

    public static implicit operator PaymentInstrumentUpdateTags1(PaymentInstrumentCard value) =>
        PaymentInstrumentCard(value);

    public TResult Match<TResult>(Func<PaymentInstrumentBank, TResult> onPaymentInstrumentBank,
        Func<PaymentInstrumentCard, TResult> onPaymentInstrumentCard,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetPaymentInstrumentBank(out var paymentInstrumentBankValue) => onPaymentInstrumentBank(
                paymentInstrumentBankValue),
            _ when TryGetPaymentInstrumentCard(out var paymentInstrumentCardValue) => onPaymentInstrumentCard(
                paymentInstrumentCardValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PaymentInstrumentUpdateTags1)} holds no value.")
        };

    public void Match(Action<PaymentInstrumentBank> onPaymentInstrumentBank,
        Action<PaymentInstrumentCard> onPaymentInstrumentCard,
        Action<JsonElement> otherwise)
    {
        if (TryGetPaymentInstrumentBank(out var paymentInstrumentBankValue)) onPaymentInstrumentBank(
            paymentInstrumentBankValue);
        else if (TryGetPaymentInstrumentCard(out var paymentInstrumentCardValue)) onPaymentInstrumentCard(
            paymentInstrumentCardValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PaymentInstrumentUpdateTags1)} holds no value.");
    }
}

file sealed class PaymentInstrumentUpdateTags1Converter : JsonConverter<PaymentInstrumentUpdateTags1>
{
    public override PaymentInstrumentUpdateTags1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<PaymentInstrumentBank>(root, options, out var paymentInstrumentBankValue))
        {
            return PaymentInstrumentUpdateTags1.PaymentInstrumentBank(paymentInstrumentBankValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentCard>(root, options, out var paymentInstrumentCardValue))
        {
            return PaymentInstrumentUpdateTags1.PaymentInstrumentCard(paymentInstrumentCardValue);
        }
        return PaymentInstrumentUpdateTags1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, PaymentInstrumentUpdateTags1 value, JsonSerializerOptions options)
    {
        if (value.TryGetPaymentInstrumentBank(out var paymentInstrumentBankValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentBankValue, options);
        }
        else if (value.TryGetPaymentInstrumentCard(out var paymentInstrumentCardValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentCardValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PaymentInstrumentUpdateTags1)} contains no valid value to serialize.");
        }
    }
}
