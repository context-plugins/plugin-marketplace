using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Beehiiv.Core.Extensions;
using Beehiiv.Core.Models;

namespace Beehiiv.Models.AnyOf;

/// <summary>
/// Total number of active free and premium subscriptions
/// </summary>
[JsonConverter(typeof(ActiveSubscriptionCountConverter))]
public record ActiveSubscriptionCount
{
    private readonly Optional<int> _intValue;

    private readonly Optional<bool> _boolValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ActiveSubscriptionCount(Optional<int> intValue, Optional<bool> boolValue, Optional<UnknownArm> unknownValue)
    {
        _intValue = intValue;
        _boolValue = boolValue;
        _unknownValue = unknownValue;
    }

    public static ActiveSubscriptionCount Int(int value) => new(Optional<int>.Some(value), default, default);

    public static ActiveSubscriptionCount Bool(bool value) => new(default, Optional<bool>.Some(value), default);

    internal static ActiveSubscriptionCount Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ActiveSubscriptionCount(int value) => Int(value);

    public static implicit operator ActiveSubscriptionCount(bool value) => Bool(value);

    public TResult Match<TResult>(Func<int, TResult> onInt,
        Func<bool, TResult> onBool,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ActiveSubscriptionCount)} holds no value.")
        };

    public void Match(Action<int> onInt, Action<bool> onBool, Action<JsonElement> otherwise)
    {
        if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ActiveSubscriptionCount)} holds no value.");
    }
}

file sealed class ActiveSubscriptionCountConverter : JsonConverter<ActiveSubscriptionCount>
{
    public override ActiveSubscriptionCount Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue))
            {
                return ActiveSubscriptionCount.Int(intValue);
            }
        }
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return ActiveSubscriptionCount.Bool(boolValue);
        }
        return ActiveSubscriptionCount.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ActiveSubscriptionCount value, JsonSerializerOptions options)
    {
        if (value.TryGetInt(out var intValue))
        {
            JsonSerializer.Serialize(writer, intValue, options);
        }
        else if (value.TryGetBool(out var boolValue))
        {
            JsonSerializer.Serialize(writer, boolValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ActiveSubscriptionCount)} contains no valid value to serialize.");
        }
    }
}
