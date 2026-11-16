using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(PaymentInstrumentsRequestConverter))]
public record PaymentInstrumentsRequest
{
    private readonly Optional<PaymentInstrumentCard1> _paymentInstrumentCard1Value;

    private readonly Optional<PaymentInstrumentCardEnableAccountUpdater> _paymentInstrumentCardEnableAccountUpdaterValue;

    private readonly Optional<PaymentInstrumentCardEnableNetworkTokens> _paymentInstrumentCardEnableNetworkTokensValue;

    private readonly Optional<PaymentInstrumentBankAccount> _paymentInstrumentBankAccountValue;

    private readonly Optional<PaymentInstrumentPlaidBankAccount> _paymentInstrumentPlaidBankAccountValue;

    private readonly Optional<PaymentInstrumentCanadianBankAccount> _paymentInstrumentCanadianBankAccountValue;

    private readonly Optional<PaymentInstrumentTokenCard> _paymentInstrumentTokenCardValue;

    private readonly Optional<PaymentInstrumentTokenEnableAccountUpdater> _paymentInstrumentTokenEnableAccountUpdaterValue;

    private readonly Optional<PaymentInstrumentTokenBankAccount> _paymentInstrumentTokenBankAccountValue;

    private readonly Optional<PaymentInstrumentTokenEnableNetworkTokens> _paymentInstrumentTokenEnableNetworkTokensValue;

    private readonly Optional<PaymentInstrumentApplePay> _paymentInstrumentApplePayValue;

    private readonly Optional<PaymentInstrumentGooglePay> _paymentInstrumentGooglePayValue;

    private readonly Optional<PaymentInstrumentApplePayPassthrough> _paymentInstrumentApplePayPassthroughValue;

    private readonly Optional<PaymentInstrumentGooglePayPassthrough> _paymentInstrumentGooglePayPassthroughValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PaymentInstrumentsRequest(Optional<PaymentInstrumentCard1> paymentInstrumentCard1Value,
        Optional<PaymentInstrumentCardEnableAccountUpdater> paymentInstrumentCardEnableAccountUpdaterValue,
        Optional<PaymentInstrumentCardEnableNetworkTokens> paymentInstrumentCardEnableNetworkTokensValue,
        Optional<PaymentInstrumentBankAccount> paymentInstrumentBankAccountValue,
        Optional<PaymentInstrumentPlaidBankAccount> paymentInstrumentPlaidBankAccountValue,
        Optional<PaymentInstrumentCanadianBankAccount> paymentInstrumentCanadianBankAccountValue,
        Optional<PaymentInstrumentTokenCard> paymentInstrumentTokenCardValue,
        Optional<PaymentInstrumentTokenEnableAccountUpdater> paymentInstrumentTokenEnableAccountUpdaterValue,
        Optional<PaymentInstrumentTokenBankAccount> paymentInstrumentTokenBankAccountValue,
        Optional<PaymentInstrumentTokenEnableNetworkTokens> paymentInstrumentTokenEnableNetworkTokensValue,
        Optional<PaymentInstrumentApplePay> paymentInstrumentApplePayValue,
        Optional<PaymentInstrumentGooglePay> paymentInstrumentGooglePayValue,
        Optional<PaymentInstrumentApplePayPassthrough> paymentInstrumentApplePayPassthroughValue,
        Optional<PaymentInstrumentGooglePayPassthrough> paymentInstrumentGooglePayPassthroughValue,
        Optional<UnknownArm> unknownValue)
    {
        _paymentInstrumentCard1Value = paymentInstrumentCard1Value;
        _paymentInstrumentCardEnableAccountUpdaterValue = paymentInstrumentCardEnableAccountUpdaterValue;
        _paymentInstrumentCardEnableNetworkTokensValue = paymentInstrumentCardEnableNetworkTokensValue;
        _paymentInstrumentBankAccountValue = paymentInstrumentBankAccountValue;
        _paymentInstrumentPlaidBankAccountValue = paymentInstrumentPlaidBankAccountValue;
        _paymentInstrumentCanadianBankAccountValue = paymentInstrumentCanadianBankAccountValue;
        _paymentInstrumentTokenCardValue = paymentInstrumentTokenCardValue;
        _paymentInstrumentTokenEnableAccountUpdaterValue = paymentInstrumentTokenEnableAccountUpdaterValue;
        _paymentInstrumentTokenBankAccountValue = paymentInstrumentTokenBankAccountValue;
        _paymentInstrumentTokenEnableNetworkTokensValue = paymentInstrumentTokenEnableNetworkTokensValue;
        _paymentInstrumentApplePayValue = paymentInstrumentApplePayValue;
        _paymentInstrumentGooglePayValue = paymentInstrumentGooglePayValue;
        _paymentInstrumentApplePayPassthroughValue = paymentInstrumentApplePayPassthroughValue;
        _paymentInstrumentGooglePayPassthroughValue = paymentInstrumentGooglePayPassthroughValue;
        _unknownValue = unknownValue;
    }

    public static PaymentInstrumentsRequest PaymentInstrumentCard1(PaymentInstrumentCard1 value) =>
        new(
            Optional<PaymentInstrumentCard1>.Some(value),
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
            default,
            default,
            default,
            default);

    public static PaymentInstrumentsRequest PaymentInstrumentCardEnableAccountUpdater(PaymentInstrumentCardEnableAccountUpdater value) =>
        new(
            default,
            Optional<PaymentInstrumentCardEnableAccountUpdater>.Some(value),
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
            default,
            default,
            default);

    public static PaymentInstrumentsRequest PaymentInstrumentCardEnableNetworkTokens(PaymentInstrumentCardEnableNetworkTokens value) =>
        new(
            default,
            default,
            Optional<PaymentInstrumentCardEnableNetworkTokens>.Some(value),
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
            default,
            default);

    public static PaymentInstrumentsRequest PaymentInstrumentBankAccount(PaymentInstrumentBankAccount value) =>
        new(
            default,
            default,
            default,
            Optional<PaymentInstrumentBankAccount>.Some(value),
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
            default);

    public static PaymentInstrumentsRequest PaymentInstrumentPlaidBankAccount(PaymentInstrumentPlaidBankAccount value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<PaymentInstrumentPlaidBankAccount>.Some(value),
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

    public static PaymentInstrumentsRequest PaymentInstrumentCanadianBankAccount(PaymentInstrumentCanadianBankAccount value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<PaymentInstrumentCanadianBankAccount>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static PaymentInstrumentsRequest PaymentInstrumentTokenCard(PaymentInstrumentTokenCard value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<PaymentInstrumentTokenCard>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static PaymentInstrumentsRequest PaymentInstrumentTokenEnableAccountUpdater(PaymentInstrumentTokenEnableAccountUpdater value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<PaymentInstrumentTokenEnableAccountUpdater>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static PaymentInstrumentsRequest PaymentInstrumentTokenBankAccount(PaymentInstrumentTokenBankAccount value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<PaymentInstrumentTokenBankAccount>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    public static PaymentInstrumentsRequest PaymentInstrumentTokenEnableNetworkTokens(PaymentInstrumentTokenEnableNetworkTokens value) =>
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
            Optional<PaymentInstrumentTokenEnableNetworkTokens>.Some(value),
            default,
            default,
            default,
            default,
            default);

    public static PaymentInstrumentsRequest PaymentInstrumentApplePay(PaymentInstrumentApplePay value) =>
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
            Optional<PaymentInstrumentApplePay>.Some(value),
            default,
            default,
            default,
            default);

    public static PaymentInstrumentsRequest PaymentInstrumentGooglePay(PaymentInstrumentGooglePay value) =>
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
            default,
            Optional<PaymentInstrumentGooglePay>.Some(value),
            default,
            default,
            default);

    public static PaymentInstrumentsRequest PaymentInstrumentApplePayPassthrough(PaymentInstrumentApplePayPassthrough value) =>
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
            default,
            default,
            Optional<PaymentInstrumentApplePayPassthrough>.Some(value),
            default,
            default);

    public static PaymentInstrumentsRequest PaymentInstrumentGooglePayPassthrough(PaymentInstrumentGooglePayPassthrough value) =>
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
            default,
            default,
            default,
            Optional<PaymentInstrumentGooglePayPassthrough>.Some(value),
            default);

    internal static PaymentInstrumentsRequest Unknown(JsonElement value) =>
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
            default,
            default,
            default,
            default,
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetPaymentInstrumentCard1([NotNullWhen(true)] out PaymentInstrumentCard1? value) =>
        _paymentInstrumentCard1Value.TryGetValue(out value);

    public bool TryGetPaymentInstrumentCardEnableAccountUpdater([NotNullWhen(true)] out PaymentInstrumentCardEnableAccountUpdater? value) =>
        _paymentInstrumentCardEnableAccountUpdaterValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentCardEnableNetworkTokens([NotNullWhen(true)] out PaymentInstrumentCardEnableNetworkTokens? value) =>
        _paymentInstrumentCardEnableNetworkTokensValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentBankAccount([NotNullWhen(true)] out PaymentInstrumentBankAccount? value) =>
        _paymentInstrumentBankAccountValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentPlaidBankAccount([NotNullWhen(true)] out PaymentInstrumentPlaidBankAccount? value) =>
        _paymentInstrumentPlaidBankAccountValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentCanadianBankAccount([NotNullWhen(true)] out PaymentInstrumentCanadianBankAccount? value) =>
        _paymentInstrumentCanadianBankAccountValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentTokenCard([NotNullWhen(true)] out PaymentInstrumentTokenCard? value) =>
        _paymentInstrumentTokenCardValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentTokenEnableAccountUpdater([NotNullWhen(true)] out PaymentInstrumentTokenEnableAccountUpdater? value) =>
        _paymentInstrumentTokenEnableAccountUpdaterValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentTokenBankAccount([NotNullWhen(true)] out PaymentInstrumentTokenBankAccount? value) =>
        _paymentInstrumentTokenBankAccountValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentTokenEnableNetworkTokens([NotNullWhen(true)] out PaymentInstrumentTokenEnableNetworkTokens? value) =>
        _paymentInstrumentTokenEnableNetworkTokensValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentApplePay([NotNullWhen(true)] out PaymentInstrumentApplePay? value) =>
        _paymentInstrumentApplePayValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentGooglePay([NotNullWhen(true)] out PaymentInstrumentGooglePay? value) =>
        _paymentInstrumentGooglePayValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentApplePayPassthrough([NotNullWhen(true)] out PaymentInstrumentApplePayPassthrough? value) =>
        _paymentInstrumentApplePayPassthroughValue.TryGetValue(out value);

    public bool TryGetPaymentInstrumentGooglePayPassthrough([NotNullWhen(true)] out PaymentInstrumentGooglePayPassthrough? value) =>
        _paymentInstrumentGooglePayPassthroughValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PaymentInstrumentsRequest(PaymentInstrumentCard1 value) =>
        PaymentInstrumentCard1(value);

    public static implicit operator PaymentInstrumentsRequest(PaymentInstrumentCardEnableAccountUpdater value) =>
        PaymentInstrumentCardEnableAccountUpdater(value);

    public static implicit operator PaymentInstrumentsRequest(PaymentInstrumentCardEnableNetworkTokens value) =>
        PaymentInstrumentCardEnableNetworkTokens(value);

    public static implicit operator PaymentInstrumentsRequest(PaymentInstrumentBankAccount value) =>
        PaymentInstrumentBankAccount(value);

    public static implicit operator PaymentInstrumentsRequest(PaymentInstrumentPlaidBankAccount value) =>
        PaymentInstrumentPlaidBankAccount(value);

    public static implicit operator PaymentInstrumentsRequest(PaymentInstrumentCanadianBankAccount value) =>
        PaymentInstrumentCanadianBankAccount(value);

    public static implicit operator PaymentInstrumentsRequest(PaymentInstrumentTokenCard value) =>
        PaymentInstrumentTokenCard(value);

    public static implicit operator PaymentInstrumentsRequest(PaymentInstrumentTokenEnableAccountUpdater value) =>
        PaymentInstrumentTokenEnableAccountUpdater(value);

    public static implicit operator PaymentInstrumentsRequest(PaymentInstrumentTokenBankAccount value) =>
        PaymentInstrumentTokenBankAccount(value);

    public static implicit operator PaymentInstrumentsRequest(PaymentInstrumentTokenEnableNetworkTokens value) =>
        PaymentInstrumentTokenEnableNetworkTokens(value);

    public static implicit operator PaymentInstrumentsRequest(PaymentInstrumentApplePay value) =>
        PaymentInstrumentApplePay(value);

    public static implicit operator PaymentInstrumentsRequest(PaymentInstrumentGooglePay value) =>
        PaymentInstrumentGooglePay(value);

    public static implicit operator PaymentInstrumentsRequest(PaymentInstrumentApplePayPassthrough value) =>
        PaymentInstrumentApplePayPassthrough(value);

    public static implicit operator PaymentInstrumentsRequest(PaymentInstrumentGooglePayPassthrough value) =>
        PaymentInstrumentGooglePayPassthrough(value);

    public TResult Match<TResult>(Func<PaymentInstrumentCard1, TResult> onPaymentInstrumentCard1,
        Func<PaymentInstrumentCardEnableAccountUpdater, TResult> onPaymentInstrumentCardEnableAccountUpdater,
        Func<PaymentInstrumentCardEnableNetworkTokens, TResult> onPaymentInstrumentCardEnableNetworkTokens,
        Func<PaymentInstrumentBankAccount, TResult> onPaymentInstrumentBankAccount,
        Func<PaymentInstrumentPlaidBankAccount, TResult> onPaymentInstrumentPlaidBankAccount,
        Func<PaymentInstrumentCanadianBankAccount, TResult> onPaymentInstrumentCanadianBankAccount,
        Func<PaymentInstrumentTokenCard, TResult> onPaymentInstrumentTokenCard,
        Func<PaymentInstrumentTokenEnableAccountUpdater, TResult> onPaymentInstrumentTokenEnableAccountUpdater,
        Func<PaymentInstrumentTokenBankAccount, TResult> onPaymentInstrumentTokenBankAccount,
        Func<PaymentInstrumentTokenEnableNetworkTokens, TResult> onPaymentInstrumentTokenEnableNetworkTokens,
        Func<PaymentInstrumentApplePay, TResult> onPaymentInstrumentApplePay,
        Func<PaymentInstrumentGooglePay, TResult> onPaymentInstrumentGooglePay,
        Func<PaymentInstrumentApplePayPassthrough, TResult> onPaymentInstrumentApplePayPassthrough,
        Func<PaymentInstrumentGooglePayPassthrough, TResult> onPaymentInstrumentGooglePayPassthrough,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetPaymentInstrumentCard1(out var paymentInstrumentCard1Value) => onPaymentInstrumentCard1(
                paymentInstrumentCard1Value),
            _ when TryGetPaymentInstrumentCardEnableAccountUpdater(
                out var paymentInstrumentCardEnableAccountUpdaterValue) => onPaymentInstrumentCardEnableAccountUpdater(
                paymentInstrumentCardEnableAccountUpdaterValue),
            _ when TryGetPaymentInstrumentCardEnableNetworkTokens(
                out var paymentInstrumentCardEnableNetworkTokensValue) => onPaymentInstrumentCardEnableNetworkTokens(
                paymentInstrumentCardEnableNetworkTokensValue),
            _ when TryGetPaymentInstrumentBankAccount(
                out var paymentInstrumentBankAccountValue) => onPaymentInstrumentBankAccount(
                paymentInstrumentBankAccountValue),
            _ when TryGetPaymentInstrumentPlaidBankAccount(
                out var paymentInstrumentPlaidBankAccountValue) => onPaymentInstrumentPlaidBankAccount(
                paymentInstrumentPlaidBankAccountValue),
            _ when TryGetPaymentInstrumentCanadianBankAccount(
                out var paymentInstrumentCanadianBankAccountValue) => onPaymentInstrumentCanadianBankAccount(
                paymentInstrumentCanadianBankAccountValue),
            _ when TryGetPaymentInstrumentTokenCard(
                out var paymentInstrumentTokenCardValue) => onPaymentInstrumentTokenCard(
                paymentInstrumentTokenCardValue),
            _ when TryGetPaymentInstrumentTokenEnableAccountUpdater(
                out var paymentInstrumentTokenEnableAccountUpdaterValue) => onPaymentInstrumentTokenEnableAccountUpdater(
                paymentInstrumentTokenEnableAccountUpdaterValue),
            _ when TryGetPaymentInstrumentTokenBankAccount(
                out var paymentInstrumentTokenBankAccountValue) => onPaymentInstrumentTokenBankAccount(
                paymentInstrumentTokenBankAccountValue),
            _ when TryGetPaymentInstrumentTokenEnableNetworkTokens(
                out var paymentInstrumentTokenEnableNetworkTokensValue) => onPaymentInstrumentTokenEnableNetworkTokens(
                paymentInstrumentTokenEnableNetworkTokensValue),
            _ when TryGetPaymentInstrumentApplePay(
                out var paymentInstrumentApplePayValue) => onPaymentInstrumentApplePay(paymentInstrumentApplePayValue),
            _ when TryGetPaymentInstrumentGooglePay(
                out var paymentInstrumentGooglePayValue) => onPaymentInstrumentGooglePay(
                paymentInstrumentGooglePayValue),
            _ when TryGetPaymentInstrumentApplePayPassthrough(
                out var paymentInstrumentApplePayPassthroughValue) => onPaymentInstrumentApplePayPassthrough(
                paymentInstrumentApplePayPassthroughValue),
            _ when TryGetPaymentInstrumentGooglePayPassthrough(
                out var paymentInstrumentGooglePayPassthroughValue) => onPaymentInstrumentGooglePayPassthrough(
                paymentInstrumentGooglePayPassthroughValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PaymentInstrumentsRequest)} holds no value.")
        };

    public void Match(Action<PaymentInstrumentCard1> onPaymentInstrumentCard1,
        Action<PaymentInstrumentCardEnableAccountUpdater> onPaymentInstrumentCardEnableAccountUpdater,
        Action<PaymentInstrumentCardEnableNetworkTokens> onPaymentInstrumentCardEnableNetworkTokens,
        Action<PaymentInstrumentBankAccount> onPaymentInstrumentBankAccount,
        Action<PaymentInstrumentPlaidBankAccount> onPaymentInstrumentPlaidBankAccount,
        Action<PaymentInstrumentCanadianBankAccount> onPaymentInstrumentCanadianBankAccount,
        Action<PaymentInstrumentTokenCard> onPaymentInstrumentTokenCard,
        Action<PaymentInstrumentTokenEnableAccountUpdater> onPaymentInstrumentTokenEnableAccountUpdater,
        Action<PaymentInstrumentTokenBankAccount> onPaymentInstrumentTokenBankAccount,
        Action<PaymentInstrumentTokenEnableNetworkTokens> onPaymentInstrumentTokenEnableNetworkTokens,
        Action<PaymentInstrumentApplePay> onPaymentInstrumentApplePay,
        Action<PaymentInstrumentGooglePay> onPaymentInstrumentGooglePay,
        Action<PaymentInstrumentApplePayPassthrough> onPaymentInstrumentApplePayPassthrough,
        Action<PaymentInstrumentGooglePayPassthrough> onPaymentInstrumentGooglePayPassthrough,
        Action<JsonElement> otherwise)
    {
        if (TryGetPaymentInstrumentCard1(out var paymentInstrumentCard1Value)) onPaymentInstrumentCard1(
            paymentInstrumentCard1Value);
        else if (TryGetPaymentInstrumentCardEnableAccountUpdater(
            out var paymentInstrumentCardEnableAccountUpdaterValue)) onPaymentInstrumentCardEnableAccountUpdater(
            paymentInstrumentCardEnableAccountUpdaterValue);
        else if (TryGetPaymentInstrumentCardEnableNetworkTokens(
            out var paymentInstrumentCardEnableNetworkTokensValue)) onPaymentInstrumentCardEnableNetworkTokens(
            paymentInstrumentCardEnableNetworkTokensValue);
        else if (TryGetPaymentInstrumentBankAccount(
            out var paymentInstrumentBankAccountValue)) onPaymentInstrumentBankAccount(
            paymentInstrumentBankAccountValue);
        else if (TryGetPaymentInstrumentPlaidBankAccount(
            out var paymentInstrumentPlaidBankAccountValue)) onPaymentInstrumentPlaidBankAccount(
            paymentInstrumentPlaidBankAccountValue);
        else if (TryGetPaymentInstrumentCanadianBankAccount(
            out var paymentInstrumentCanadianBankAccountValue)) onPaymentInstrumentCanadianBankAccount(
            paymentInstrumentCanadianBankAccountValue);
        else if (TryGetPaymentInstrumentTokenCard(
            out var paymentInstrumentTokenCardValue)) onPaymentInstrumentTokenCard(paymentInstrumentTokenCardValue);
        else if (TryGetPaymentInstrumentTokenEnableAccountUpdater(
            out var paymentInstrumentTokenEnableAccountUpdaterValue)) onPaymentInstrumentTokenEnableAccountUpdater(
            paymentInstrumentTokenEnableAccountUpdaterValue);
        else if (TryGetPaymentInstrumentTokenBankAccount(
            out var paymentInstrumentTokenBankAccountValue)) onPaymentInstrumentTokenBankAccount(
            paymentInstrumentTokenBankAccountValue);
        else if (TryGetPaymentInstrumentTokenEnableNetworkTokens(
            out var paymentInstrumentTokenEnableNetworkTokensValue)) onPaymentInstrumentTokenEnableNetworkTokens(
            paymentInstrumentTokenEnableNetworkTokensValue);
        else if (TryGetPaymentInstrumentApplePay(out var paymentInstrumentApplePayValue)) onPaymentInstrumentApplePay(
            paymentInstrumentApplePayValue);
        else if (TryGetPaymentInstrumentGooglePay(
            out var paymentInstrumentGooglePayValue)) onPaymentInstrumentGooglePay(paymentInstrumentGooglePayValue);
        else if (TryGetPaymentInstrumentApplePayPassthrough(
            out var paymentInstrumentApplePayPassthroughValue)) onPaymentInstrumentApplePayPassthrough(
            paymentInstrumentApplePayPassthroughValue);
        else if (TryGetPaymentInstrumentGooglePayPassthrough(
            out var paymentInstrumentGooglePayPassthroughValue)) onPaymentInstrumentGooglePayPassthrough(
            paymentInstrumentGooglePayPassthroughValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PaymentInstrumentsRequest)} holds no value.");
    }
}

file sealed class PaymentInstrumentsRequestConverter : JsonConverter<PaymentInstrumentsRequest>
{
    public override PaymentInstrumentsRequest Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<PaymentInstrumentCard1>(root, options, out var paymentInstrumentCard1Value))
        {
            return PaymentInstrumentsRequest.PaymentInstrumentCard1(paymentInstrumentCard1Value);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentCardEnableAccountUpdater>(
            root,
            options,
            out var paymentInstrumentCardEnableAccountUpdaterValue))
        {
            return PaymentInstrumentsRequest.PaymentInstrumentCardEnableAccountUpdater(
                paymentInstrumentCardEnableAccountUpdaterValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentCardEnableNetworkTokens>(
            root,
            options,
            out var paymentInstrumentCardEnableNetworkTokensValue))
        {
            return PaymentInstrumentsRequest.PaymentInstrumentCardEnableNetworkTokens(
                paymentInstrumentCardEnableNetworkTokensValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentBankAccount>(
            root,
            options,
            out var paymentInstrumentBankAccountValue))
        {
            return PaymentInstrumentsRequest.PaymentInstrumentBankAccount(paymentInstrumentBankAccountValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentPlaidBankAccount>(
            root,
            options,
            out var paymentInstrumentPlaidBankAccountValue))
        {
            return PaymentInstrumentsRequest.PaymentInstrumentPlaidBankAccount(paymentInstrumentPlaidBankAccountValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentCanadianBankAccount>(
            root,
            options,
            out var paymentInstrumentCanadianBankAccountValue))
        {
            return PaymentInstrumentsRequest.PaymentInstrumentCanadianBankAccount(
                paymentInstrumentCanadianBankAccountValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentTokenCard>(
            root,
            options,
            out var paymentInstrumentTokenCardValue))
        {
            return PaymentInstrumentsRequest.PaymentInstrumentTokenCard(paymentInstrumentTokenCardValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentTokenEnableAccountUpdater>(
            root,
            options,
            out var paymentInstrumentTokenEnableAccountUpdaterValue))
        {
            return PaymentInstrumentsRequest.PaymentInstrumentTokenEnableAccountUpdater(
                paymentInstrumentTokenEnableAccountUpdaterValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentTokenBankAccount>(
            root,
            options,
            out var paymentInstrumentTokenBankAccountValue))
        {
            return PaymentInstrumentsRequest.PaymentInstrumentTokenBankAccount(paymentInstrumentTokenBankAccountValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentTokenEnableNetworkTokens>(
            root,
            options,
            out var paymentInstrumentTokenEnableNetworkTokensValue))
        {
            return PaymentInstrumentsRequest.PaymentInstrumentTokenEnableNetworkTokens(
                paymentInstrumentTokenEnableNetworkTokensValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentApplePay>(
            root,
            options,
            out var paymentInstrumentApplePayValue))
        {
            return PaymentInstrumentsRequest.PaymentInstrumentApplePay(paymentInstrumentApplePayValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentGooglePay>(
            root,
            options,
            out var paymentInstrumentGooglePayValue))
        {
            return PaymentInstrumentsRequest.PaymentInstrumentGooglePay(paymentInstrumentGooglePayValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentApplePayPassthrough>(
            root,
            options,
            out var paymentInstrumentApplePayPassthroughValue))
        {
            return PaymentInstrumentsRequest.PaymentInstrumentApplePayPassthrough(
                paymentInstrumentApplePayPassthroughValue);
        }
        if (JsonSerializer.TryDeserialize<PaymentInstrumentGooglePayPassthrough>(
            root,
            options,
            out var paymentInstrumentGooglePayPassthroughValue))
        {
            return PaymentInstrumentsRequest.PaymentInstrumentGooglePayPassthrough(
                paymentInstrumentGooglePayPassthroughValue);
        }
        return PaymentInstrumentsRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, PaymentInstrumentsRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetPaymentInstrumentCard1(out var paymentInstrumentCard1Value))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentCard1Value, options);
        }
        else if (value.TryGetPaymentInstrumentCardEnableAccountUpdater(
            out var paymentInstrumentCardEnableAccountUpdaterValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentCardEnableAccountUpdaterValue, options);
        }
        else if (value.TryGetPaymentInstrumentCardEnableNetworkTokens(
            out var paymentInstrumentCardEnableNetworkTokensValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentCardEnableNetworkTokensValue, options);
        }
        else if (value.TryGetPaymentInstrumentBankAccount(out var paymentInstrumentBankAccountValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentBankAccountValue, options);
        }
        else if (value.TryGetPaymentInstrumentPlaidBankAccount(out var paymentInstrumentPlaidBankAccountValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentPlaidBankAccountValue, options);
        }
        else if (value.TryGetPaymentInstrumentCanadianBankAccount(out var paymentInstrumentCanadianBankAccountValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentCanadianBankAccountValue, options);
        }
        else if (value.TryGetPaymentInstrumentTokenCard(out var paymentInstrumentTokenCardValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentTokenCardValue, options);
        }
        else if (value.TryGetPaymentInstrumentTokenEnableAccountUpdater(
            out var paymentInstrumentTokenEnableAccountUpdaterValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentTokenEnableAccountUpdaterValue, options);
        }
        else if (value.TryGetPaymentInstrumentTokenBankAccount(out var paymentInstrumentTokenBankAccountValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentTokenBankAccountValue, options);
        }
        else if (value.TryGetPaymentInstrumentTokenEnableNetworkTokens(
            out var paymentInstrumentTokenEnableNetworkTokensValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentTokenEnableNetworkTokensValue, options);
        }
        else if (value.TryGetPaymentInstrumentApplePay(out var paymentInstrumentApplePayValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentApplePayValue, options);
        }
        else if (value.TryGetPaymentInstrumentGooglePay(out var paymentInstrumentGooglePayValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentGooglePayValue, options);
        }
        else if (value.TryGetPaymentInstrumentApplePayPassthrough(out var paymentInstrumentApplePayPassthroughValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentApplePayPassthroughValue, options);
        }
        else if (value.TryGetPaymentInstrumentGooglePayPassthrough(out var paymentInstrumentGooglePayPassthroughValue))
        {
            JsonSerializer.Serialize(writer, paymentInstrumentGooglePayPassthroughValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PaymentInstrumentsRequest)} contains no valid value to serialize.");
        }
    }
}
