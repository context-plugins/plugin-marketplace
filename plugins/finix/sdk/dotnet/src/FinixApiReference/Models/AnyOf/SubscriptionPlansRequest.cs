using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(SubscriptionPlansRequestConverter))]
public record SubscriptionPlansRequest
{
    private readonly Optional<CreateSubscriptionPlan> _createSubscriptionPlanValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SubscriptionPlansRequest(Optional<CreateSubscriptionPlan> createSubscriptionPlanValue,
        Optional<UnknownArm> unknownValue)
    {
        _createSubscriptionPlanValue = createSubscriptionPlanValue;
        _unknownValue = unknownValue;
    }

    public static SubscriptionPlansRequest CreateSubscriptionPlan(CreateSubscriptionPlan value) =>
        new(Optional<CreateSubscriptionPlan>.Some(value), default);

    internal static SubscriptionPlansRequest Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCreateSubscriptionPlan([NotNullWhen(true)] out CreateSubscriptionPlan? value) =>
        _createSubscriptionPlanValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SubscriptionPlansRequest(CreateSubscriptionPlan value) =>
        CreateSubscriptionPlan(value);

    public TResult Match<TResult>(Func<CreateSubscriptionPlan, TResult> onCreateSubscriptionPlan,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCreateSubscriptionPlan(out var createSubscriptionPlanValue) => onCreateSubscriptionPlan(
                createSubscriptionPlanValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SubscriptionPlansRequest)} holds no value.")
        };

    public void Match(Action<CreateSubscriptionPlan> onCreateSubscriptionPlan, Action<JsonElement> otherwise)
    {
        if (TryGetCreateSubscriptionPlan(out var createSubscriptionPlanValue)) onCreateSubscriptionPlan(
            createSubscriptionPlanValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SubscriptionPlansRequest)} holds no value.");
    }
}

file sealed class SubscriptionPlansRequestConverter : JsonConverter<SubscriptionPlansRequest>
{
    public override SubscriptionPlansRequest Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CreateSubscriptionPlan>(root, options, out var createSubscriptionPlanValue))
        {
            return SubscriptionPlansRequest.CreateSubscriptionPlan(createSubscriptionPlanValue);
        }
        return SubscriptionPlansRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SubscriptionPlansRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetCreateSubscriptionPlan(out var createSubscriptionPlanValue))
        {
            JsonSerializer.Serialize(writer, createSubscriptionPlanValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SubscriptionPlansRequest)} contains no valid value to serialize.");
        }
    }
}
