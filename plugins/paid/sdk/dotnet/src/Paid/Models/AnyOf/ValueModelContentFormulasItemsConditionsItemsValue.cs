using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Paid.Core.Extensions;
using Paid.Core.Models;

namespace Paid.Models.AnyOf;

[JsonConverter(typeof(ValueModelContentFormulasItemsConditionsItemsValueConverter))]
public record ValueModelContentFormulasItemsConditionsItemsValue
{
    private readonly Optional<double> _doubleValue;

    private readonly Optional<string> _stringValue;

    private readonly Optional<bool> _boolValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ValueModelContentFormulasItemsConditionsItemsValue(Optional<double> doubleValue,
        Optional<string> stringValue,
        Optional<bool> boolValue,
        Optional<UnknownArm> unknownValue)
    {
        _doubleValue = doubleValue;
        _stringValue = stringValue;
        _boolValue = boolValue;
        _unknownValue = unknownValue;
    }

    public static ValueModelContentFormulasItemsConditionsItemsValue Double(double value) =>
        new(Optional<double>.Some(value), default, default, default);

    public static ValueModelContentFormulasItemsConditionsItemsValue String(string value) =>
        new(default, Optional<string>.Some(value), default, default);

    public static ValueModelContentFormulasItemsConditionsItemsValue Bool(bool value) =>
        new(default, default, Optional<bool>.Some(value), default);

    internal static ValueModelContentFormulasItemsConditionsItemsValue Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ValueModelContentFormulasItemsConditionsItemsValue(double value) => Double(value);

    public static implicit operator ValueModelContentFormulasItemsConditionsItemsValue(string value) => String(value);

    public static implicit operator ValueModelContentFormulasItemsConditionsItemsValue(bool value) => Bool(value);

    public TResult Match<TResult>(Func<double, TResult> onDouble,
        Func<string, TResult> onString,
        Func<bool, TResult> onBool,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(ValueModelContentFormulasItemsConditionsItemsValue)} holds no value.")
        };

    public void Match(Action<double> onDouble,
        Action<string> onString,
        Action<bool> onBool,
        Action<JsonElement> otherwise)
    {
        if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException(
            $"{nameof(ValueModelContentFormulasItemsConditionsItemsValue)} holds no value.");
    }
}

file sealed class ValueModelContentFormulasItemsConditionsItemsValueConverter : JsonConverter<ValueModelContentFormulasItemsConditionsItemsValue>
{
    public override ValueModelContentFormulasItemsConditionsItemsValue Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return ValueModelContentFormulasItemsConditionsItemsValue.Double(doubleValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return ValueModelContentFormulasItemsConditionsItemsValue.String(value);
        }
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return ValueModelContentFormulasItemsConditionsItemsValue.Bool(boolValue);
        }
        return ValueModelContentFormulasItemsConditionsItemsValue.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        ValueModelContentFormulasItemsConditionsItemsValue value,
        JsonSerializerOptions options)
    {
        if (value.TryGetDouble(out var doubleValue))
        {
            JsonSerializer.Serialize(writer, doubleValue, options);
        }
        else if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
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
            throw new JsonException(
                $"{nameof(ValueModelContentFormulasItemsConditionsItemsValue)} contains no valid value to serialize.");
        }
    }
}
