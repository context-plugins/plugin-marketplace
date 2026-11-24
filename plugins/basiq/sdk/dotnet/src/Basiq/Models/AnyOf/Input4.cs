using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Basiq.Core.Extensions;
using Basiq.Core.Models;

namespace Basiq.Models.AnyOf;

/// <summary>
/// The input value being verified
/// </summary>
[JsonConverter(typeof(Input4Converter))]
public record Input4
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Input4(Optional<string> stringValue,
        Optional<object> anonymousObjectValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _anonymousObjectValue = anonymousObjectValue;
        _unknownValue = unknownValue;
    }

    public static Input4 String(string value) => new(Optional<string>.Some(value), default, default);

    public static Input4 AnonymousObject(object value) => new(default, Optional<object>.Some(value), default);

    internal static Input4 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Input4(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<object, TResult> onAnonymousObject,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Input4)} holds no value.")
        };

    public void Match(Action<string> onString, Action<object> onAnonymousObject, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Input4)} holds no value.");
    }
}

file sealed class Input4Converter : JsonConverter<Input4>
{
    public override Input4 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Input4.String(value);
        }
        if (JsonSerializer.TryDeserialize<object>(root, options, out var anonymousObjectValue))
        {
            return Input4.AnonymousObject(anonymousObjectValue);
        }
        return Input4.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Input4 value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
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
            throw new JsonException($"{nameof(Input4)} contains no valid value to serialize.");
        }
    }
}
