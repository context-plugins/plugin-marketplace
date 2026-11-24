using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Clix.Core.Extensions;
using Clix.Core.Models;

namespace Clix.Models.AnyOf;

/// <summary>
/// Target device and/or user for the live activity.
/// </summary>
[JsonConverter(typeof(Clixexternalv1LiveActivityTarget3Converter))]
public record Clixexternalv1LiveActivityTarget3
{
    private readonly Optional<Clixexternalv1LiveActivityTarget> _clixexternalv1LiveActivityTargetValue;

    private readonly Optional<Clixexternalv1LiveActivityTarget1> _clixexternalv1LiveActivityTarget1Value;

    private readonly Optional<Clixexternalv1LiveActivityTarget2> _clixexternalv1LiveActivityTarget2Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Clixexternalv1LiveActivityTarget3(Optional<Clixexternalv1LiveActivityTarget> clixexternalv1LiveActivityTargetValue,
        Optional<Clixexternalv1LiveActivityTarget1> clixexternalv1LiveActivityTarget1Value,
        Optional<Clixexternalv1LiveActivityTarget2> clixexternalv1LiveActivityTarget2Value,
        Optional<UnknownArm> unknownValue)
    {
        _clixexternalv1LiveActivityTargetValue = clixexternalv1LiveActivityTargetValue;
        _clixexternalv1LiveActivityTarget1Value = clixexternalv1LiveActivityTarget1Value;
        _clixexternalv1LiveActivityTarget2Value = clixexternalv1LiveActivityTarget2Value;
        _unknownValue = unknownValue;
    }

    public static Clixexternalv1LiveActivityTarget3 Clixexternalv1LiveActivityTarget(Clixexternalv1LiveActivityTarget value) =>
        new(Optional<Clixexternalv1LiveActivityTarget>.Some(value), default, default, default);

    public static Clixexternalv1LiveActivityTarget3 Clixexternalv1LiveActivityTarget1(Clixexternalv1LiveActivityTarget1 value) =>
        new(default, Optional<Clixexternalv1LiveActivityTarget1>.Some(value), default, default);

    public static Clixexternalv1LiveActivityTarget3 Clixexternalv1LiveActivityTarget2(Clixexternalv1LiveActivityTarget2 value) =>
        new(default, default, Optional<Clixexternalv1LiveActivityTarget2>.Some(value), default);

    internal static Clixexternalv1LiveActivityTarget3 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetClixexternalv1LiveActivityTarget([NotNullWhen(true)] out Clixexternalv1LiveActivityTarget? value) =>
        _clixexternalv1LiveActivityTargetValue.TryGetValue(out value);

    public bool TryGetClixexternalv1LiveActivityTarget1([NotNullWhen(true)] out Clixexternalv1LiveActivityTarget1? value) =>
        _clixexternalv1LiveActivityTarget1Value.TryGetValue(out value);

    public bool TryGetClixexternalv1LiveActivityTarget2([NotNullWhen(true)] out Clixexternalv1LiveActivityTarget2? value) =>
        _clixexternalv1LiveActivityTarget2Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Clixexternalv1LiveActivityTarget3(Clixexternalv1LiveActivityTarget value) =>
        Clixexternalv1LiveActivityTarget(value);

    public static implicit operator Clixexternalv1LiveActivityTarget3(Clixexternalv1LiveActivityTarget1 value) =>
        Clixexternalv1LiveActivityTarget1(value);

    public static implicit operator Clixexternalv1LiveActivityTarget3(Clixexternalv1LiveActivityTarget2 value) =>
        Clixexternalv1LiveActivityTarget2(value);

    public TResult Match<TResult>(Func<Clixexternalv1LiveActivityTarget, TResult> onClixexternalv1LiveActivityTarget,
        Func<Clixexternalv1LiveActivityTarget1, TResult> onClixexternalv1LiveActivityTarget1,
        Func<Clixexternalv1LiveActivityTarget2, TResult> onClixexternalv1LiveActivityTarget2,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetClixexternalv1LiveActivityTarget(
                out var clixexternalv1LiveActivityTargetValue) => onClixexternalv1LiveActivityTarget(
                clixexternalv1LiveActivityTargetValue),
            _ when TryGetClixexternalv1LiveActivityTarget1(
                out var clixexternalv1LiveActivityTarget1Value) => onClixexternalv1LiveActivityTarget1(
                clixexternalv1LiveActivityTarget1Value),
            _ when TryGetClixexternalv1LiveActivityTarget2(
                out var clixexternalv1LiveActivityTarget2Value) => onClixexternalv1LiveActivityTarget2(
                clixexternalv1LiveActivityTarget2Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Clixexternalv1LiveActivityTarget3)} holds no value.")
        };

    public void Match(Action<Clixexternalv1LiveActivityTarget> onClixexternalv1LiveActivityTarget,
        Action<Clixexternalv1LiveActivityTarget1> onClixexternalv1LiveActivityTarget1,
        Action<Clixexternalv1LiveActivityTarget2> onClixexternalv1LiveActivityTarget2,
        Action<JsonElement> otherwise)
    {
        if (TryGetClixexternalv1LiveActivityTarget(
            out var clixexternalv1LiveActivityTargetValue)) onClixexternalv1LiveActivityTarget(
            clixexternalv1LiveActivityTargetValue);
        else if (TryGetClixexternalv1LiveActivityTarget1(
            out var clixexternalv1LiveActivityTarget1Value)) onClixexternalv1LiveActivityTarget1(
            clixexternalv1LiveActivityTarget1Value);
        else if (TryGetClixexternalv1LiveActivityTarget2(
            out var clixexternalv1LiveActivityTarget2Value)) onClixexternalv1LiveActivityTarget2(
            clixexternalv1LiveActivityTarget2Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Clixexternalv1LiveActivityTarget3)} holds no value.");
    }
}

file sealed class Clixexternalv1LiveActivityTarget3Converter : JsonConverter<Clixexternalv1LiveActivityTarget3>
{
    public override Clixexternalv1LiveActivityTarget3 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Clixexternalv1LiveActivityTarget>(
            root,
            options,
            out var clixexternalv1LiveActivityTargetValue))
        {
            return Clixexternalv1LiveActivityTarget3.Clixexternalv1LiveActivityTarget(
                clixexternalv1LiveActivityTargetValue);
        }
        if (JsonSerializer.TryDeserialize<Clixexternalv1LiveActivityTarget1>(
            root,
            options,
            out var clixexternalv1LiveActivityTarget1Value))
        {
            return Clixexternalv1LiveActivityTarget3.Clixexternalv1LiveActivityTarget1(
                clixexternalv1LiveActivityTarget1Value);
        }
        if (JsonSerializer.TryDeserialize<Clixexternalv1LiveActivityTarget2>(
            root,
            options,
            out var clixexternalv1LiveActivityTarget2Value))
        {
            return Clixexternalv1LiveActivityTarget3.Clixexternalv1LiveActivityTarget2(
                clixexternalv1LiveActivityTarget2Value);
        }
        return Clixexternalv1LiveActivityTarget3.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        Clixexternalv1LiveActivityTarget3 value,
        JsonSerializerOptions options)
    {
        if (value.TryGetClixexternalv1LiveActivityTarget(out var clixexternalv1LiveActivityTargetValue))
        {
            JsonSerializer.Serialize(writer, clixexternalv1LiveActivityTargetValue, options);
        }
        else if (value.TryGetClixexternalv1LiveActivityTarget1(out var clixexternalv1LiveActivityTarget1Value))
        {
            JsonSerializer.Serialize(writer, clixexternalv1LiveActivityTarget1Value, options);
        }
        else if (value.TryGetClixexternalv1LiveActivityTarget2(out var clixexternalv1LiveActivityTarget2Value))
        {
            JsonSerializer.Serialize(writer, clixexternalv1LiveActivityTarget2Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(Clixexternalv1LiveActivityTarget3)} contains no valid value to serialize.");
        }
    }
}
