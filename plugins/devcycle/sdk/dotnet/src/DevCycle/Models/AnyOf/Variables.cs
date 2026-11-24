using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DevCycle.Core.Extensions;
using DevCycle.Core.Models;

namespace DevCycle.Models.AnyOf;

[JsonConverter(typeof(VariablesConverter))]
public record Variables
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<double> _doubleValue;

    private readonly Optional<bool> _boolValue;

    private readonly Optional<JsonElement> _jsonElementValue;

    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Variables(Optional<string> stringValue,
        Optional<double> doubleValue,
        Optional<bool> boolValue,
        Optional<JsonElement> jsonElementValue,
        Optional<object> anonymousObjectValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _doubleValue = doubleValue;
        _boolValue = boolValue;
        _jsonElementValue = jsonElementValue;
        _anonymousObjectValue = anonymousObjectValue;
        _unknownValue = unknownValue;
    }

    public static Variables String(string value) =>
        new(Optional<string>.Some(value), default, default, default, default, default);

    public static Variables Double(double value) =>
        new(default, Optional<double>.Some(value), default, default, default, default);

    public static Variables Bool(bool value) =>
        new(default, default, Optional<bool>.Some(value), default, default, default);

    public static Variables JsonElement(JsonElement value) =>
        new(default, default, default, Optional<JsonElement>.Some(value), default, default);

    public static Variables AnonymousObject(object value) =>
        new(default, default, default, default, Optional<object>.Some(value), default);

    internal static Variables Unknown(JsonElement value) =>
        new(default, default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetJsonElement(out JsonElement value) => _jsonElementValue.TryGetValue(out value);

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Variables(string value) => String(value);

    public static implicit operator Variables(double value) => Double(value);

    public static implicit operator Variables(bool value) => Bool(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<double, TResult> onDouble,
        Func<bool, TResult> onBool,
        Func<JsonElement, TResult> onJsonElement,
        Func<object, TResult> onAnonymousObject,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetJsonElement(out var jsonElementValue) => onJsonElement(jsonElementValue),
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Variables)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<double> onDouble,
        Action<bool> onBool,
        Action<JsonElement> onJsonElement,
        Action<object> onAnonymousObject,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetJsonElement(out var jsonElementValue)) onJsonElement(jsonElementValue);
        else if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Variables)} holds no value.");
    }
}

file sealed class VariablesConverter : JsonConverter<Variables>
{
    public override Variables Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Variables.String(value);
        }
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return Variables.Double(doubleValue);
        }
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return Variables.Bool(boolValue);
        }
        if (JsonSerializer.TryDeserialize<JsonElement>(root, options, out var jsonElementValue))
        {
            return Variables.JsonElement(jsonElementValue);
        }
        if (JsonSerializer.TryDeserialize<object>(root, options, out var anonymousObjectValue))
        {
            return Variables.AnonymousObject(anonymousObjectValue);
        }
        return Variables.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Variables value, JsonSerializerOptions options)
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
        else if (value.TryGetJsonElement(out var jsonElementValue))
        {
            JsonSerializer.Serialize(writer, jsonElementValue, options);
        }
        else if (value.TryGetAnonymousObject(out var anonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, anonymousObjectValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Variables)} contains no valid value to serialize.");
        }
    }
}
