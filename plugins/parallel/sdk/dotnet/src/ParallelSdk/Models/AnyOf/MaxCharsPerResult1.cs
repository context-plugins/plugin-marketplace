using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Optional limit on the number of characters to include in the full content for each url. Full content always starts at the beginning of the page and is truncated at the limit if necessary.
/// </summary>
[JsonConverter(typeof(MaxCharsPerResult1Converter))]
public record MaxCharsPerResult1
{
    private readonly Optional<int> _intValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private MaxCharsPerResult1(Optional<int> intValue, Optional<UnknownArm> unknownValue)
    {
        _intValue = intValue;
        _unknownValue = unknownValue;
    }

    public static MaxCharsPerResult1 Int(int value) => new(Optional<int>.Some(value), default);

    internal static MaxCharsPerResult1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator MaxCharsPerResult1(int value) => Int(value);

    public TResult Match<TResult>(Func<int, TResult> onInt, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(MaxCharsPerResult1)} holds no value.")
        };

    public void Match(Action<int> onInt, Action<JsonElement> otherwise)
    {
        if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(MaxCharsPerResult1)} holds no value.");
    }
}

file sealed class MaxCharsPerResult1Converter : JsonConverter<MaxCharsPerResult1>
{
    public override MaxCharsPerResult1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue))
            {
                return MaxCharsPerResult1.Int(intValue);
            }
        }
        return MaxCharsPerResult1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, MaxCharsPerResult1 value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(MaxCharsPerResult1)} contains no valid value to serialize.");
        }
    }
}
