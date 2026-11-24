using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using OddsRelay.Core.Extensions;
using OddsRelay.Core.Models;

namespace OddsRelay.Models.AnyOf;

[JsonConverter(typeof(LayPriceConverter))]
public record LayPrice
{
    private readonly Optional<double> _doubleValue;

    private readonly Optional<int> _intValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private LayPrice(Optional<double> doubleValue, Optional<int> intValue, Optional<UnknownArm> unknownValue)
    {
        _doubleValue = doubleValue;
        _intValue = intValue;
        _unknownValue = unknownValue;
    }

    public static LayPrice Double(double value) => new(Optional<double>.Some(value), default, default);

    public static LayPrice Int(int value) => new(default, Optional<int>.Some(value), default);

    internal static LayPrice Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator LayPrice(double value) => Double(value);

    public static implicit operator LayPrice(int value) => Int(value);

    public TResult Match<TResult>(Func<double, TResult> onDouble,
        Func<int, TResult> onInt,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(LayPrice)} holds no value.")
        };

    public void Match(Action<double> onDouble, Action<int> onInt, Action<JsonElement> otherwise)
    {
        if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(LayPrice)} holds no value.");
    }
}

file sealed class LayPriceConverter : JsonConverter<LayPrice>
{
    public override LayPrice Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return LayPrice.Double(doubleValue);
        }
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue))
            {
                return LayPrice.Int(intValue);
            }
        }
        return LayPrice.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, LayPrice value, JsonSerializerOptions options)
    {
        if (value.TryGetDouble(out var doubleValue))
        {
            JsonSerializer.Serialize(writer, doubleValue, options);
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
            throw new JsonException($"{nameof(LayPrice)} contains no valid value to serialize.");
        }
    }
}
