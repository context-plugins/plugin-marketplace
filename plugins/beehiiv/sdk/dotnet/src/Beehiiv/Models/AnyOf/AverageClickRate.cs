using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Beehiiv.Core.Extensions;
using Beehiiv.Core.Models;

namespace Beehiiv.Models.AnyOf;

/// <summary>
/// The publications historical average click through rate
/// </summary>
[JsonConverter(typeof(AverageClickRateConverter))]
public record AverageClickRate
{
    private readonly Optional<double> _doubleValue;

    private readonly Optional<bool> _boolValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private AverageClickRate(Optional<double> doubleValue, Optional<bool> boolValue, Optional<UnknownArm> unknownValue)
    {
        _doubleValue = doubleValue;
        _boolValue = boolValue;
        _unknownValue = unknownValue;
    }

    public static AverageClickRate Double(double value) => new(Optional<double>.Some(value), default, default);

    public static AverageClickRate Bool(bool value) => new(default, Optional<bool>.Some(value), default);

    internal static AverageClickRate Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator AverageClickRate(double value) => Double(value);

    public static implicit operator AverageClickRate(bool value) => Bool(value);

    public TResult Match<TResult>(Func<double, TResult> onDouble,
        Func<bool, TResult> onBool,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(AverageClickRate)} holds no value.")
        };

    public void Match(Action<double> onDouble, Action<bool> onBool, Action<JsonElement> otherwise)
    {
        if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(AverageClickRate)} holds no value.");
    }
}

file sealed class AverageClickRateConverter : JsonConverter<AverageClickRate>
{
    public override AverageClickRate Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return AverageClickRate.Double(doubleValue);
        }
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return AverageClickRate.Bool(boolValue);
        }
        return AverageClickRate.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, AverageClickRate value, JsonSerializerOptions options)
    {
        if (value.TryGetDouble(out var doubleValue))
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
            throw new JsonException($"{nameof(AverageClickRate)} contains no valid value to serialize.");
        }
    }
}
