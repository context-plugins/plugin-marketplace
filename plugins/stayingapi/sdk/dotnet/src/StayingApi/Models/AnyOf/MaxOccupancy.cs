using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Core.Validation;

namespace StayingApi.Models.AnyOf;

[JsonConverter(typeof(MaxOccupancyConverter))]
public record MaxOccupancy
{
    private readonly Optional<int> _intValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private MaxOccupancy(Optional<int> intValue, Optional<UnknownArm> unknownValue)
    {
        _intValue = intValue;
        _unknownValue = unknownValue;
    }

    public static MaxOccupancy Int(int value) => new(Optional<int>.Some(value), default);

    internal static MaxOccupancy Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator MaxOccupancy(int value) => Int(value);

    public TResult Match<TResult>(Func<int, TResult> onInt, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(MaxOccupancy)} holds no value.")
        };

    public void Match(Action<int> onInt, Action<JsonElement> otherwise)
    {
        if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(MaxOccupancy)} holds no value.");
    }
}

file sealed class MaxOccupancyConverter : JsonConverter<MaxOccupancy>
{
    public override MaxOccupancy Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue) && intValue.MeetsMaximum(2147483647) &&
                intValue.MeetsExclusiveMinimum(0))
            {
                return MaxOccupancy.Int(intValue);
            }
        }
        return MaxOccupancy.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, MaxOccupancy value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(MaxOccupancy)} contains no valid value to serialize.");
        }
    }
}
