using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BundleSocial.Core.Extensions;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation;

namespace BundleSocial.Models.AnyOf;

[JsonConverter(typeof(OpenTime1Converter))]
public record OpenTime1
{
    private readonly Optional<OpenTime> _openTimeValue;

    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private OpenTime1(Optional<OpenTime> openTimeValue, Optional<string> stringValue, Optional<UnknownArm> unknownValue)
    {
        _openTimeValue = openTimeValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static OpenTime1 OpenTime(OpenTime value) => new(Optional<OpenTime>.Some(value), default, default);

    public static OpenTime1 String(string value) => new(default, Optional<string>.Some(value), default);

    internal static OpenTime1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetOpenTime([NotNullWhen(true)] out OpenTime? value) => _openTimeValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator OpenTime1(OpenTime value) => OpenTime(value);

    public static implicit operator OpenTime1(string value) => String(value);

    public TResult Match<TResult>(Func<OpenTime, TResult> onOpenTime,
        Func<string, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetOpenTime(out var openTimeValue) => onOpenTime(openTimeValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(OpenTime1)} holds no value.")
        };

    public void Match(Action<OpenTime> onOpenTime, Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetOpenTime(out var openTimeValue)) onOpenTime(openTimeValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(OpenTime1)} holds no value.");
    }
}

file sealed class OpenTime1Converter : JsonConverter<OpenTime1>
{
    public override OpenTime1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<OpenTime>(root, options, out var openTimeValue))
        {
            return OpenTime1.OpenTime(openTimeValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            if (value.MatchesPattern("^(?:[01]?\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d)?$"))
            {
                return OpenTime1.String(value);
            }
        }
        return OpenTime1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, OpenTime1 value, JsonSerializerOptions options)
    {
        if (value.TryGetOpenTime(out var openTimeValue))
        {
            JsonSerializer.Serialize(writer, openTimeValue, options);
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
            throw new JsonException($"{nameof(OpenTime1)} contains no valid value to serialize.");
        }
    }
}
