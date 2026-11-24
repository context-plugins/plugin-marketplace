using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models.AnyOf;

/// <summary>
/// When this venue's market last changed (second precision): a price, a lay price or <c>available</c> moved, or a row appeared, including a venue's rows coming back after a few seconds off the board (see the Freshness note). A service restart can also move it once with nothing changed: dedupe on content. It is not a heartbeat: a quiet venue's <c>last_update</c> ages while the venue is still read (venue freshness is <c>last_seen</c> in keyed <c>/v2/coverage</c>).
/// </summary>
[JsonConverter(typeof(LastUpdate1Converter))]
public record LastUpdate1
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<int> _intValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private LastUpdate1(Optional<string> stringValue, Optional<int> intValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _intValue = intValue;
        _unknownValue = unknownValue;
    }

    public static LastUpdate1 String(string value) => new(Optional<string>.Some(value), default, default);

    public static LastUpdate1 Int(int value) => new(default, Optional<int>.Some(value), default);

    internal static LastUpdate1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator LastUpdate1(string value) => String(value);

    public static implicit operator LastUpdate1(int value) => Int(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<int, TResult> onInt,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(LastUpdate1)} holds no value.")
        };

    public void Match(Action<string> onString, Action<int> onInt, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(LastUpdate1)} holds no value.");
    }
}

file sealed class LastUpdate1Converter : JsonConverter<LastUpdate1>
{
    public override LastUpdate1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return LastUpdate1.String(value);
        }
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue))
            {
                return LastUpdate1.Int(intValue);
            }
        }
        return LastUpdate1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, LastUpdate1 value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetInt(out var intValue))
        {
            JsonSerializer.Serialize(writer, intValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(LastUpdate1)} contains no valid value to serialize.");
        }
    }
}
