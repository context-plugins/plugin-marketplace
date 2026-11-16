using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(PaymentInstrumentsRequest1Converter))]
public record PaymentInstrumentsRequest1
{
    private readonly Optional<PaymentInstrumentDisableAPaymentInstrument> _paymentInstrumentDisableAPaymentInstrumentValue;

    private readonly Optional<PaymentInstrumentEnableAccountUpdater> _paymentInstrumentEnableAccountUpdaterValue;

    private readonly Optional<PaymentInstrumentEnableNetworkTokens> _paymentInstrumentEnableNetworkTokensValue;

    private readonly Optional<PaymentInstrumentUpdateCardAddress> _paymentInstrumentUpdateCardAddressValue;

    private readonly Optional<PaymentInstrumentUpdateName> _paymentInstrumentUpdateNameValue;

    private readonly Optional<PaymentInstrumentUpdateAndVerifyName> _paymentInstrumentUpdateAndVerifyNameValue;

    private readonly Optional<PaymentInstrumentUpdateTags> _paymentInstrumentUpdateTagsValue;

    private readonly Optional<PaymentInstrumentAddAddressForGoogleOrApplePay> _paymentInstrumentAddAddressForGoogleOrApplePayValue;

    private readonly Optional<PaymentInstrumentUpdateExpirationDate> _paymentInstrumentUpdateExpirationDateValue;

    private readonly Optional<PaymentInstrumentVerifyMicrodeposits> _paymentInstrumentVerifyMicrodepositsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PaymentInstrumentsRequest1(Optional<PaymentInstrumentDisableAPaymentInstrument> paymentInstrumentDisableAPaymentInstrumentValue,
        Optional<PaymentInstrumentEnableAccountUpdater> paymentInstrumentEnableAccountUpdaterValue,
        Optional<PaymentInstrumentEnableNetworkTokens> paymentInstrumentEnableNetworkTokensValue,
        Optional<PaymentInstrumentUpdateCardAddress> paymentInstrumentUpdateCardAddressValue,
        Optional<PaymentInstrumentUpdateName> paymentInstrumentUpdateNameValue,
        Optional<PaymentInstrumentUpdateAndVerifyName> paymentInstrumentUpdateAndVerifyNameValue,
        Optional<PaymentInstrumentUpdateTags> paymentInstrumentUpdateTagsValue,
        Optional<PaymentInstrumentAddAddressForGoogleOrApplePay> paymentInstrumentAddAddressForGoogleOrApplePayValue,
        Optional<PaymentInstrumentUpdateExpirationDate> paymentInstrumentUpdateExpirationDateValue,
        Optional<PaymentInstrumentVerifyMicrodeposits> paymentInstrumentVerifyMicrodepositsValue,
        Optional<UnknownArm> unknownValue)
    {
        _paymentInstrumentDisableAPaymentInstrumentValue = paymentInstrumentDisableAPaymentInstrumentValue;
        _paymentInstrumentEnableAccountUpdaterValue = paymentInstrumentEnableAccountUpdaterValue;
        _paymentInstrumentEnableNetworkTokensValue = paymentInstrumentEnableNetworkTokensValue;
        _paymentInstrumentUpdateCardAddressValue = paymentInstrumentUpdateCardAddressValue;
        _paymentInstrumentUpdateNameValue = paymentInstrumentUpdateNameValue;
        _paymentInstrumentUpdateAndVerifyNameValue = paymentInstrumentUpdateAndVerifyNameValue;
        _paymentInstrumentUpdateTagsValue = paymentInstrumentUpdateTagsValue;
        _paymentInstrumentAddAddressForGoogleOrApplePayValue = paymentInstrumentAddAddressForGoogleOrApplePayValue;
        _paymentInstrumentUpdateExpirationDateValue = paymentInstrumentUpdateExpirationDateValue;
        _paymentInstrumentVerifyMicrodepositsValue = paymentInstrumentVerifyMicrodepositsValue;
        _unknownValue = unknownValue;
    }

    public static PaymentInstrumentsRequest1 PaymentInstrumentDisableAPaymentInstrument(PaymentInstrumentDisableAPaymentInstrument value) =>
        new(
            Optional<PaymentInstrumentDisableAPaymentInstrument>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static PaymentInstrumentsRequest1 PaymentInstrumentEnableAccountUpdater(PaymentInstrumentEnableAccountUpdater value) =>
        new(
            default,
            Optional<PaymentInstrumentEnableAccountUpdater>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static PaymentInstrumentsRequest1 PaymentInstrumentEnableNetworkTokens(PaymentInstrumentEnableNetworkTokens value) =>
        new(
            default,
            default,
            Optional<PaymentInstrumentEnableNetworkTokens>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static PaymentInstrumentsRequest1 PaymentInstrumentUpdateCardAddress(PaymentInstrumentUpdateCardAddress value) =>
        new(
            default,
            default,
            default,
            Optional<PaymentInstrumentUpdateCardAddress>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static PaymentInstrumentsRequest1 PaymentInstrumentUpdateName(PaymentInstrumentUpdateName value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<PaymentInstrumentUpdateName>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    public static PaymentInstrumentsRequest1 PaymentInstrumentUpdateAndVerifyName(PaymentInstrumentUpdateAndVerifyName value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<PaymentInstrumentUpdateAndVerifyName>.Some(value),
            default,
            default,
            default,
            default,
            default);

    public static PaymentInstrumentsRequest1 PaymentInstrumentUpdateTags(PaymentInstrumentUpdateTags value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<PaymentInstrumentUpdateTags>.Some(value),
            default,
            default,
            default,
            default);

    public static PaymentInstrumentsRequest1 PaymentInstrumentAddAddressForGoogleOrApplePay(PaymentInstrumentAddAddressForGoogleOrApplePay value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<PaymentInstrumentAddAddressForGoogleOrApplePay>.Some(value),
            default,
            default,
            default);

    public static PaymentInstrumentsRequest1 PaymentInstrumentUpdateExpirationDate(PaymentInstrumentUpdateExpirationDate value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<PaymentInstrumentUpdateExpirationDate>.Some(value),
            default,
            default);

    public static PaymentInstrumentsRequest1 PaymentInstrumentVerifyMicrodeposits(PaymentInstrumentVerifyMicrodeposits value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<PaymentInstrumentVerifyMicrodeposits>.Some(value),
            default);

    internal static PaymentInstrumentsRequest1 Unknown(JsonElement value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetPaymentInstrumentDisableAPaymentInstrument([NotNullWhen(true)] out PaymentInstrumentDisableAPaymentInstrument? value) =>
        _paymentInstrumentDisableAPaymentInstrumentValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentEnableAccountUpdater([NotNullWhen(true)] out PaymentInstrumentEnableAccountUpdater? value) =>
        _paymentInstrumentEnableAccountUpdaterValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentEnableNetworkTokens([NotNullWhen(true)] out PaymentInstrumentEnableNetworkTokens? value) =>
        _paymentInstrumentEnableNetworkTokensValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentUpdateCardAddress([NotNullWhen(true)] out PaymentInstrumentUpdateCardAddress? value) =>
        _paymentInstrumentUpdateCardAddressValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentUpdateName([NotNullWhen(true)] out PaymentInstrumentUpdateName? value) =>
        _paymentInstrumentUpdateNameValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentUpdateAndVerifyName([NotNullWhen(true)] out PaymentInstrumentUpdateAndVerifyName? value) =>
        _paymentInstrumentUpdateAndVerifyNameValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentUpdateTags([NotNullWhen(true)] out PaymentInstrumentUpdateTags? value) =>
        _paymentInstrumentUpdateTagsValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentAddAddressForGoogleOrApplePay([NotNullWhen(true)] out PaymentInstrumentAddAddressForGoogleOrApplePay? value) =>
        _paymentInstrumentAddAddressForGoogleOrApplePayValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentUpdateExpirationDate([NotNullWhen(true)] out PaymentInstrumentUpdateExpirationDate? value) =>
        _paymentInstrumentUpdateExpirationDateValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentVerifyMicrodeposits([NotNullWhen(true)] out PaymentInstrumentVerifyMicrodeposits? value) =>
        _paymentInstrumentVerifyMicrodepositsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PaymentInstrumentsRequest1(PaymentInstrumentDisableAPaymentInstrument value) =>
        PaymentInstrumentDisableAPaymentInstrument(value);

    public static implicit operator PaymentInstrumentsRequest1(PaymentInstrumentEnableAccountUpdater value) =>
        PaymentInstrumentEnableAccountUpdater(value);

    public static implicit operator PaymentInstrumentsRequest1(PaymentInstrumentEnableNetworkTokens value) =>
        PaymentInstrumentEnableNetworkTokens(value);

    public static implicit operator PaymentInstrumentsRequest1(PaymentInstrumentUpdateCardAddress value) =>
        PaymentInstrumentUpdateCardAddress(value);

    public static implicit operator PaymentInstrumentsRequest1(PaymentInstrumentUpdateName value) =>
        PaymentInstrumentUpdateName(value);

    public static implicit operator PaymentInstrumentsRequest1(PaymentInstrumentUpdateAndVerifyName value) =>
        PaymentInstrumentUpdateAndVerifyName(value);

    public static implicit operator PaymentInstrumentsRequest1(PaymentInstrumentUpdateTags value) =>
        PaymentInstrumentUpdateTags(value);

    public static implicit operator PaymentInstrumentsRequest1(PaymentInstrumentAddAddressForGoogleOrApplePay value) =>
        PaymentInstrumentAddAddressForGoogleOrApplePay(value);

    public static implicit operator PaymentInstrumentsRequest1(PaymentInstrumentUpdateExpirationDate value) =>
        PaymentInstrumentUpdateExpirationDate(value);

    public static implicit operator PaymentInstrumentsRequest1(PaymentInstrumentVerifyMicrodeposits value) =>
        PaymentInstrumentVerifyMicrodeposits(value);

    public TResult Match<TResult>(Func<PaymentInstrumentDisableAPaymentInstrument, TResult> onPaymentInstrumentDisableAPaymentInstrument,
        Func<PaymentInstrumentEnableAccountUpdater, TResult> onPaymentInstrumentEnableAccountUpdater,
        Func<PaymentInstrumentEnableNetworkTokens, TResult> onPaymentInstrumentEnableNetworkTokens,
        Func<PaymentInstrumentUpdateCardAddress, TResult> onPaymentInstrumentUpdateCardAddress,
        Func<PaymentInstrumentUpdateName, TResult> onPaymentInstrumentUpdateName,
        Func<PaymentInstrumentUpdateAndVerifyName, TResult> onPaymentInstrumentUpdateAndVerifyName,
        Func<PaymentInstrumentUpdateTags, TResult> onPaymentInstrumentUpdateTags,
        Func<PaymentInstrumentAddAddressForGoogleOrApplePay, TResult> onPaymentInstrumentAddAddressForGoogleOrApplePay,
        Func<PaymentInstrumentUpdateExpirationDate, TResult> onPaymentInstrumentUpdateExpirationDate,
        Func<PaymentInstrumentVerifyMicrodeposits, TResult> onPaymentInstrumentVerifyMicrodeposits,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetPaymentInstrumentDisableAPaymentInstrument(
                out var paymentInstrumentDisableAPaymentInstrumentValue) => onPaymentInstrumentDisableAPaymentInstrument(
                paymentInstrumentDisableAPaymentInstrumentValue),
            _ when TryGetPaymentInstrumentEnableAccountUpdater(
                out var paymentInstrumentEnableAccountUpdaterValue) => onPaymentInstrumentEnableAccountUpdater(
                paymentInstrumentEnableAccountUpdaterValue),
            _ when TryGetPaymentInstrumentEnableNetworkTokens(
                out var paymentInstrumentEnableNetworkTokensValue) => onPaymentInstrumentEnableNetworkTokens(
                paymentInstrumentEnableNetworkTokensValue),
            _ when TryGetPaymentInstrumentUpdateCardAddress(
                out var paymentInstrumentUpdateCardAddressValue) => onPaymentInstrumentUpdateCardAddress(
                paymentInstrumentUpdateCardAddressValue),
            _ when TryGetPaymentInstrumentUpdateName(
                out var paymentInstrumentUpdateNameValue) => onPaymentInstrumentUpdateName(
                paymentInstrumentUpdateNameValue),
            _ when TryGetPaymentInstrumentUpdateAndVerifyName(
                out var paymentInstrumentUpdateAndVerifyNameValue) => onPaymentInstrumentUpdateAndVerifyName(
                paymentInstrumentUpdateAndVerifyNameValue),
            _ when TryGetPaymentInstrumentUpdateTags(
                out var paymentInstrumentUpdateTagsValue) => onPaymentInstrumentUpdateTags(
                paymentInstrumentUpdateTagsValue),
            _ when TryGetPaymentInstrumentAddAddressForGoogleOrApplePay(
                out var paymentInstrumentAddAddressForGoogleOrApplePayValue) => onPaymentInstrumentAddAddressForGoogleOrApplePay(
                paymentInstrumentAddAddressForGoogleOrApplePayValue),
            _ when TryGetPaymentInstrumentUpdateExpirationDate(
                out var paymentInstrumentUpdateExpirationDateValue) => onPaymentInstrumentUpdateExpirationDate(
                paymentInstrumentUpdateExpirationDateValue),
            _ when TryGetPaymentInstrumentVerifyMicrodeposits(
                out var paymentInstrumentVerifyMicrodepositsValue) => onPaymentInstrumentVerifyMicrodeposits(
                paymentInstrumentVerifyMicrodepositsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PaymentInstrumentsRequest1)} holds no value.")
        };

    public void Match(Action<PaymentInstrumentDisableAPaymentInstrument> onPaymentInstrumentDisableAPaymentInstrument,
        Action<PaymentInstrumentEnableAccountUpdater> onPaymentInstrumentEnableAccountUpdater,
        Action<PaymentInstrumentEnableNetworkTokens> onPaymentInstrumentEnableNetworkTokens,
        Action<PaymentInstrumentUpdateCardAddress> onPaymentInstrumentUpdateCardAddress,
        Action<PaymentInstrumentUpdateName> onPaymentInstrumentUpdateName,
        Action<PaymentInstrumentUpdateAndVerifyName> onPaymentInstrumentUpdateAndVerifyName,
        Action<PaymentInstrumentUpdateTags> onPaymentInstrumentUpdateTags,
        Action<PaymentInstrumentAddAddressForGoogleOrApplePay> onPaymentInstrumentAddAddressForGoogleOrApplePay,
        Action<PaymentInstrumentUpdateExpirationDate> onPaymentInstrumentUpdateExpirationDate,
        Action<PaymentInstrumentVerifyMicrodeposits> onPaymentInstrumentVerifyMicrodeposits,
        Action<JsonElement> otherwise)
    {
        if (TryGetPaymentInstrumentDisableAPaymentInstrument(
            out var paymentInstrumentDisableAPaymentInstrumentValue)) onPaymentInstrumentDisableAPaymentInstrument(
            paymentInstrumentDisableAPaymentInstrumentValue);
        else if (TryGetPaymentInstrumentEnableAccountUpdater(
            out var paymentInstrumentEnableAccountUpdaterValue)) onPaymentInstrumentEnableAccountUpdater(
            paymentInstrumentEnableAccountUpdaterValue);
        else if (TryGetPaymentInstrumentEnableNetworkTokens(
            out var paymentInstrumentEnableNetworkTokensValue)) onPaymentInstrumentEnableNetworkTokens(
            paymentInstrumentEnableNetworkTokensValue);
        else if (TryGetPaymentInstrumentUpdateCardAddress(
            out var paymentInstrumentUpdateCardAddressValue)) onPaymentInstrumentUpdateCardAddress(
            paymentInstrumentUpdateCardAddressValue);
        else if (TryGetPaymentInstrumentUpdateName(
            out var paymentInstrumentUpdateNameValue)) onPaymentInstrumentUpdateName(paymentInstrumentUpdateNameValue);
        else if (TryGetPaymentInstrumentUpdateAndVerifyName(
            out var paymentInstrumentUpdateAndVerifyNameValue)) onPaymentInstrumentUpdateAndVerifyName(
            paymentInstrumentUpdateAndVerifyNameValue);
        else if (TryGetPaymentInstrumentUpdateTags(
            out var paymentInstrumentUpdateTagsValue)) onPaymentInstrumentUpdateTags(paymentInstrumentUpdateTagsValue);
        else if (TryGetPaymentInstrumentAddAddressForGoogleOrApplePay(
            out var paymentInstrumentAddAddressForGoogleOrApplePayValue)) onPaymentInstrumentAddAddressForGoogleOrApplePay(
            paymentInstrumentAddAddressForGoogleOrApplePayValue);
        else if (TryGetPaymentInstrumentUpdateExpirationDate(
            out var paymentInstrumentUpdateExpirationDateValue)) onPaymentInstrumentUpdateExpirationDate(
            paymentInstrumentUpdateExpirationDateValue);
        else if (TryGetPaymentInstrumentVerifyMicrodeposits(
            out var paymentInstrumentVerifyMicrodepositsValue)) onPaymentInstrumentVerifyMicrodeposits(
            paymentInstrumentVerifyMicrodepositsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PaymentInstrumentsRequest1)} holds no value.");
    }
}

file sealed class PaymentInstrumentsRequest1Converter : JsonConverter<PaymentInstrumentsRequest1>
{
    public override PaymentInstrumentsRequest1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<PaymentInstrumentDisableAPaymentInstrument>(
            root,
            options,
            out var paymentInstrumentDisableAPaymentInstrumentValue))
        {
            return PaymentInstrumentsRequest1.PaymentInstrumentDisableAPaymentInstrument(
                paymentInstrumentDisableAPaymentInstrumentValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentEnableAccountUpdater>(
            root,
            options,
            out var paymentInstrumentEnableAccountUpdaterValue))
        {
            return PaymentInstrumentsRequest1.PaymentInstrumentEnableAccountUpdater(
                paymentInstrumentEnableAccountUpdaterValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentEnableNetworkTokens>(
            root,
            options,
            out var paymentInstrumentEnableNetworkTokensValue))
        {
            return PaymentInstrumentsRequest1.PaymentInstrumentEnableNetworkTokens(
                paymentInstrumentEnableNetworkTokensValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentUpdateCardAddress>(
            root,
            options,
            out var paymentInstrumentUpdateCardAddressValue))
        {
            return PaymentInstrumentsRequest1.PaymentInstrumentUpdateCardAddress(
                paymentInstrumentUpdateCardAddressValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentUpdateName>(
            root,
            options,
            out var paymentInstrumentUpdateNameValue))
        {
            return PaymentInstrumentsRequest1.PaymentInstrumentUpdateName(paymentInstrumentUpdateNameValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentUpdateAndVerifyName>(
            root,
            options,
            out var paymentInstrumentUpdateAndVerifyNameValue))
        {
            return PaymentInstrumentsRequest1.PaymentInstrumentUpdateAndVerifyName(
                paymentInstrumentUpdateAndVerifyNameValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentUpdateTags>(
            root,
            options,
            out var paymentInstrumentUpdateTagsValue))
        {
            return PaymentInstrumentsRequest1.PaymentInstrumentUpdateTags(paymentInstrumentUpdateTagsValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentAddAddressForGoogleOrApplePay>(
            root,
            options,
            out var paymentInstrumentAddAddressForGoogleOrApplePayValue))
        {
            return PaymentInstrumentsRequest1.PaymentInstrumentAddAddressForGoogleOrApplePay(
                paymentInstrumentAddAddressForGoogleOrApplePayValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentUpdateExpirationDate>(
            root,
            options,
            out var paymentInstrumentUpdateExpirationDateValue))
        {
            return PaymentInstrumentsRequest1.PaymentInstrumentUpdateExpirationDate(
                paymentInstrumentUpdateExpirationDateValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentVerifyMicrodeposits>(
            root,
            options,
            out var paymentInstrumentVerifyMicrodepositsValue))
        {
            return PaymentInstrumentsRequest1.PaymentInstrumentVerifyMicrodeposits(
                paymentInstrumentVerifyMicrodepositsValue);
        }
        return PaymentInstrumentsRequest1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, PaymentInstrumentsRequest1 value, JsonSerializerOptions options)
    {
        if (value.TryGetPaymentInstrumentDisableAPaymentInstrument(
            out var paymentInstrumentDisableAPaymentInstrumentValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentDisableAPaymentInstrumentValue, options);
        }
        else if (value.TryGetPaymentInstrumentEnableAccountUpdater(out var paymentInstrumentEnableAccountUpdaterValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentEnableAccountUpdaterValue, options);
        }
        else if (value.TryGetPaymentInstrumentEnableNetworkTokens(out var paymentInstrumentEnableNetworkTokensValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentEnableNetworkTokensValue, options);
        }
        else if (value.TryGetPaymentInstrumentUpdateCardAddress(out var paymentInstrumentUpdateCardAddressValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentUpdateCardAddressValue, options);
        }
        else if (value.TryGetPaymentInstrumentUpdateName(out var paymentInstrumentUpdateNameValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentUpdateNameValue, options);
        }
        else if (value.TryGetPaymentInstrumentUpdateAndVerifyName(out var paymentInstrumentUpdateAndVerifyNameValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentUpdateAndVerifyNameValue, options);
        }
        else if (value.TryGetPaymentInstrumentUpdateTags(out var paymentInstrumentUpdateTagsValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentUpdateTagsValue, options);
        }
        else if (value.TryGetPaymentInstrumentAddAddressForGoogleOrApplePay(
            out var paymentInstrumentAddAddressForGoogleOrApplePayValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentAddAddressForGoogleOrApplePayValue, options);
        }
        else if (value.TryGetPaymentInstrumentUpdateExpirationDate(out var paymentInstrumentUpdateExpirationDateValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentUpdateExpirationDateValue, options);
        }
        else if (value.TryGetPaymentInstrumentVerifyMicrodeposits(out var paymentInstrumentVerifyMicrodepositsValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentVerifyMicrodepositsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PaymentInstrumentsRequest1)} contains no valid value to serialize.");
        }
    }
}
