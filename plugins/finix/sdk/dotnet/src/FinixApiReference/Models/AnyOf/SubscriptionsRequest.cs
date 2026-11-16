using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(SubscriptionsRequestConverter))]
public record SubscriptionsRequest
{
    private readonly Optional<SubscriptionMinimalFields> _subscriptionMinimalFieldsValue;

    private readonly Optional<SubscriptionAllFields> _subscriptionAllFieldsValue;

    private readonly Optional<SubscriptionBillingCycleDay> _subscriptionBillingCycleDayValue;

    private readonly Optional<SubscriptionDiscountPhase> _subscriptionDiscountPhaseValue;

    private readonly Optional<SubscriptionFixedLength> _subscriptionFixedLengthValue;

    private readonly Optional<SubscriptionFixedLengthEndDate> _subscriptionFixedLengthEndDateValue;

    private readonly Optional<SubscriptionFutureStartDate> _subscriptionFutureStartDateValue;

    private readonly Optional<SubscriptionTrialPeriod> _subscriptionTrialPeriodValue;

    private readonly Optional<SubscriptionSubscriptionPlanMinimalFields> _subscriptionSubscriptionPlanMinimalFieldsValue;

    private readonly Optional<SubscriptionSubscriptionPlanAllFields> _subscriptionSubscriptionPlanAllFieldsValue;

    private readonly Optional<SubscriptionSubscriptionPlanFixedLength> _subscriptionSubscriptionPlanFixedLengthValue;

    private readonly Optional<SubscriptionSubscriptionPlanFixedLengthEndDate> _subscriptionSubscriptionPlanFixedLengthEndDateValue;

    private readonly Optional<SubscriptionSubscriptionPlanFutureStartDate> _subscriptionSubscriptionPlanFutureStartDateValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SubscriptionsRequest(Optional<SubscriptionMinimalFields> subscriptionMinimalFieldsValue,
        Optional<SubscriptionAllFields> subscriptionAllFieldsValue,
        Optional<SubscriptionBillingCycleDay> subscriptionBillingCycleDayValue,
        Optional<SubscriptionDiscountPhase> subscriptionDiscountPhaseValue,
        Optional<SubscriptionFixedLength> subscriptionFixedLengthValue,
        Optional<SubscriptionFixedLengthEndDate> subscriptionFixedLengthEndDateValue,
        Optional<SubscriptionFutureStartDate> subscriptionFutureStartDateValue,
        Optional<SubscriptionTrialPeriod> subscriptionTrialPeriodValue,
        Optional<SubscriptionSubscriptionPlanMinimalFields> subscriptionSubscriptionPlanMinimalFieldsValue,
        Optional<SubscriptionSubscriptionPlanAllFields> subscriptionSubscriptionPlanAllFieldsValue,
        Optional<SubscriptionSubscriptionPlanFixedLength> subscriptionSubscriptionPlanFixedLengthValue,
        Optional<SubscriptionSubscriptionPlanFixedLengthEndDate> subscriptionSubscriptionPlanFixedLengthEndDateValue,
        Optional<SubscriptionSubscriptionPlanFutureStartDate> subscriptionSubscriptionPlanFutureStartDateValue,
        Optional<UnknownArm> unknownValue)
    {
        _subscriptionMinimalFieldsValue = subscriptionMinimalFieldsValue;
        _subscriptionAllFieldsValue = subscriptionAllFieldsValue;
        _subscriptionBillingCycleDayValue = subscriptionBillingCycleDayValue;
        _subscriptionDiscountPhaseValue = subscriptionDiscountPhaseValue;
        _subscriptionFixedLengthValue = subscriptionFixedLengthValue;
        _subscriptionFixedLengthEndDateValue = subscriptionFixedLengthEndDateValue;
        _subscriptionFutureStartDateValue = subscriptionFutureStartDateValue;
        _subscriptionTrialPeriodValue = subscriptionTrialPeriodValue;
        _subscriptionSubscriptionPlanMinimalFieldsValue = subscriptionSubscriptionPlanMinimalFieldsValue;
        _subscriptionSubscriptionPlanAllFieldsValue = subscriptionSubscriptionPlanAllFieldsValue;
        _subscriptionSubscriptionPlanFixedLengthValue = subscriptionSubscriptionPlanFixedLengthValue;
        _subscriptionSubscriptionPlanFixedLengthEndDateValue = subscriptionSubscriptionPlanFixedLengthEndDateValue;
        _subscriptionSubscriptionPlanFutureStartDateValue = subscriptionSubscriptionPlanFutureStartDateValue;
        _unknownValue = unknownValue;
    }

    public static SubscriptionsRequest SubscriptionMinimalFields(SubscriptionMinimalFields value) =>
        new(
            Optional<SubscriptionMinimalFields>.Some(value),
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

    public static SubscriptionsRequest SubscriptionAllFields(SubscriptionAllFields value) =>
        new(
            default,
            Optional<SubscriptionAllFields>.Some(value),
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

    public static SubscriptionsRequest SubscriptionBillingCycleDay(SubscriptionBillingCycleDay value) =>
        new(
            default,
            default,
            Optional<SubscriptionBillingCycleDay>.Some(value),
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

    public static SubscriptionsRequest SubscriptionDiscountPhase(SubscriptionDiscountPhase value) =>
        new(
            default,
            default,
            default,
            Optional<SubscriptionDiscountPhase>.Some(value),
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

    public static SubscriptionsRequest SubscriptionFixedLength(SubscriptionFixedLength value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<SubscriptionFixedLength>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static SubscriptionsRequest SubscriptionFixedLengthEndDate(SubscriptionFixedLengthEndDate value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<SubscriptionFixedLengthEndDate>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static SubscriptionsRequest SubscriptionFutureStartDate(SubscriptionFutureStartDate value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<SubscriptionFutureStartDate>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static SubscriptionsRequest SubscriptionTrialPeriod(SubscriptionTrialPeriod value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<SubscriptionTrialPeriod>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    public static SubscriptionsRequest SubscriptionSubscriptionPlanMinimalFields(SubscriptionSubscriptionPlanMinimalFields value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<SubscriptionSubscriptionPlanMinimalFields>.Some(value),
            default,
            default,
            default,
            default,
            default);

    public static SubscriptionsRequest SubscriptionSubscriptionPlanAllFields(SubscriptionSubscriptionPlanAllFields value) =>
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
            Optional<SubscriptionSubscriptionPlanAllFields>.Some(value),
            default,
            default,
            default,
            default);

    public static SubscriptionsRequest SubscriptionSubscriptionPlanFixedLength(SubscriptionSubscriptionPlanFixedLength value) =>
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
            Optional<SubscriptionSubscriptionPlanFixedLength>.Some(value),
            default,
            default,
            default);

    public static SubscriptionsRequest SubscriptionSubscriptionPlanFixedLengthEndDate(SubscriptionSubscriptionPlanFixedLengthEndDate value) =>
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
            Optional<SubscriptionSubscriptionPlanFixedLengthEndDate>.Some(value),
            default,
            default);

    public static SubscriptionsRequest SubscriptionSubscriptionPlanFutureStartDate(SubscriptionSubscriptionPlanFutureStartDate value) =>
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
            Optional<SubscriptionSubscriptionPlanFutureStartDate>.Some(value),
            default);

    internal static SubscriptionsRequest Unknown(JsonElement value) =>
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
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSubscriptionMinimalFields([NotNullWhen(true)] out SubscriptionMinimalFields? value) =>
        _subscriptionMinimalFieldsValue.TryGetValue(out value);

    public bool TryGetSubscriptionAllFields([NotNullWhen(true)] out SubscriptionAllFields? value) =>
        _subscriptionAllFieldsValue.TryGetValue(out value);

    public bool TryGetSubscriptionBillingCycleDay([NotNullWhen(true)] out SubscriptionBillingCycleDay? value) =>
        _subscriptionBillingCycleDayValue.TryGetValue(out value);

    public bool TryGetSubscriptionDiscountPhase([NotNullWhen(true)] out SubscriptionDiscountPhase? value) =>
        _subscriptionDiscountPhaseValue.TryGetValue(out value);

    public bool TryGetSubscriptionFixedLength([NotNullWhen(true)] out SubscriptionFixedLength? value) =>
        _subscriptionFixedLengthValue.TryGetValue(out value);

    public bool TryGetSubscriptionFixedLengthEndDate([NotNullWhen(true)] out SubscriptionFixedLengthEndDate? value) =>
        _subscriptionFixedLengthEndDateValue.TryGetValue(out value);

    public bool TryGetSubscriptionFutureStartDate([NotNullWhen(true)] out SubscriptionFutureStartDate? value) =>
        _subscriptionFutureStartDateValue.TryGetValue(out value);

    public bool TryGetSubscriptionTrialPeriod([NotNullWhen(true)] out SubscriptionTrialPeriod? value) =>
        _subscriptionTrialPeriodValue.TryGetValue(out value);

    public bool TryGetSubscriptionSubscriptionPlanMinimalFields([NotNullWhen(true)] out SubscriptionSubscriptionPlanMinimalFields? value) =>
        _subscriptionSubscriptionPlanMinimalFieldsValue.TryGetValue(out value);

    public bool TryGetSubscriptionSubscriptionPlanAllFields([NotNullWhen(true)] out SubscriptionSubscriptionPlanAllFields? value) =>
        _subscriptionSubscriptionPlanAllFieldsValue.TryGetValue(out value);

    public bool TryGetSubscriptionSubscriptionPlanFixedLength([NotNullWhen(true)] out SubscriptionSubscriptionPlanFixedLength? value) =>
        _subscriptionSubscriptionPlanFixedLengthValue.TryGetValue(out value);

    public bool TryGetSubscriptionSubscriptionPlanFixedLengthEndDate([NotNullWhen(true)] out SubscriptionSubscriptionPlanFixedLengthEndDate? value) =>
        _subscriptionSubscriptionPlanFixedLengthEndDateValue.TryGetValue(out value);

    public bool TryGetSubscriptionSubscriptionPlanFutureStartDate([NotNullWhen(true)] out SubscriptionSubscriptionPlanFutureStartDate? value) =>
        _subscriptionSubscriptionPlanFutureStartDateValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SubscriptionsRequest(SubscriptionMinimalFields value) =>
        SubscriptionMinimalFields(value);

    public static implicit operator SubscriptionsRequest(SubscriptionAllFields value) => SubscriptionAllFields(value);

    public static implicit operator SubscriptionsRequest(SubscriptionBillingCycleDay value) =>
        SubscriptionBillingCycleDay(value);

    public static implicit operator SubscriptionsRequest(SubscriptionDiscountPhase value) =>
        SubscriptionDiscountPhase(value);

    public static implicit operator SubscriptionsRequest(SubscriptionFixedLength value) =>
        SubscriptionFixedLength(value);

    public static implicit operator SubscriptionsRequest(SubscriptionFixedLengthEndDate value) =>
        SubscriptionFixedLengthEndDate(value);

    public static implicit operator SubscriptionsRequest(SubscriptionFutureStartDate value) =>
        SubscriptionFutureStartDate(value);

    public static implicit operator SubscriptionsRequest(SubscriptionTrialPeriod value) =>
        SubscriptionTrialPeriod(value);

    public static implicit operator SubscriptionsRequest(SubscriptionSubscriptionPlanMinimalFields value) =>
        SubscriptionSubscriptionPlanMinimalFields(value);

    public static implicit operator SubscriptionsRequest(SubscriptionSubscriptionPlanAllFields value) =>
        SubscriptionSubscriptionPlanAllFields(value);

    public static implicit operator SubscriptionsRequest(SubscriptionSubscriptionPlanFixedLength value) =>
        SubscriptionSubscriptionPlanFixedLength(value);

    public static implicit operator SubscriptionsRequest(SubscriptionSubscriptionPlanFixedLengthEndDate value) =>
        SubscriptionSubscriptionPlanFixedLengthEndDate(value);

    public static implicit operator SubscriptionsRequest(SubscriptionSubscriptionPlanFutureStartDate value) =>
        SubscriptionSubscriptionPlanFutureStartDate(value);

    public TResult Match<TResult>(Func<SubscriptionMinimalFields, TResult> onSubscriptionMinimalFields,
        Func<SubscriptionAllFields, TResult> onSubscriptionAllFields,
        Func<SubscriptionBillingCycleDay, TResult> onSubscriptionBillingCycleDay,
        Func<SubscriptionDiscountPhase, TResult> onSubscriptionDiscountPhase,
        Func<SubscriptionFixedLength, TResult> onSubscriptionFixedLength,
        Func<SubscriptionFixedLengthEndDate, TResult> onSubscriptionFixedLengthEndDate,
        Func<SubscriptionFutureStartDate, TResult> onSubscriptionFutureStartDate,
        Func<SubscriptionTrialPeriod, TResult> onSubscriptionTrialPeriod,
        Func<SubscriptionSubscriptionPlanMinimalFields, TResult> onSubscriptionSubscriptionPlanMinimalFields,
        Func<SubscriptionSubscriptionPlanAllFields, TResult> onSubscriptionSubscriptionPlanAllFields,
        Func<SubscriptionSubscriptionPlanFixedLength, TResult> onSubscriptionSubscriptionPlanFixedLength,
        Func<SubscriptionSubscriptionPlanFixedLengthEndDate, TResult> onSubscriptionSubscriptionPlanFixedLengthEndDate,
        Func<SubscriptionSubscriptionPlanFutureStartDate, TResult> onSubscriptionSubscriptionPlanFutureStartDate,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSubscriptionMinimalFields(
                out var subscriptionMinimalFieldsValue) => onSubscriptionMinimalFields(subscriptionMinimalFieldsValue),
            _ when TryGetSubscriptionAllFields(out var subscriptionAllFieldsValue) => onSubscriptionAllFields(
                subscriptionAllFieldsValue),
            _ when TryGetSubscriptionBillingCycleDay(
                out var subscriptionBillingCycleDayValue) => onSubscriptionBillingCycleDay(
                subscriptionBillingCycleDayValue),
            _ when TryGetSubscriptionDiscountPhase(
                out var subscriptionDiscountPhaseValue) => onSubscriptionDiscountPhase(subscriptionDiscountPhaseValue),
            _ when TryGetSubscriptionFixedLength(out var subscriptionFixedLengthValue) => onSubscriptionFixedLength(
                subscriptionFixedLengthValue),
            _ when TryGetSubscriptionFixedLengthEndDate(
                out var subscriptionFixedLengthEndDateValue) => onSubscriptionFixedLengthEndDate(
                subscriptionFixedLengthEndDateValue),
            _ when TryGetSubscriptionFutureStartDate(
                out var subscriptionFutureStartDateValue) => onSubscriptionFutureStartDate(
                subscriptionFutureStartDateValue),
            _ when TryGetSubscriptionTrialPeriod(out var subscriptionTrialPeriodValue) => onSubscriptionTrialPeriod(
                subscriptionTrialPeriodValue),
            _ when TryGetSubscriptionSubscriptionPlanMinimalFields(
                out var subscriptionSubscriptionPlanMinimalFieldsValue) => onSubscriptionSubscriptionPlanMinimalFields(
                subscriptionSubscriptionPlanMinimalFieldsValue),
            _ when TryGetSubscriptionSubscriptionPlanAllFields(
                out var subscriptionSubscriptionPlanAllFieldsValue) => onSubscriptionSubscriptionPlanAllFields(
                subscriptionSubscriptionPlanAllFieldsValue),
            _ when TryGetSubscriptionSubscriptionPlanFixedLength(
                out var subscriptionSubscriptionPlanFixedLengthValue) => onSubscriptionSubscriptionPlanFixedLength(
                subscriptionSubscriptionPlanFixedLengthValue),
            _ when TryGetSubscriptionSubscriptionPlanFixedLengthEndDate(
                out var subscriptionSubscriptionPlanFixedLengthEndDateValue) => onSubscriptionSubscriptionPlanFixedLengthEndDate(
                subscriptionSubscriptionPlanFixedLengthEndDateValue),
            _ when TryGetSubscriptionSubscriptionPlanFutureStartDate(
                out var subscriptionSubscriptionPlanFutureStartDateValue) => onSubscriptionSubscriptionPlanFutureStartDate(
                subscriptionSubscriptionPlanFutureStartDateValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SubscriptionsRequest)} holds no value.")
        };

    public void Match(Action<SubscriptionMinimalFields> onSubscriptionMinimalFields,
        Action<SubscriptionAllFields> onSubscriptionAllFields,
        Action<SubscriptionBillingCycleDay> onSubscriptionBillingCycleDay,
        Action<SubscriptionDiscountPhase> onSubscriptionDiscountPhase,
        Action<SubscriptionFixedLength> onSubscriptionFixedLength,
        Action<SubscriptionFixedLengthEndDate> onSubscriptionFixedLengthEndDate,
        Action<SubscriptionFutureStartDate> onSubscriptionFutureStartDate,
        Action<SubscriptionTrialPeriod> onSubscriptionTrialPeriod,
        Action<SubscriptionSubscriptionPlanMinimalFields> onSubscriptionSubscriptionPlanMinimalFields,
        Action<SubscriptionSubscriptionPlanAllFields> onSubscriptionSubscriptionPlanAllFields,
        Action<SubscriptionSubscriptionPlanFixedLength> onSubscriptionSubscriptionPlanFixedLength,
        Action<SubscriptionSubscriptionPlanFixedLengthEndDate> onSubscriptionSubscriptionPlanFixedLengthEndDate,
        Action<SubscriptionSubscriptionPlanFutureStartDate> onSubscriptionSubscriptionPlanFutureStartDate,
        Action<JsonElement> otherwise)
    {
        if (TryGetSubscriptionMinimalFields(out var subscriptionMinimalFieldsValue)) onSubscriptionMinimalFields(
            subscriptionMinimalFieldsValue);
        else if (TryGetSubscriptionAllFields(out var subscriptionAllFieldsValue)) onSubscriptionAllFields(
            subscriptionAllFieldsValue);
        else if (TryGetSubscriptionBillingCycleDay(
            out var subscriptionBillingCycleDayValue)) onSubscriptionBillingCycleDay(subscriptionBillingCycleDayValue);
        else if (TryGetSubscriptionDiscountPhase(out var subscriptionDiscountPhaseValue)) onSubscriptionDiscountPhase(
            subscriptionDiscountPhaseValue);
        else if (TryGetSubscriptionFixedLength(out var subscriptionFixedLengthValue)) onSubscriptionFixedLength(
            subscriptionFixedLengthValue);
        else if (TryGetSubscriptionFixedLengthEndDate(
            out var subscriptionFixedLengthEndDateValue)) onSubscriptionFixedLengthEndDate(
            subscriptionFixedLengthEndDateValue);
        else if (TryGetSubscriptionFutureStartDate(
            out var subscriptionFutureStartDateValue)) onSubscriptionFutureStartDate(subscriptionFutureStartDateValue);
        else if (TryGetSubscriptionTrialPeriod(out var subscriptionTrialPeriodValue)) onSubscriptionTrialPeriod(
            subscriptionTrialPeriodValue);
        else if (TryGetSubscriptionSubscriptionPlanMinimalFields(
            out var subscriptionSubscriptionPlanMinimalFieldsValue)) onSubscriptionSubscriptionPlanMinimalFields(
            subscriptionSubscriptionPlanMinimalFieldsValue);
        else if (TryGetSubscriptionSubscriptionPlanAllFields(
            out var subscriptionSubscriptionPlanAllFieldsValue)) onSubscriptionSubscriptionPlanAllFields(
            subscriptionSubscriptionPlanAllFieldsValue);
        else if (TryGetSubscriptionSubscriptionPlanFixedLength(
            out var subscriptionSubscriptionPlanFixedLengthValue)) onSubscriptionSubscriptionPlanFixedLength(
            subscriptionSubscriptionPlanFixedLengthValue);
        else if (TryGetSubscriptionSubscriptionPlanFixedLengthEndDate(
            out var subscriptionSubscriptionPlanFixedLengthEndDateValue)) onSubscriptionSubscriptionPlanFixedLengthEndDate(
            subscriptionSubscriptionPlanFixedLengthEndDateValue);
        else if (TryGetSubscriptionSubscriptionPlanFutureStartDate(
            out var subscriptionSubscriptionPlanFutureStartDateValue)) onSubscriptionSubscriptionPlanFutureStartDate(
            subscriptionSubscriptionPlanFutureStartDateValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SubscriptionsRequest)} holds no value.");
    }
}

file sealed class SubscriptionsRequestConverter : JsonConverter<SubscriptionsRequest>
{
    public override SubscriptionsRequest Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SubscriptionMinimalFields>(
            root,
            options,
            out var subscriptionMinimalFieldsValue))
        {
            return SubscriptionsRequest.SubscriptionMinimalFields(subscriptionMinimalFieldsValue);
        }
        if (JsonSerializer.TryDeserialize<SubscriptionAllFields>(root, options, out var subscriptionAllFieldsValue))
        {
            return SubscriptionsRequest.SubscriptionAllFields(subscriptionAllFieldsValue);
        }
        if (JsonSerializer.TryDeserialize<SubscriptionBillingCycleDay>(
            root,
            options,
            out var subscriptionBillingCycleDayValue))
        {
            return SubscriptionsRequest.SubscriptionBillingCycleDay(subscriptionBillingCycleDayValue);
        }
        if (JsonSerializer.TryDeserialize<SubscriptionDiscountPhase>(
            root,
            options,
            out var subscriptionDiscountPhaseValue))
        {
            return SubscriptionsRequest.SubscriptionDiscountPhase(subscriptionDiscountPhaseValue);
        }
        if (JsonSerializer.TryDeserialize<SubscriptionFixedLength>(root, options, out var subscriptionFixedLengthValue))
        {
            return SubscriptionsRequest.SubscriptionFixedLength(subscriptionFixedLengthValue);
        }
        if (JsonSerializer.TryDeserialize<SubscriptionFixedLengthEndDate>(
            root,
            options,
            out var subscriptionFixedLengthEndDateValue))
        {
            return SubscriptionsRequest.SubscriptionFixedLengthEndDate(subscriptionFixedLengthEndDateValue);
        }
        if (JsonSerializer.TryDeserialize<SubscriptionFutureStartDate>(
            root,
            options,
            out var subscriptionFutureStartDateValue))
        {
            return SubscriptionsRequest.SubscriptionFutureStartDate(subscriptionFutureStartDateValue);
        }
        if (JsonSerializer.TryDeserialize<SubscriptionTrialPeriod>(root, options, out var subscriptionTrialPeriodValue))
        {
            return SubscriptionsRequest.SubscriptionTrialPeriod(subscriptionTrialPeriodValue);
        }
        if (JsonSerializer.TryDeserialize<SubscriptionSubscriptionPlanMinimalFields>(
            root,
            options,
            out var subscriptionSubscriptionPlanMinimalFieldsValue))
        {
            return SubscriptionsRequest.SubscriptionSubscriptionPlanMinimalFields(
                subscriptionSubscriptionPlanMinimalFieldsValue);
        }
        if (JsonSerializer.TryDeserialize<SubscriptionSubscriptionPlanAllFields>(
            root,
            options,
            out var subscriptionSubscriptionPlanAllFieldsValue))
        {
            return SubscriptionsRequest.SubscriptionSubscriptionPlanAllFields(
                subscriptionSubscriptionPlanAllFieldsValue);
        }
        if (JsonSerializer.TryDeserialize<SubscriptionSubscriptionPlanFixedLength>(
            root,
            options,
            out var subscriptionSubscriptionPlanFixedLengthValue))
        {
            return SubscriptionsRequest.SubscriptionSubscriptionPlanFixedLength(
                subscriptionSubscriptionPlanFixedLengthValue);
        }
        if (JsonSerializer.TryDeserialize<SubscriptionSubscriptionPlanFixedLengthEndDate>(
            root,
            options,
            out var subscriptionSubscriptionPlanFixedLengthEndDateValue))
        {
            return SubscriptionsRequest.SubscriptionSubscriptionPlanFixedLengthEndDate(
                subscriptionSubscriptionPlanFixedLengthEndDateValue);
        }
        if (JsonSerializer.TryDeserialize<SubscriptionSubscriptionPlanFutureStartDate>(
            root,
            options,
            out var subscriptionSubscriptionPlanFutureStartDateValue))
        {
            return SubscriptionsRequest.SubscriptionSubscriptionPlanFutureStartDate(
                subscriptionSubscriptionPlanFutureStartDateValue);
        }
        return SubscriptionsRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SubscriptionsRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetSubscriptionMinimalFields(out var subscriptionMinimalFieldsValue))
        {
            JsonSerializer.Serialize(writer, subscriptionMinimalFieldsValue, options);
        }
        else if (value.TryGetSubscriptionAllFields(out var subscriptionAllFieldsValue))
        {
            JsonSerializer.Serialize(writer, subscriptionAllFieldsValue, options);
        }
        else if (value.TryGetSubscriptionBillingCycleDay(out var subscriptionBillingCycleDayValue))
        {
            JsonSerializer.Serialize(writer, subscriptionBillingCycleDayValue, options);
        }
        else if (value.TryGetSubscriptionDiscountPhase(out var subscriptionDiscountPhaseValue))
        {
            JsonSerializer.Serialize(writer, subscriptionDiscountPhaseValue, options);
        }
        else if (value.TryGetSubscriptionFixedLength(out var subscriptionFixedLengthValue))
        {
            JsonSerializer.Serialize(writer, subscriptionFixedLengthValue, options);
        }
        else if (value.TryGetSubscriptionFixedLengthEndDate(out var subscriptionFixedLengthEndDateValue))
        {
            JsonSerializer.Serialize(writer, subscriptionFixedLengthEndDateValue, options);
        }
        else if (value.TryGetSubscriptionFutureStartDate(out var subscriptionFutureStartDateValue))
        {
            JsonSerializer.Serialize(writer, subscriptionFutureStartDateValue, options);
        }
        else if (value.TryGetSubscriptionTrialPeriod(out var subscriptionTrialPeriodValue))
        {
            JsonSerializer.Serialize(writer, subscriptionTrialPeriodValue, options);
        }
        else if (value.TryGetSubscriptionSubscriptionPlanMinimalFields(
            out var subscriptionSubscriptionPlanMinimalFieldsValue))
        {
            JsonSerializer.Serialize(writer, subscriptionSubscriptionPlanMinimalFieldsValue, options);
        }
        else if (value.TryGetSubscriptionSubscriptionPlanAllFields(out var subscriptionSubscriptionPlanAllFieldsValue))
        {
            JsonSerializer.Serialize(writer, subscriptionSubscriptionPlanAllFieldsValue, options);
        }
        else if (value.TryGetSubscriptionSubscriptionPlanFixedLength(
            out var subscriptionSubscriptionPlanFixedLengthValue))
        {
            JsonSerializer.Serialize(writer, subscriptionSubscriptionPlanFixedLengthValue, options);
        }
        else if (value.TryGetSubscriptionSubscriptionPlanFixedLengthEndDate(
            out var subscriptionSubscriptionPlanFixedLengthEndDateValue))
        {
            JsonSerializer.Serialize(writer, subscriptionSubscriptionPlanFixedLengthEndDateValue, options);
        }
        else if (value.TryGetSubscriptionSubscriptionPlanFutureStartDate(
            out var subscriptionSubscriptionPlanFutureStartDateValue))
        {
            JsonSerializer.Serialize(writer, subscriptionSubscriptionPlanFutureStartDateValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SubscriptionsRequest)} contains no valid value to serialize.");
        }
    }
}
