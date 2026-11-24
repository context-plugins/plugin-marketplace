using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Beehiiv.Core.Extensions;
using Beehiiv.Core.Models;

namespace Beehiiv.Models.AnyOf;

[JsonConverter(typeof(CustomFieldDataType3Converter))]
public record CustomFieldDataType3
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<double> _doubleValue;

    private readonly Optional<bool> _boolValue;

    private readonly Optional<IReadOnlyList<string>> _listOfStringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CustomFieldDataType3(Optional<string> stringValue,
        Optional<double> doubleValue,
        Optional<bool> boolValue,
        Optional<IReadOnlyList<string>> listOfStringValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _doubleValue = doubleValue;
        _boolValue = boolValue;
        _listOfStringValue = listOfStringValue;
        _unknownValue = unknownValue;
    }

    public static CustomFieldDataType3 String(string value) =>
        new(Optional<string>.Some(value), default, default, default, default);

    public static CustomFieldDataType3 Double(double value) =>
        new(default, Optional<double>.Some(value), default, default, default);

    public static CustomFieldDataType3 Bool(bool value) =>
        new(default, default, Optional<bool>.Some(value), default, default);

    public static CustomFieldDataType3 ListOfString(IReadOnlyList<string> value) =>
        new(default, default, default, Optional<IReadOnlyList<string>>.Some(value), default);

    internal static CustomFieldDataType3 Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetListOfString([NotNullWhen(true)] out IReadOnlyList<string>? value) =>
        _listOfStringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CustomFieldDataType3(string value) => String(value);

    public static implicit operator CustomFieldDataType3(double value) => Double(value);

    public static implicit operator CustomFieldDataType3(bool value) => Bool(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<double, TResult> onDouble,
        Func<bool, TResult> onBool,
        Func<IReadOnlyList<string>, TResult> onListOfString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetListOfString(out var listOfStringValue) => onListOfString(listOfStringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CustomFieldDataType3)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<double> onDouble,
        Action<bool> onBool,
        Action<IReadOnlyList<string>> onListOfString,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetListOfString(out var listOfStringValue)) onListOfString(listOfStringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CustomFieldDataType3)} holds no value.");
    }
}

file sealed class CustomFieldDataType3Converter : JsonConverter<CustomFieldDataType3>
{
    public override CustomFieldDataType3 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return CustomFieldDataType3.String(value);
        }
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return CustomFieldDataType3.Double(doubleValue);
        }
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return CustomFieldDataType3.Bool(boolValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<string>>(root, options, out var listOfStringValue))
        {
            return CustomFieldDataType3.ListOfString(listOfStringValue);
        }
        return CustomFieldDataType3.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CustomFieldDataType3 value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetDouble(out var doubleValue))
        {
            JsonSerializer.Serialize(writer, doubleValue, options);
        }
        else if (value.TryGetBool(out var boolValue))
        {
            JsonSerializer.Serialize(writer, boolValue, options);
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
            throw new JsonException($"{nameof(CustomFieldDataType3)} contains no valid value to serialize.");
        }
    }
}
