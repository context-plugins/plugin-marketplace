using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BundleSocial.Core.Extensions;
using BundleSocial.Core.Models;

namespace BundleSocial.Models.AnyOf;

[JsonConverter(typeof(PlatformData8AdditionalFieldsConverter))]
public record PlatformData8AdditionalFields
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<double> _doubleValue;

    private readonly Optional<bool> _boolValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PlatformData8AdditionalFields(Optional<string> stringValue,
        Optional<double> doubleValue,
        Optional<bool> boolValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _doubleValue = doubleValue;
        _boolValue = boolValue;
        _unknownValue = unknownValue;
    }

    public static PlatformData8AdditionalFields String(string value) =>
        new(Optional<string>.Some(value), default, default, default);

    public static PlatformData8AdditionalFields Double(double value) =>
        new(default, Optional<double>.Some(value), default, default);

    public static PlatformData8AdditionalFields Bool(bool value) =>
        new(default, default, Optional<bool>.Some(value), default);

    internal static PlatformData8AdditionalFields Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PlatformData8AdditionalFields(string value) => String(value);

    public static implicit operator PlatformData8AdditionalFields(double value) => Double(value);

    public static implicit operator PlatformData8AdditionalFields(bool value) => Bool(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<double, TResult> onDouble,
        Func<bool, TResult> onBool,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PlatformData8AdditionalFields)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<double> onDouble,
        Action<bool> onBool,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PlatformData8AdditionalFields)} holds no value.");
    }
}

file sealed class PlatformData8AdditionalFieldsConverter : JsonConverter<PlatformData8AdditionalFields>
{
    public override PlatformData8AdditionalFields Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return PlatformData8AdditionalFields.String(value);
        }
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return PlatformData8AdditionalFields.Double(doubleValue);
        }
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return PlatformData8AdditionalFields.Bool(boolValue);
        }
        return PlatformData8AdditionalFields.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        PlatformData8AdditionalFields value,
        JsonSerializerOptions options)
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
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PlatformData8AdditionalFields)} contains no valid value to serialize.");
        }
    }
}
