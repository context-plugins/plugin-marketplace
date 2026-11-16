using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(MerchantsRequestConverter))]
public record MerchantsRequest
{
    private readonly Optional<DisableProcessing> _disableProcessingValue;

    private readonly Optional<DisableSettlements> _disableSettlementsValue;

    private readonly Optional<EnableBuyerCharges> _enableBuyerChargesValue;

    private readonly Optional<EnableLevel23Processing> _enableLevel23ProcessingValue;

    private readonly Optional<EnableLoanRepayment> _enableLoanRepaymentValue;

    private readonly Optional<EnablePartialAuthorizations> _enablePartialAuthorizationsValue;

    private readonly Optional<EnableDisbursementsSameDayAchPushPull> _enableDisbursementsSameDayAchPushPullValue;

    private readonly Optional<EnableSettlementQueue> _enableSettlementQueueValue;

    private readonly Optional<TerminateMerchant> _terminateMerchantValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private MerchantsRequest(Optional<DisableProcessing> disableProcessingValue,
        Optional<DisableSettlements> disableSettlementsValue,
        Optional<EnableBuyerCharges> enableBuyerChargesValue,
        Optional<EnableLevel23Processing> enableLevel23ProcessingValue,
        Optional<EnableLoanRepayment> enableLoanRepaymentValue,
        Optional<EnablePartialAuthorizations> enablePartialAuthorizationsValue,
        Optional<EnableDisbursementsSameDayAchPushPull> enableDisbursementsSameDayAchPushPullValue,
        Optional<EnableSettlementQueue> enableSettlementQueueValue,
        Optional<TerminateMerchant> terminateMerchantValue,
        Optional<UnknownArm> unknownValue)
    {
        _disableProcessingValue = disableProcessingValue;
        _disableSettlementsValue = disableSettlementsValue;
        _enableBuyerChargesValue = enableBuyerChargesValue;
        _enableLevel23ProcessingValue = enableLevel23ProcessingValue;
        _enableLoanRepaymentValue = enableLoanRepaymentValue;
        _enablePartialAuthorizationsValue = enablePartialAuthorizationsValue;
        _enableDisbursementsSameDayAchPushPullValue = enableDisbursementsSameDayAchPushPullValue;
        _enableSettlementQueueValue = enableSettlementQueueValue;
        _terminateMerchantValue = terminateMerchantValue;
        _unknownValue = unknownValue;
    }

    public static MerchantsRequest DisableProcessing(DisableProcessing value) =>
        new(
            Optional<DisableProcessing>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static MerchantsRequest DisableSettlements(DisableSettlements value) =>
        new(
            default,
            Optional<DisableSettlements>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static MerchantsRequest EnableBuyerCharges(EnableBuyerCharges value) =>
        new(
            default,
            default,
            Optional<EnableBuyerCharges>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static MerchantsRequest EnableLevel23Processing(EnableLevel23Processing value) =>
        new(
            default,
            default,
            default,
            Optional<EnableLevel23Processing>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    public static MerchantsRequest EnableLoanRepayment(EnableLoanRepayment value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<EnableLoanRepayment>.Some(value),
            default,
            default,
            default,
            default,
            default);

    public static MerchantsRequest EnablePartialAuthorizations(EnablePartialAuthorizations value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<EnablePartialAuthorizations>.Some(value),
            default,
            default,
            default,
            default);

    public static MerchantsRequest EnableDisbursementsSameDayAchPushPull(EnableDisbursementsSameDayAchPushPull value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<EnableDisbursementsSameDayAchPushPull>.Some(value),
            default,
            default,
            default);

    public static MerchantsRequest EnableSettlementQueue(EnableSettlementQueue value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<EnableSettlementQueue>.Some(value),
            default,
            default);

    public static MerchantsRequest TerminateMerchant(TerminateMerchant value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TerminateMerchant>.Some(value),
            default);

    internal static MerchantsRequest Unknown(JsonElement value) =>
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
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDisableProcessing([NotNullWhen(true)] out DisableProcessing? value) =>
        _disableProcessingValue.TryGetValue(out value);

    public bool TryGetDisableSettlements([NotNullWhen(true)] out DisableSettlements? value) =>
        _disableSettlementsValue.TryGetValue(out value);

    public bool TryGetEnableBuyerCharges([NotNullWhen(true)] out EnableBuyerCharges? value) =>
        _enableBuyerChargesValue.TryGetValue(out value);

    public bool TryGetEnableLevel23Processing([NotNullWhen(true)] out EnableLevel23Processing? value) =>
        _enableLevel23ProcessingValue.TryGetValue(out value);

    public bool TryGetEnableLoanRepayment([NotNullWhen(true)] out EnableLoanRepayment? value) =>
        _enableLoanRepaymentValue.TryGetValue(out value);

    public bool TryGetEnablePartialAuthorizations([NotNullWhen(true)] out EnablePartialAuthorizations? value) =>
        _enablePartialAuthorizationsValue.TryGetValue(out value);

    public bool TryGetEnableDisbursementsSameDayAchPushPull([NotNullWhen(true)] out EnableDisbursementsSameDayAchPushPull? value) =>
        _enableDisbursementsSameDayAchPushPullValue.TryGetValue(out value);

    public bool TryGetEnableSettlementQueue([NotNullWhen(true)] out EnableSettlementQueue? value) =>
        _enableSettlementQueueValue.TryGetValue(out value);

    public bool TryGetTerminateMerchant([NotNullWhen(true)] out TerminateMerchant? value) =>
        _terminateMerchantValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator MerchantsRequest(DisableProcessing value) => DisableProcessing(value);

    public static implicit operator MerchantsRequest(DisableSettlements value) => DisableSettlements(value);

    public static implicit operator MerchantsRequest(EnableBuyerCharges value) => EnableBuyerCharges(value);

    public static implicit operator MerchantsRequest(EnableLevel23Processing value) => EnableLevel23Processing(value);

    public static implicit operator MerchantsRequest(EnableLoanRepayment value) => EnableLoanRepayment(value);

    public static implicit operator MerchantsRequest(EnablePartialAuthorizations value) =>
        EnablePartialAuthorizations(value);

    public static implicit operator MerchantsRequest(EnableDisbursementsSameDayAchPushPull value) =>
        EnableDisbursementsSameDayAchPushPull(value);

    public static implicit operator MerchantsRequest(EnableSettlementQueue value) => EnableSettlementQueue(value);

    public static implicit operator MerchantsRequest(TerminateMerchant value) => TerminateMerchant(value);

    public TResult Match<TResult>(Func<DisableProcessing, TResult> onDisableProcessing,
        Func<DisableSettlements, TResult> onDisableSettlements,
        Func<EnableBuyerCharges, TResult> onEnableBuyerCharges,
        Func<EnableLevel23Processing, TResult> onEnableLevel23Processing,
        Func<EnableLoanRepayment, TResult> onEnableLoanRepayment,
        Func<EnablePartialAuthorizations, TResult> onEnablePartialAuthorizations,
        Func<EnableDisbursementsSameDayAchPushPull, TResult> onEnableDisbursementsSameDayAchPushPull,
        Func<EnableSettlementQueue, TResult> onEnableSettlementQueue,
        Func<TerminateMerchant, TResult> onTerminateMerchant,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDisableProcessing(out var disableProcessingValue) => onDisableProcessing(
                disableProcessingValue),
            _ when TryGetDisableSettlements(out var disableSettlementsValue) => onDisableSettlements(
                disableSettlementsValue),
            _ when TryGetEnableBuyerCharges(out var enableBuyerChargesValue) => onEnableBuyerCharges(
                enableBuyerChargesValue),
            _ when TryGetEnableLevel23Processing(out var enableLevel23ProcessingValue) => onEnableLevel23Processing(
                enableLevel23ProcessingValue),
            _ when TryGetEnableLoanRepayment(out var enableLoanRepaymentValue) => onEnableLoanRepayment(
                enableLoanRepaymentValue),
            _ when TryGetEnablePartialAuthorizations(
                out var enablePartialAuthorizationsValue) => onEnablePartialAuthorizations(
                enablePartialAuthorizationsValue),
            _ when TryGetEnableDisbursementsSameDayAchPushPull(
                out var enableDisbursementsSameDayAchPushPullValue) => onEnableDisbursementsSameDayAchPushPull(
                enableDisbursementsSameDayAchPushPullValue),
            _ when TryGetEnableSettlementQueue(out var enableSettlementQueueValue) => onEnableSettlementQueue(
                enableSettlementQueueValue),
            _ when TryGetTerminateMerchant(out var terminateMerchantValue) => onTerminateMerchant(
                terminateMerchantValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(MerchantsRequest)} holds no value.")
        };

    public void Match(Action<DisableProcessing> onDisableProcessing,
        Action<DisableSettlements> onDisableSettlements,
        Action<EnableBuyerCharges> onEnableBuyerCharges,
        Action<EnableLevel23Processing> onEnableLevel23Processing,
        Action<EnableLoanRepayment> onEnableLoanRepayment,
        Action<EnablePartialAuthorizations> onEnablePartialAuthorizations,
        Action<EnableDisbursementsSameDayAchPushPull> onEnableDisbursementsSameDayAchPushPull,
        Action<EnableSettlementQueue> onEnableSettlementQueue,
        Action<TerminateMerchant> onTerminateMerchant,
        Action<JsonElement> otherwise)
    {
        if (TryGetDisableProcessing(out var disableProcessingValue)) onDisableProcessing(disableProcessingValue);
        else if (TryGetDisableSettlements(out var disableSettlementsValue)) onDisableSettlements(
            disableSettlementsValue);
        else if (TryGetEnableBuyerCharges(out var enableBuyerChargesValue)) onEnableBuyerCharges(
            enableBuyerChargesValue);
        else if (TryGetEnableLevel23Processing(out var enableLevel23ProcessingValue)) onEnableLevel23Processing(
            enableLevel23ProcessingValue);
        else if (TryGetEnableLoanRepayment(out var enableLoanRepaymentValue)) onEnableLoanRepayment(
            enableLoanRepaymentValue);
        else if (TryGetEnablePartialAuthorizations(
            out var enablePartialAuthorizationsValue)) onEnablePartialAuthorizations(enablePartialAuthorizationsValue);
        else if (TryGetEnableDisbursementsSameDayAchPushPull(
            out var enableDisbursementsSameDayAchPushPullValue)) onEnableDisbursementsSameDayAchPushPull(
            enableDisbursementsSameDayAchPushPullValue);
        else if (TryGetEnableSettlementQueue(out var enableSettlementQueueValue)) onEnableSettlementQueue(
            enableSettlementQueueValue);
        else if (TryGetTerminateMerchant(out var terminateMerchantValue)) onTerminateMerchant(terminateMerchantValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(MerchantsRequest)} holds no value.");
    }
}

file sealed class MerchantsRequestConverter : JsonConverter<MerchantsRequest>
{
    public override MerchantsRequest Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DisableProcessing>(root, options, out var disableProcessingValue))
        {
            return MerchantsRequest.DisableProcessing(disableProcessingValue);
        }
        if (JsonSerializer.TryDeserialize<DisableSettlements>(root, options, out var disableSettlementsValue))
        {
            return MerchantsRequest.DisableSettlements(disableSettlementsValue);
        }
        if (JsonSerializer.TryDeserialize<EnableBuyerCharges>(root, options, out var enableBuyerChargesValue))
        {
            return MerchantsRequest.EnableBuyerCharges(enableBuyerChargesValue);
        }
        if (JsonSerializer.TryDeserialize<EnableLevel23Processing>(root, options, out var enableLevel23ProcessingValue))
        {
            return MerchantsRequest.EnableLevel23Processing(enableLevel23ProcessingValue);
        }
        if (JsonSerializer.TryDeserialize<EnableLoanRepayment>(root, options, out var enableLoanRepaymentValue))
        {
            return MerchantsRequest.EnableLoanRepayment(enableLoanRepaymentValue);
        }
        if (JsonSerializer.TryDeserialize<EnablePartialAuthorizations>(
            root,
            options,
            out var enablePartialAuthorizationsValue))
        {
            return MerchantsRequest.EnablePartialAuthorizations(enablePartialAuthorizationsValue);
        }
        if (JsonSerializer.TryDeserialize<EnableDisbursementsSameDayAchPushPull>(
            root,
            options,
            out var enableDisbursementsSameDayAchPushPullValue))
        {
            return MerchantsRequest.EnableDisbursementsSameDayAchPushPull(enableDisbursementsSameDayAchPushPullValue);
        }
        if (JsonSerializer.TryDeserialize<EnableSettlementQueue>(root, options, out var enableSettlementQueueValue))
        {
            return MerchantsRequest.EnableSettlementQueue(enableSettlementQueueValue);
        }
        if (JsonSerializer.TryDeserialize<TerminateMerchant>(root, options, out var terminateMerchantValue))
        {
            return MerchantsRequest.TerminateMerchant(terminateMerchantValue);
        }
        return MerchantsRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, MerchantsRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetDisableProcessing(out var disableProcessingValue))
        {
            JsonSerializer.Serialize(writer, disableProcessingValue, options);
        }
        else if (value.TryGetDisableSettlements(out var disableSettlementsValue))
        {
            JsonSerializer.Serialize(writer, disableSettlementsValue, options);
        }
        else if (value.TryGetEnableBuyerCharges(out var enableBuyerChargesValue))
        {
            JsonSerializer.Serialize(writer, enableBuyerChargesValue, options);
        }
        else if (value.TryGetEnableLevel23Processing(out var enableLevel23ProcessingValue))
        {
            JsonSerializer.Serialize(writer, enableLevel23ProcessingValue, options);
        }
        else if (value.TryGetEnableLoanRepayment(out var enableLoanRepaymentValue))
        {
            JsonSerializer.Serialize(writer, enableLoanRepaymentValue, options);
        }
        else if (value.TryGetEnablePartialAuthorizations(out var enablePartialAuthorizationsValue))
        {
            JsonSerializer.Serialize(writer, enablePartialAuthorizationsValue, options);
        }
        else if (value.TryGetEnableDisbursementsSameDayAchPushPull(out var enableDisbursementsSameDayAchPushPullValue))
        {
            JsonSerializer.Serialize(writer, enableDisbursementsSameDayAchPushPullValue, options);
        }
        else if (value.TryGetEnableSettlementQueue(out var enableSettlementQueueValue))
        {
            JsonSerializer.Serialize(writer, enableSettlementQueueValue, options);
        }
        else if (value.TryGetTerminateMerchant(out var terminateMerchantValue))
        {
            JsonSerializer.Serialize(writer, terminateMerchantValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(MerchantsRequest)} contains no valid value to serialize.");
        }
    }
}
