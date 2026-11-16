using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(PaymentInstrumentsResponse1Converter))]
public record PaymentInstrumentsResponse1
{
    private readonly Optional<PaymentInstrumentDisableAPaymentInstrument1> _paymentInstrumentDisableAPaymentInstrument1Value;

    private readonly Optional<PaymentInstrumentCard> _paymentInstrumentCardValue;

    private readonly Optional<PaymentInstrumentUpdateTags1> _paymentInstrumentUpdateTags1Value;

    private readonly Optional<PaymentInstrumentBank> _paymentInstrumentBankValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PaymentInstrumentsResponse1(Optional<PaymentInstrumentDisableAPaymentInstrument1> paymentInstrumentDisableAPaymentInstrument1Value,
        Optional<PaymentInstrumentCard> paymentInstrumentCardValue,
        Optional<PaymentInstrumentUpdateTags1> paymentInstrumentUpdateTags1Value,
        Optional<PaymentInstrumentBank> paymentInstrumentBankValue,
        Optional<UnknownArm> unknownValue)
    {
        _paymentInstrumentDisableAPaymentInstrument1Value = paymentInstrumentDisableAPaymentInstrument1Value;
        _paymentInstrumentCardValue = paymentInstrumentCardValue;
        _paymentInstrumentUpdateTags1Value = paymentInstrumentUpdateTags1Value;
        _paymentInstrumentBankValue = paymentInstrumentBankValue;
        _unknownValue = unknownValue;
    }

    public static PaymentInstrumentsResponse1 PaymentInstrumentDisableAPaymentInstrument1(PaymentInstrumentDisableAPaymentInstrument1 value) =>
        new(Optional<PaymentInstrumentDisableAPaymentInstrument1>.Some(value), default, default, default, default);

    public static PaymentInstrumentsResponse1 PaymentInstrumentCard(PaymentInstrumentCard value) =>
        new(default, Optional<PaymentInstrumentCard>.Some(value), default, default, default);

    public static PaymentInstrumentsResponse1 PaymentInstrumentUpdateTags1(PaymentInstrumentUpdateTags1 value) =>
        new(default, default, Optional<PaymentInstrumentUpdateTags1>.Some(value), default, default);

    public static PaymentInstrumentsResponse1 PaymentInstrumentBank(PaymentInstrumentBank value) =>
        new(default, default, default, Optional<PaymentInstrumentBank>.Some(value), default);

    internal static PaymentInstrumentsResponse1 Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetPaymentInstrumentDisableAPaymentInstrument1([NotNullWhen(true)] out PaymentInstrumentDisableAPaymentInstrument1? value) =>
        _paymentInstrumentDisableAPaymentInstrument1Value.TryGetValue(out value);

    public bool TryGetPaymentInstrumentCard([NotNullWhen(true)] out PaymentInstrumentCard? value) =>
        _paymentInstrumentCardValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentUpdateTags1([NotNullWhen(true)] out PaymentInstrumentUpdateTags1? value) =>
        _paymentInstrumentUpdateTags1Value.TryGetValue(out value);

    public bool TryGetPaymentInstrumentBank([NotNullWhen(true)] out PaymentInstrumentBank? value) =>
        _paymentInstrumentBankValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PaymentInstrumentsResponse1(PaymentInstrumentDisableAPaymentInstrument1 value) =>
        PaymentInstrumentDisableAPaymentInstrument1(value);

    public static implicit operator PaymentInstrumentsResponse1(PaymentInstrumentCard value) =>
        PaymentInstrumentCard(value);

    public static implicit operator PaymentInstrumentsResponse1(PaymentInstrumentUpdateTags1 value) =>
        PaymentInstrumentUpdateTags1(value);

    public static implicit operator PaymentInstrumentsResponse1(PaymentInstrumentBank value) =>
        PaymentInstrumentBank(value);

    public TResult Match<TResult>(Func<PaymentInstrumentDisableAPaymentInstrument1, TResult> onPaymentInstrumentDisableAPaymentInstrument1,
        Func<PaymentInstrumentCard, TResult> onPaymentInstrumentCard,
        Func<PaymentInstrumentUpdateTags1, TResult> onPaymentInstrumentUpdateTags1,
        Func<PaymentInstrumentBank, TResult> onPaymentInstrumentBank,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetPaymentInstrumentDisableAPaymentInstrument1(
                out var paymentInstrumentDisableAPaymentInstrument1Value) => onPaymentInstrumentDisableAPaymentInstrument1(
                paymentInstrumentDisableAPaymentInstrument1Value),
            _ when TryGetPaymentInstrumentCard(out var paymentInstrumentCardValue) => onPaymentInstrumentCard(
                paymentInstrumentCardValue),
            _ when TryGetPaymentInstrumentUpdateTags1(
                out var paymentInstrumentUpdateTags1Value) => onPaymentInstrumentUpdateTags1(
                paymentInstrumentUpdateTags1Value),
            _ when TryGetPaymentInstrumentBank(out var paymentInstrumentBankValue) => onPaymentInstrumentBank(
                paymentInstrumentBankValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PaymentInstrumentsResponse1)} holds no value.")
        };

    public void Match(Action<PaymentInstrumentDisableAPaymentInstrument1> onPaymentInstrumentDisableAPaymentInstrument1,
        Action<PaymentInstrumentCard> onPaymentInstrumentCard,
        Action<PaymentInstrumentUpdateTags1> onPaymentInstrumentUpdateTags1,
        Action<PaymentInstrumentBank> onPaymentInstrumentBank,
        Action<JsonElement> otherwise)
    {
        if (TryGetPaymentInstrumentDisableAPaymentInstrument1(
            out var paymentInstrumentDisableAPaymentInstrument1Value)) onPaymentInstrumentDisableAPaymentInstrument1(
            paymentInstrumentDisableAPaymentInstrument1Value);
        else if (TryGetPaymentInstrumentCard(out var paymentInstrumentCardValue)) onPaymentInstrumentCard(
            paymentInstrumentCardValue);
        else if (TryGetPaymentInstrumentUpdateTags1(
            out var paymentInstrumentUpdateTags1Value)) onPaymentInstrumentUpdateTags1(
            paymentInstrumentUpdateTags1Value);
        else if (TryGetPaymentInstrumentBank(out var paymentInstrumentBankValue)) onPaymentInstrumentBank(
            paymentInstrumentBankValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PaymentInstrumentsResponse1)} holds no value.");
    }
}

file sealed class PaymentInstrumentsResponse1Converter : JsonConverter<PaymentInstrumentsResponse1>
{
    public override PaymentInstrumentsResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<PaymentInstrumentDisableAPaymentInstrument1>(
            root,
            options,
            out var paymentInstrumentDisableAPaymentInstrument1Value))
        {
            return PaymentInstrumentsResponse1.PaymentInstrumentDisableAPaymentInstrument1(
                paymentInstrumentDisableAPaymentInstrument1Value);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentCard>(root, options, out var paymentInstrumentCardValue))
        {
            return PaymentInstrumentsResponse1.PaymentInstrumentCard(paymentInstrumentCardValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentUpdateTags1>(
            root,
            options,
            out var paymentInstrumentUpdateTags1Value))
        {
            return PaymentInstrumentsResponse1.PaymentInstrumentUpdateTags1(paymentInstrumentUpdateTags1Value);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentBank>(root, options, out var paymentInstrumentBankValue))
        {
            return PaymentInstrumentsResponse1.PaymentInstrumentBank(paymentInstrumentBankValue);
        }
        return PaymentInstrumentsResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, PaymentInstrumentsResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetPaymentInstrumentDisableAPaymentInstrument1(
            out var paymentInstrumentDisableAPaymentInstrument1Value))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentDisableAPaymentInstrument1Value, options);
        }
        else if (value.TryGetPaymentInstrumentCard(out var paymentInstrumentCardValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentCardValue, options);
        }
        else if (value.TryGetPaymentInstrumentUpdateTags1(out var paymentInstrumentUpdateTags1Value))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentUpdateTags1Value, options);
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
            throw new JsonException($"{nameof(PaymentInstrumentsResponse1)} contains no valid value to serialize.");
        }
    }
}
