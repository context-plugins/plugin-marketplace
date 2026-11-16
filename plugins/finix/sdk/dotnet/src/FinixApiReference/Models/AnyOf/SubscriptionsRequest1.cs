using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(SubscriptionsRequest1Converter))]
public record SubscriptionsRequest1
{
    private readonly Optional<UpdateSubscription> _updateSubscriptionValue;

    private readonly Optional<UpdateSubscriptionBillingCycleDay> _updateSubscriptionBillingCycleDayValue;

    private readonly Optional<UpdateSubscriptionNewSubscriptionPlan> _updateSubscriptionNewSubscriptionPlanValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SubscriptionsRequest1(Optional<UpdateSubscription> updateSubscriptionValue,
        Optional<UpdateSubscriptionBillingCycleDay> updateSubscriptionBillingCycleDayValue,
        Optional<UpdateSubscriptionNewSubscriptionPlan> updateSubscriptionNewSubscriptionPlanValue,
        Optional<UnknownArm> unknownValue)
    {
        _updateSubscriptionValue = updateSubscriptionValue;
        _updateSubscriptionBillingCycleDayValue = updateSubscriptionBillingCycleDayValue;
        _updateSubscriptionNewSubscriptionPlanValue = updateSubscriptionNewSubscriptionPlanValue;
        _unknownValue = unknownValue;
    }

    public static SubscriptionsRequest1 UpdateSubscription(UpdateSubscription value) =>
        new(Optional<UpdateSubscription>.Some(value), default, default, default);

    public static SubscriptionsRequest1 UpdateSubscriptionBillingCycleDay(UpdateSubscriptionBillingCycleDay value) =>
        new(default, Optional<UpdateSubscriptionBillingCycleDay>.Some(value), default, default);

    public static SubscriptionsRequest1 UpdateSubscriptionNewSubscriptionPlan(UpdateSubscriptionNewSubscriptionPlan value) =>
        new(default, default, Optional<UpdateSubscriptionNewSubscriptionPlan>.Some(value), default);

    internal static SubscriptionsRequest1 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUpdateSubscription([NotNullWhen(true)] out UpdateSubscription? value) =>
        _updateSubscriptionValue.TryGetValue(out value);

    public bool TryGetUpdateSubscriptionBillingCycleDay([NotNullWhen(true)] out UpdateSubscriptionBillingCycleDay? value) =>
        _updateSubscriptionBillingCycleDayValue.TryGetValue(out value);

    public bool TryGetUpdateSubscriptionNewSubscriptionPlan([NotNullWhen(true)] out UpdateSubscriptionNewSubscriptionPlan? value) =>
        _updateSubscriptionNewSubscriptionPlanValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SubscriptionsRequest1(UpdateSubscription value) => UpdateSubscription(value);

    public static implicit operator SubscriptionsRequest1(UpdateSubscriptionBillingCycleDay value) =>
        UpdateSubscriptionBillingCycleDay(value);

    public static implicit operator SubscriptionsRequest1(UpdateSubscriptionNewSubscriptionPlan value) =>
        UpdateSubscriptionNewSubscriptionPlan(value);

    public TResult Match<TResult>(Func<UpdateSubscription, TResult> onUpdateSubscription,
        Func<UpdateSubscriptionBillingCycleDay, TResult> onUpdateSubscriptionBillingCycleDay,
        Func<UpdateSubscriptionNewSubscriptionPlan, TResult> onUpdateSubscriptionNewSubscriptionPlan,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUpdateSubscription(out var updateSubscriptionValue) => onUpdateSubscription(
                updateSubscriptionValue),
            _ when TryGetUpdateSubscriptionBillingCycleDay(
                out var updateSubscriptionBillingCycleDayValue) => onUpdateSubscriptionBillingCycleDay(
                updateSubscriptionBillingCycleDayValue),
            _ when TryGetUpdateSubscriptionNewSubscriptionPlan(
                out var updateSubscriptionNewSubscriptionPlanValue) => onUpdateSubscriptionNewSubscriptionPlan(
                updateSubscriptionNewSubscriptionPlanValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SubscriptionsRequest1)} holds no value.")
        };

    public void Match(Action<UpdateSubscription> onUpdateSubscription,
        Action<UpdateSubscriptionBillingCycleDay> onUpdateSubscriptionBillingCycleDay,
        Action<UpdateSubscriptionNewSubscriptionPlan> onUpdateSubscriptionNewSubscriptionPlan,
        Action<JsonElement> otherwise)
    {
        if (TryGetUpdateSubscription(out var updateSubscriptionValue)) onUpdateSubscription(updateSubscriptionValue);
        else if (TryGetUpdateSubscriptionBillingCycleDay(
            out var updateSubscriptionBillingCycleDayValue)) onUpdateSubscriptionBillingCycleDay(
            updateSubscriptionBillingCycleDayValue);
        else if (TryGetUpdateSubscriptionNewSubscriptionPlan(
            out var updateSubscriptionNewSubscriptionPlanValue)) onUpdateSubscriptionNewSubscriptionPlan(
            updateSubscriptionNewSubscriptionPlanValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SubscriptionsRequest1)} holds no value.");
    }
}

file sealed class SubscriptionsRequest1Converter : JsonConverter<SubscriptionsRequest1>
{
    public override SubscriptionsRequest1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<UpdateSubscription>(root, options, out var updateSubscriptionValue))
        {
            return SubscriptionsRequest1.UpdateSubscription(updateSubscriptionValue);
        }
        if (JsonSerializer.TryDeserialize<UpdateSubscriptionBillingCycleDay>(
            root,
            options,
            out var updateSubscriptionBillingCycleDayValue))
        {
            return SubscriptionsRequest1.UpdateSubscriptionBillingCycleDay(updateSubscriptionBillingCycleDayValue);
        }
        if (JsonSerializer.TryDeserialize<UpdateSubscriptionNewSubscriptionPlan>(
            root,
            options,
            out var updateSubscriptionNewSubscriptionPlanValue))
        {
            return SubscriptionsRequest1.UpdateSubscriptionNewSubscriptionPlan(
                updateSubscriptionNewSubscriptionPlanValue);
        }
        return SubscriptionsRequest1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SubscriptionsRequest1 value, JsonSerializerOptions options)
    {
        if (value.TryGetUpdateSubscription(out var updateSubscriptionValue))
        {
            JsonSerializer.Serialize(writer, updateSubscriptionValue, options);
        }
        else if (value.TryGetUpdateSubscriptionBillingCycleDay(out var updateSubscriptionBillingCycleDayValue))
        {
            JsonSerializer.Serialize(writer, updateSubscriptionBillingCycleDayValue, options);
        }
        else if (value.TryGetUpdateSubscriptionNewSubscriptionPlan(out var updateSubscriptionNewSubscriptionPlanValue))
        {
            JsonSerializer.Serialize(writer, updateSubscriptionNewSubscriptionPlanValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SubscriptionsRequest1)} contains no valid value to serialize.");
        }
    }
}
