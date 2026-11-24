using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using CompSniper.Core.Extensions;
using CompSniper.Core.Models;

namespace CompSniper.Models.AnyOf;

[JsonConverter(typeof(YearConverter))]
public record Year
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<double> _doubleValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Year(Optional<string> stringValue, Optional<double> doubleValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _doubleValue = doubleValue;
        _unknownValue = unknownValue;
    }

    public static Year String(string value) => new(Optional<string>.Some(value), default, default);

    public static Year Double(double value) => new(default, Optional<double>.Some(value), default);

    internal static Year Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Year(string value) => String(value);

    public static implicit operator Year(double value) => Double(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<double, TResult> onDouble,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Year)} holds no value.")
        };

    public void Match(Action<string> onString, Action<double> onDouble, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Year)} holds no value.");
    }
}

file sealed class YearConverter : JsonConverter<Year>
{
    public override Year Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Year.String(value);
        }
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return Year.Double(doubleValue);
        }
        return Year.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Year value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
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
            throw new JsonException($"{nameof(Year)} contains no valid value to serialize.");
        }
    }
}
