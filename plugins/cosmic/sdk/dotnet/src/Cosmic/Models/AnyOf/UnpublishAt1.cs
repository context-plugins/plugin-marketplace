using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Cosmic.Core.Extensions;
using Cosmic.Core.Models;

namespace Cosmic.Models.AnyOf;

/// <summary>
/// UNIX millisecond timestamp.
/// </summary>
[JsonConverter(typeof(UnpublishAt1Converter))]
public record UnpublishAt1
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<double> _doubleValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private UnpublishAt1(Optional<string> stringValue, Optional<double> doubleValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _doubleValue = doubleValue;
        _unknownValue = unknownValue;
    }

    public static UnpublishAt1 String(string value) => new(Optional<string>.Some(value), default, default);

    public static UnpublishAt1 Double(double value) => new(default, Optional<double>.Some(value), default);

    internal static UnpublishAt1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator UnpublishAt1(string value) => String(value);

    public static implicit operator UnpublishAt1(double value) => Double(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<double, TResult> onDouble,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(UnpublishAt1)} holds no value.")
        };

    public void Match(Action<string> onString, Action<double> onDouble, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(UnpublishAt1)} holds no value.");
    }
}

file sealed class UnpublishAt1Converter : JsonConverter<UnpublishAt1>
{
    public override UnpublishAt1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return UnpublishAt1.String(value);
        }
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return UnpublishAt1.Double(doubleValue);
        }
        return UnpublishAt1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, UnpublishAt1 value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(UnpublishAt1)} contains no valid value to serialize.");
        }
    }
}
