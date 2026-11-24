using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Extensions;
using BrowserUse.Core.Models;

namespace BrowserUse.Models.AnyOf;

/// <summary>
/// Optional JSON Schema for the final output (API runs only).
/// </summary>
[JsonConverter(typeof(Outputschema1Converter))]
public record Outputschema1
{
    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Outputschema1(Optional<object> anonymousObjectValue, Optional<UnknownArm> unknownValue)
    {
        _anonymousObjectValue = anonymousObjectValue;
        _unknownValue = unknownValue;
    }

    public static Outputschema1 AnonymousObject(object value) => new(Optional<object>.Some(value), default);

    internal static Outputschema1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<object, TResult> onAnonymousObject, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Outputschema1)} holds no value.")
        };

    public void Match(Action<object> onAnonymousObject, Action<JsonElement> otherwise)
    {
        if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Outputschema1)} holds no value.");
    }
}

file sealed class Outputschema1Converter : JsonConverter<Outputschema1>
{
    public override Outputschema1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<object>(root, options, out var anonymousObjectValue))
        {
            return Outputschema1.AnonymousObject(anonymousObjectValue);
        }
        return Outputschema1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Outputschema1 value, JsonSerializerOptions options)
    {
        if (value.TryGetAnonymousObject(out var anonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, anonymousObjectValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Outputschema1)} contains no valid value to serialize.");
        }
    }
}
