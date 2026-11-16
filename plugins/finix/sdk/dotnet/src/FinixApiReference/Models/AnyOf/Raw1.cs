using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

/// <summary>
/// Raw response from the processor.
/// </summary>
[JsonConverter(typeof(Raw1Converter))]
public record Raw1
{
    private readonly Optional<object?> _anonymousObjectValue;

    private readonly Optional<string?> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Raw1(Optional<object?> anonymousObjectValue,
        Optional<string?> stringValue,
        Optional<UnknownArm> unknownValue)
    {
        _anonymousObjectValue = anonymousObjectValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static Raw1 AnonymousObject(object? value) => new(Optional<object?>.Some(value), default, default);

    public static Raw1 String(string? value) => new(default, Optional<string?>.Some(value), default);

    internal static Raw1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAnonymousObject(out object? value) => _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetString(out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Raw1(string? value) => String(value);

    public TResult Match<TResult>(Func<object?, TResult> onAnonymousObject,
        Func<string?, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Raw1)} holds no value.")
        };

    public void Match(Action<object?> onAnonymousObject, Action<string?> onString, Action<JsonElement> otherwise)
    {
        if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Raw1)} holds no value.");
    }
}

file sealed class Raw1Converter : JsonConverter<Raw1>
{
    public override Raw1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<object?>(root, options, out var anonymousObjectValue))
        {
            return Raw1.AnonymousObject(anonymousObjectValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Raw1.String(value);
        }
        return Raw1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Raw1 value, JsonSerializerOptions options)
    {
        if (value.TryGetAnonymousObject(out var anonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, anonymousObjectValue, options);
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
            throw new JsonException($"{nameof(Raw1)} contains no valid value to serialize.");
        }
    }
}
