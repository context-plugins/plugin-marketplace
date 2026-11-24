using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BundleSocial.Core.Extensions;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation;

namespace BundleSocial.Models.AnyOf;

[JsonConverter(typeof(CloseTime1Converter))]
public record CloseTime1
{
    private readonly Optional<CloseTime> _closeTimeValue;

    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CloseTime1(Optional<CloseTime> closeTimeValue,
        Optional<string> stringValue,
        Optional<UnknownArm> unknownValue)
    {
        _closeTimeValue = closeTimeValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static CloseTime1 CloseTime(CloseTime value) => new(Optional<CloseTime>.Some(value), default, default);

    public static CloseTime1 String(string value) => new(default, Optional<string>.Some(value), default);

    internal static CloseTime1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCloseTime([NotNullWhen(true)] out CloseTime? value) => _closeTimeValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CloseTime1(CloseTime value) => CloseTime(value);

    public static implicit operator CloseTime1(string value) => String(value);

    public TResult Match<TResult>(Func<CloseTime, TResult> onCloseTime,
        Func<string, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCloseTime(out var closeTimeValue) => onCloseTime(closeTimeValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CloseTime1)} holds no value.")
        };

    public void Match(Action<CloseTime> onCloseTime, Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetCloseTime(out var closeTimeValue)) onCloseTime(closeTimeValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CloseTime1)} holds no value.");
    }
}

file sealed class CloseTime1Converter : JsonConverter<CloseTime1>
{
    public override CloseTime1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CloseTime>(root, options, out var closeTimeValue))
        {
            return CloseTime1.CloseTime(closeTimeValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            if (value.MatchesPattern("^(?:[01]?\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d)?$"))
            {
                return CloseTime1.String(value);
            }
        }
        return CloseTime1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CloseTime1 value, JsonSerializerOptions options)
    {
        if (value.TryGetCloseTime(out var closeTimeValue))
        {
            JsonSerializer.Serialize(writer, closeTimeValue, options);
        }
        else if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CloseTime1)} contains no valid value to serialize.");
        }
    }
}
