using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Clix.Core.Extensions;
using Clix.Core.Models;

namespace Clix.Models.AnyOf;

/// <summary>
/// Target information for the push notification. Only one of project_user_id, device_id, or user_id should be present.
/// </summary>
[JsonConverter(typeof(Clixexternalv1PushNotificationTarget31Converter))]
public record Clixexternalv1PushNotificationTarget31
{
    private readonly Optional<Clixexternalv1PushNotificationTarget> _clixexternalv1PushNotificationTargetValue;

    private readonly Optional<Clixexternalv1PushNotificationTarget1> _clixexternalv1PushNotificationTarget1Value;

    private readonly Optional<Clixexternalv1PushNotificationTarget2> _clixexternalv1PushNotificationTarget2Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Clixexternalv1PushNotificationTarget31(Optional<Clixexternalv1PushNotificationTarget> clixexternalv1PushNotificationTargetValue,
        Optional<Clixexternalv1PushNotificationTarget1> clixexternalv1PushNotificationTarget1Value,
        Optional<Clixexternalv1PushNotificationTarget2> clixexternalv1PushNotificationTarget2Value,
        Optional<UnknownArm> unknownValue)
    {
        _clixexternalv1PushNotificationTargetValue = clixexternalv1PushNotificationTargetValue;
        _clixexternalv1PushNotificationTarget1Value = clixexternalv1PushNotificationTarget1Value;
        _clixexternalv1PushNotificationTarget2Value = clixexternalv1PushNotificationTarget2Value;
        _unknownValue = unknownValue;
    }

    public static Clixexternalv1PushNotificationTarget31 Clixexternalv1PushNotificationTarget(Clixexternalv1PushNotificationTarget value) =>
        new(Optional<Clixexternalv1PushNotificationTarget>.Some(value), default, default, default);

    public static Clixexternalv1PushNotificationTarget31 Clixexternalv1PushNotificationTarget1(Clixexternalv1PushNotificationTarget1 value) =>
        new(default, Optional<Clixexternalv1PushNotificationTarget1>.Some(value), default, default);

    public static Clixexternalv1PushNotificationTarget31 Clixexternalv1PushNotificationTarget2(Clixexternalv1PushNotificationTarget2 value) =>
        new(default, default, Optional<Clixexternalv1PushNotificationTarget2>.Some(value), default);

    internal static Clixexternalv1PushNotificationTarget31 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetClixexternalv1PushNotificationTarget([NotNullWhen(true)] out Clixexternalv1PushNotificationTarget? value) =>
        _clixexternalv1PushNotificationTargetValue.TryGetValue(out value);

    public bool TryGetClixexternalv1PushNotificationTarget1([NotNullWhen(true)] out Clixexternalv1PushNotificationTarget1? value) =>
        _clixexternalv1PushNotificationTarget1Value.TryGetValue(out value);

    public bool TryGetClixexternalv1PushNotificationTarget2([NotNullWhen(true)] out Clixexternalv1PushNotificationTarget2? value) =>
        _clixexternalv1PushNotificationTarget2Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Clixexternalv1PushNotificationTarget31(Clixexternalv1PushNotificationTarget value) =>
        Clixexternalv1PushNotificationTarget(value);

    public static implicit operator Clixexternalv1PushNotificationTarget31(Clixexternalv1PushNotificationTarget1 value) =>
        Clixexternalv1PushNotificationTarget1(value);

    public static implicit operator Clixexternalv1PushNotificationTarget31(Clixexternalv1PushNotificationTarget2 value) =>
        Clixexternalv1PushNotificationTarget2(value);

    public TResult Match<TResult>(Func<Clixexternalv1PushNotificationTarget, TResult> onClixexternalv1PushNotificationTarget,
        Func<Clixexternalv1PushNotificationTarget1, TResult> onClixexternalv1PushNotificationTarget1,
        Func<Clixexternalv1PushNotificationTarget2, TResult> onClixexternalv1PushNotificationTarget2,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetClixexternalv1PushNotificationTarget(
                out var clixexternalv1PushNotificationTargetValue) => onClixexternalv1PushNotificationTarget(
                clixexternalv1PushNotificationTargetValue),
            _ when TryGetClixexternalv1PushNotificationTarget1(
                out var clixexternalv1PushNotificationTarget1Value) => onClixexternalv1PushNotificationTarget1(
                clixexternalv1PushNotificationTarget1Value),
            _ when TryGetClixexternalv1PushNotificationTarget2(
                out var clixexternalv1PushNotificationTarget2Value) => onClixexternalv1PushNotificationTarget2(
                clixexternalv1PushNotificationTarget2Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(Clixexternalv1PushNotificationTarget31)} holds no value.")
        };

    public void Match(Action<Clixexternalv1PushNotificationTarget> onClixexternalv1PushNotificationTarget,
        Action<Clixexternalv1PushNotificationTarget1> onClixexternalv1PushNotificationTarget1,
        Action<Clixexternalv1PushNotificationTarget2> onClixexternalv1PushNotificationTarget2,
        Action<JsonElement> otherwise)
    {
        if (TryGetClixexternalv1PushNotificationTarget(
            out var clixexternalv1PushNotificationTargetValue)) onClixexternalv1PushNotificationTarget(
            clixexternalv1PushNotificationTargetValue);
        else if (TryGetClixexternalv1PushNotificationTarget1(
            out var clixexternalv1PushNotificationTarget1Value)) onClixexternalv1PushNotificationTarget1(
            clixexternalv1PushNotificationTarget1Value);
        else if (TryGetClixexternalv1PushNotificationTarget2(
            out var clixexternalv1PushNotificationTarget2Value)) onClixexternalv1PushNotificationTarget2(
            clixexternalv1PushNotificationTarget2Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Clixexternalv1PushNotificationTarget31)} holds no value.");
    }
}

file sealed class Clixexternalv1PushNotificationTarget31Converter : JsonConverter<Clixexternalv1PushNotificationTarget31>
{
    public override Clixexternalv1PushNotificationTarget31 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Clixexternalv1PushNotificationTarget>(
            root,
            options,
            out var clixexternalv1PushNotificationTargetValue))
        {
            return Clixexternalv1PushNotificationTarget31.Clixexternalv1PushNotificationTarget(
                clixexternalv1PushNotificationTargetValue);
        }
        if (JsonSerializer.TryDeserialize<Clixexternalv1PushNotificationTarget1>(
            root,
            options,
            out var clixexternalv1PushNotificationTarget1Value))
        {
            return Clixexternalv1PushNotificationTarget31.Clixexternalv1PushNotificationTarget1(
                clixexternalv1PushNotificationTarget1Value);
        }
        if (JsonSerializer.TryDeserialize<Clixexternalv1PushNotificationTarget2>(
            root,
            options,
            out var clixexternalv1PushNotificationTarget2Value))
        {
            return Clixexternalv1PushNotificationTarget31.Clixexternalv1PushNotificationTarget2(
                clixexternalv1PushNotificationTarget2Value);
        }
        return Clixexternalv1PushNotificationTarget31.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        Clixexternalv1PushNotificationTarget31 value,
        JsonSerializerOptions options)
    {
        if (value.TryGetClixexternalv1PushNotificationTarget(out var clixexternalv1PushNotificationTargetValue))
        {
            JsonSerializer.Serialize(writer, clixexternalv1PushNotificationTargetValue, options);
        }
        else if (value.TryGetClixexternalv1PushNotificationTarget1(out var clixexternalv1PushNotificationTarget1Value))
        {
            JsonSerializer.Serialize(writer, clixexternalv1PushNotificationTarget1Value, options);
        }
        else if (value.TryGetClixexternalv1PushNotificationTarget2(out var clixexternalv1PushNotificationTarget2Value))
        {
            JsonSerializer.Serialize(writer, clixexternalv1PushNotificationTarget2Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(Clixexternalv1PushNotificationTarget31)} contains no valid value to serialize.");
        }
    }
}
