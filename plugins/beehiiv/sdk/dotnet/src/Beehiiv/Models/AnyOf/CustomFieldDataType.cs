using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Beehiiv.Core.Extensions;
using Beehiiv.Core.Models;

namespace Beehiiv.Models.AnyOf;

/// <summary>
/// The value of the custom field, The value stored for the subscription, The value stored for the subscription, The value of the custom field, The value stored for the subscription
/// </summary>
[JsonConverter(typeof(CustomFieldDataTypeConverter))]
public record CustomFieldDataType
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<double> _doubleValue;

    private readonly Optional<bool> _boolValue;

    private readonly Optional<IReadOnlyList<string>> _listOfStringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CustomFieldDataType(Optional<string> stringValue,
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

    public static CustomFieldDataType String(string value) =>
        new(Optional<string>.Some(value), default, default, default, default);

    public static CustomFieldDataType Double(double value) =>
        new(default, Optional<double>.Some(value), default, default, default);

    public static CustomFieldDataType Bool(bool value) =>
        new(default, default, Optional<bool>.Some(value), default, default);

    public static CustomFieldDataType ListOfString(IReadOnlyList<string> value) =>
        new(default, default, default, Optional<IReadOnlyList<string>>.Some(value), default);

    internal static CustomFieldDataType Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetListOfString([NotNullWhen(true)] out IReadOnlyList<string>? value) =>
        _listOfStringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CustomFieldDataType(string value) => String(value);

    public static implicit operator CustomFieldDataType(double value) => Double(value);

    public static implicit operator CustomFieldDataType(bool value) => Bool(value);

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
            _ => throw new InvalidOperationException($"{nameof(CustomFieldDataType)} holds no value.")
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
        else throw new InvalidOperationException($"{nameof(CustomFieldDataType)} holds no value.");
    }
}

file sealed class CustomFieldDataTypeConverter : JsonConverter<CustomFieldDataType>
{
    public override CustomFieldDataType Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return CustomFieldDataType.String(value);
        }
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return CustomFieldDataType.Double(doubleValue);
        }
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return CustomFieldDataType.Bool(boolValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<string>>(root, options, out var listOfStringValue))
        {
            return CustomFieldDataType.ListOfString(listOfStringValue);
        }
        return CustomFieldDataType.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CustomFieldDataType value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(CustomFieldDataType)} contains no valid value to serialize.");
        }
    }
}
