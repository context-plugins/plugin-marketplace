using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Jid.Core.Extensions;
using Jid.Core.Models;
using Jid.Models.Enums;

namespace Jid.Models.AnyOf;

[JsonConverter(typeof(Met1Converter))]
public record Met1
{
    private readonly Optional<bool> _boolValue;

    private readonly Optional<Met> _metValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Met1(Optional<bool> boolValue, Optional<Met> metValue, Optional<UnknownArm> unknownValue)
    {
        _boolValue = boolValue;
        _metValue = metValue;
        _unknownValue = unknownValue;
    }

    public static Met1 Bool(bool value) => new(Optional<bool>.Some(value), default, default);

    public static Met1 Met(Met value) => new(default, Optional<Met>.Some(value), default);

    internal static Met1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetMet([NotNullWhen(true)] out Met? value) => _metValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Met1(bool value) => Bool(value);

    public static implicit operator Met1(Met value) => Met(value);

    public TResult Match<TResult>(Func<bool, TResult> onBool,
        Func<Met, TResult> onMet,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetMet(out var metValue) => onMet(metValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Met1)} holds no value.")
        };

    public void Match(Action<bool> onBool, Action<Met> onMet, Action<JsonElement> otherwise)
    {
        if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetMet(out var metValue)) onMet(metValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Met1)} holds no value.");
    }
}

file sealed class Met1Converter : JsonConverter<Met1>
{
    public override Met1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return Met1.Bool(boolValue);
        }
        if (JsonSerializer.TryDeserialize<Met>(root, options, out var metValue))
        {
            return Met1.Met(metValue);
        }
        return Met1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Met1 value, JsonSerializerOptions options)
    {
        if (value.TryGetBool(out var boolValue))
        {
            JsonSerializer.Serialize(writer, boolValue, options);
        }
        else if (value.TryGetMet(out var metValue))
        {
            JsonSerializer.Serialize(writer, metValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Met1)} contains no valid value to serialize.");
        }
    }
}
