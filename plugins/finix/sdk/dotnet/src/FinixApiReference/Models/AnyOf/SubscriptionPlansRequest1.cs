using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(SubscriptionPlansRequest1Converter))]
public record SubscriptionPlansRequest1
{
    private readonly Optional<UpdateSubscriptionPlan> _updateSubscriptionPlanValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SubscriptionPlansRequest1(Optional<UpdateSubscriptionPlan> updateSubscriptionPlanValue,
        Optional<UnknownArm> unknownValue)
    {
        _updateSubscriptionPlanValue = updateSubscriptionPlanValue;
        _unknownValue = unknownValue;
    }

    public static SubscriptionPlansRequest1 UpdateSubscriptionPlan(UpdateSubscriptionPlan value) =>
        new(Optional<UpdateSubscriptionPlan>.Some(value), default);

    internal static SubscriptionPlansRequest1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUpdateSubscriptionPlan([NotNullWhen(true)] out UpdateSubscriptionPlan? value) =>
        _updateSubscriptionPlanValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SubscriptionPlansRequest1(UpdateSubscriptionPlan value) =>
        UpdateSubscriptionPlan(value);

    public TResult Match<TResult>(Func<UpdateSubscriptionPlan, TResult> onUpdateSubscriptionPlan,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUpdateSubscriptionPlan(out var updateSubscriptionPlanValue) => onUpdateSubscriptionPlan(
                updateSubscriptionPlanValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SubscriptionPlansRequest1)} holds no value.")
        };

    public void Match(Action<UpdateSubscriptionPlan> onUpdateSubscriptionPlan, Action<JsonElement> otherwise)
    {
        if (TryGetUpdateSubscriptionPlan(out var updateSubscriptionPlanValue)) onUpdateSubscriptionPlan(
            updateSubscriptionPlanValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SubscriptionPlansRequest1)} holds no value.");
    }
}

file sealed class SubscriptionPlansRequest1Converter : JsonConverter<SubscriptionPlansRequest1>
{
    public override SubscriptionPlansRequest1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<UpdateSubscriptionPlan>(root, options, out var updateSubscriptionPlanValue))
        {
            return SubscriptionPlansRequest1.UpdateSubscriptionPlan(updateSubscriptionPlanValue);
        }
        return SubscriptionPlansRequest1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SubscriptionPlansRequest1 value, JsonSerializerOptions options)
    {
        if (value.TryGetUpdateSubscriptionPlan(out var updateSubscriptionPlanValue))
        {
            JsonSerializer.Serialize(writer, updateSubscriptionPlanValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SubscriptionPlansRequest1)} contains no valid value to serialize.");
        }
    }
}
