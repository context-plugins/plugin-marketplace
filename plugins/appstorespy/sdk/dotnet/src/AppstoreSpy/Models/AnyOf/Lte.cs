using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Extensions;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models.AnyOf;

[JsonConverter(typeof(LteConverter))]
public record Lte
{
    private readonly Optional<int> _intValue;

    private readonly Optional<double> _doubleValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Lte(Optional<int> intValue, Optional<double> doubleValue, Optional<UnknownArm> unknownValue)
    {
        _intValue = intValue;
        _doubleValue = doubleValue;
        _unknownValue = unknownValue;
    }

    public static Lte Int(int value) => new(Optional<int>.Some(value), default, default);

    public static Lte Double(double value) => new(default, Optional<double>.Some(value), default);

    internal static Lte Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Lte(int value) => Int(value);

    public static implicit operator Lte(double value) => Double(value);

    public TResult Match<TResult>(Func<int, TResult> onInt,
        Func<double, TResult> onDouble,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Lte)} holds no value.")
        };

    public void Match(Action<int> onInt, Action<double> onDouble, Action<JsonElement> otherwise)
    {
        if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Lte)} holds no value.");
    }
}

file sealed class LteConverter : JsonConverter<Lte>
{
    public override Lte Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue))
            {
                return Lte.Int(intValue);
            }
        }
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return Lte.Double(doubleValue);
        }
        return Lte.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Lte value, JsonSerializerOptions options)
    {
        if (value.TryGetInt(out var intValue))
        {
            JsonSerializer.Serialize(writer, intValue, options);
        }
        else if (value.TryGetDouble(out var doubleValue))
        {
            JsonSerializer.Serialize(writer, doubleValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Lte)} contains no valid value to serialize.");
        }
    }
}
