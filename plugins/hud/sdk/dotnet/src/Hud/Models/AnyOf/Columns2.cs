using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(Columns2Converter))]
public record Columns2
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<double> _doubleValue;

    private readonly Optional<IReadOnlyList<string>> _listOfStringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Columns2(Optional<string> stringValue,
        Optional<double> doubleValue,
        Optional<IReadOnlyList<string>> listOfStringValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _doubleValue = doubleValue;
        _listOfStringValue = listOfStringValue;
        _unknownValue = unknownValue;
    }

    public static Columns2 String(string value) => new(Optional<string>.Some(value), default, default, default);

    public static Columns2 Double(double value) => new(default, Optional<double>.Some(value), default, default);

    public static Columns2 ListOfString(IReadOnlyList<string> value) =>
        new(default, default, Optional<IReadOnlyList<string>>.Some(value), default);

    internal static Columns2 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetListOfString([NotNullWhen(true)] out IReadOnlyList<string>? value) =>
        _listOfStringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Columns2(string value) => String(value);

    public static implicit operator Columns2(double value) => Double(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<double, TResult> onDouble,
        Func<IReadOnlyList<string>, TResult> onListOfString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetListOfString(out var listOfStringValue) => onListOfString(listOfStringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Columns2)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<double> onDouble,
        Action<IReadOnlyList<string>> onListOfString,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetListOfString(out var listOfStringValue)) onListOfString(listOfStringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Columns2)} holds no value.");
    }
}

file sealed class Columns2Converter : JsonConverter<Columns2>
{
    public override Columns2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Columns2.String(value);
        }
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return Columns2.Double(doubleValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<string>>(root, options, out var listOfStringValue))
        {
            return Columns2.ListOfString(listOfStringValue);
        }
        return Columns2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Columns2 value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetDouble(out var doubleValue))
        {
            JsonSerializer.Serialize(writer, doubleValue, options);
        }
        else if (value.TryGetListOfString(out var listOfStringValue))
        {
            JsonSerializer.Serialize(writer, listOfStringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Columns2)} contains no valid value to serialize.");
        }
    }
}
