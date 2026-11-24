using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Metadata1Converter))]
public record Metadata1
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<int> _intValue;

    private readonly Optional<double> _doubleValue;

    private readonly Optional<bool> _boolValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Metadata1(Optional<string> stringValue,
        Optional<int> intValue,
        Optional<double> doubleValue,
        Optional<bool> boolValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _intValue = intValue;
        _doubleValue = doubleValue;
        _boolValue = boolValue;
        _unknownValue = unknownValue;
    }

    public static Metadata1 String(string value) =>
        new(Optional<string>.Some(value), default, default, default, default);

    public static Metadata1 Int(int value) => new(default, Optional<int>.Some(value), default, default, default);

    public static Metadata1 Double(double value) =>
        new(default, default, Optional<double>.Some(value), default, default);

    public static Metadata1 Bool(bool value) => new(default, default, default, Optional<bool>.Some(value), default);

    internal static Metadata1 Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Metadata1(string value) => String(value);

    public static implicit operator Metadata1(int value) => Int(value);

    public static implicit operator Metadata1(double value) => Double(value);

    public static implicit operator Metadata1(bool value) => Bool(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<int, TResult> onInt,
        Func<double, TResult> onDouble,
        Func<bool, TResult> onBool,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Metadata1)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<int> onInt,
        Action<double> onDouble,
        Action<bool> onBool,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Metadata1)} holds no value.");
    }
}

file sealed class Metadata1Converter : JsonConverter<Metadata1>
{
    public override Metadata1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Metadata1.String(value);
        }
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue))
            {
                return Metadata1.Int(intValue);
            }
        }
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return Metadata1.Double(doubleValue);
        }
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return Metadata1.Bool(boolValue);
        }
        return Metadata1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Metadata1 value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetInt(out var intValue))
        {
            JsonSerializer.Serialize(writer, intValue, options);
        }
        else if (value.TryGetDouble(out var doubleValue))
        {
            JsonSerializer.Serialize(writer, doubleValue, options);
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
            throw new JsonException($"{nameof(Metadata1)} contains no valid value to serialize.");
        }
    }
}
