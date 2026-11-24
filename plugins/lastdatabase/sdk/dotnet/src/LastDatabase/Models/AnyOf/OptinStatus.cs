using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using LastDatabase.Core.Extensions;
using LastDatabase.Core.Models;

namespace LastDatabase.Models.AnyOf;

[JsonConverter(typeof(OptinStatusConverter))]
public record OptinStatus
{
    private readonly Optional<bool> _boolValue;

    private readonly Optional<int> _intValue;

    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private OptinStatus(Optional<bool> boolValue,
        Optional<int> intValue,
        Optional<string> stringValue,
        Optional<UnknownArm> unknownValue)
    {
        _boolValue = boolValue;
        _intValue = intValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static OptinStatus Bool(bool value) => new(Optional<bool>.Some(value), default, default, default);

    public static OptinStatus Int(int value) => new(default, Optional<int>.Some(value), default, default);

    public static OptinStatus String(string value) => new(default, default, Optional<string>.Some(value), default);

    internal static OptinStatus Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator OptinStatus(bool value) => Bool(value);

    public static implicit operator OptinStatus(int value) => Int(value);

    public static implicit operator OptinStatus(string value) => String(value);

    public TResult Match<TResult>(Func<bool, TResult> onBool,
        Func<int, TResult> onInt,
        Func<string, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(OptinStatus)} holds no value.")
        };

    public void Match(Action<bool> onBool, Action<int> onInt, Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(OptinStatus)} holds no value.");
    }
}

file sealed class OptinStatusConverter : JsonConverter<OptinStatus>
{
    public override OptinStatus Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return OptinStatus.Bool(boolValue);
        }
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue))
            {
                return OptinStatus.Int(intValue);
            }
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return OptinStatus.String(value);
        }
        return OptinStatus.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, OptinStatus value, JsonSerializerOptions options)
    {
        if (value.TryGetBool(out var boolValue))
        {
            JsonSerializer.Serialize(writer, boolValue, options);
        }
        else if (value.TryGetInt(out var intValue))
        {
            JsonSerializer.Serialize(writer, intValue, options);
        }
        else if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(OptinStatus)} contains no valid value to serialize.");
        }
    }
}
