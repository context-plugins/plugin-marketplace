using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using AlphAi.Core.Extensions;
using AlphAi.Core.Models;

namespace AlphAi.Models.AnyOf;

[JsonConverter(typeof(MinZConverter))]
public record MinZ
{
    private readonly Optional<double> _doubleValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private MinZ(Optional<double> doubleValue, Optional<UnknownArm> unknownValue)
    {
        _doubleValue = doubleValue;
        _unknownValue = unknownValue;
    }

    public static MinZ Double(double value) => new(Optional<double>.Some(value), default);

    internal static MinZ Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator MinZ(double value) => Double(value);

    public TResult Match<TResult>(Func<double, TResult> onDouble, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(MinZ)} holds no value.")
        };

    public void Match(Action<double> onDouble, Action<JsonElement> otherwise)
    {
        if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(MinZ)} holds no value.");
    }
}

file sealed class MinZConverter : JsonConverter<MinZ>
{
    public override MinZ Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return MinZ.Double(doubleValue);
        }
        return MinZ.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, MinZ value, JsonSerializerOptions options)
    {
        if (value.TryGetDouble(out var doubleValue))
        {
            JsonSerializer.Serialize(writer, doubleValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(MinZ)} contains no valid value to serialize.");
        }
    }
}
