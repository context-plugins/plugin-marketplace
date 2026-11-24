using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Core.Validation;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Maximum number of events to return. Defaults to 20. Between 1 and 100.
/// </summary>
[JsonConverter(typeof(Limit1Converter))]
public record Limit1
{
    private readonly Optional<int> _intValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Limit1(Optional<int> intValue, Optional<UnknownArm> unknownValue)
    {
        _intValue = intValue;
        _unknownValue = unknownValue;
    }

    public static Limit1 Int(int value) => new(Optional<int>.Some(value), default);

    internal static Limit1 Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Limit1(int value) => Int(value);

    public TResult Match<TResult>(Func<int, TResult> onInt, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Limit1)} holds no value.")
        };

    public void Match(Action<int> onInt, Action<JsonElement> otherwise)
    {
        if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Limit1)} holds no value.");
    }
}

file sealed class Limit1Converter : JsonConverter<Limit1>
{
    public override Limit1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue) && intValue.MeetsMinimum(1) && intValue.MeetsMaximum(100))
            {
                return Limit1.Int(intValue);
            }
        }
        return Limit1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Limit1 value, JsonSerializerOptions options)
    {
        if (value.TryGetInt(out var intValue))
        {
            JsonSerializer.Serialize(writer, intValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Limit1)} contains no valid value to serialize.");
        }
    }
}
