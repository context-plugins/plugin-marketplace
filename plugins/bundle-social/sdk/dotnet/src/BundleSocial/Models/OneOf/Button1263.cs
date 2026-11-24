using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models.OneOf;

[JsonConverter(typeof(Button1263Converter))]
public record Button1263
{
    private readonly Optional<UnknownArm> _unknownValue;

    private Button1263(Optional<UnknownArm> unknownValue)
    {
        _unknownValue = unknownValue;
    }

    internal static Button1263 Unknown(JsonElement value) => new(Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Button1263)} holds no value.")
        };

    public void Match(Action<JsonElement> otherwise)
    {
        if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Button1263)} holds no value.");
    }
}

file sealed class Button1263Converter : JsonConverter<Button1263>
{
    public override Button1263 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("type", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'type' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            _ => Button1263.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, Button1263 value, JsonSerializerOptions options)
    {
        if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Button1263)} contains no valid value to serialize.");
        }
    }
}
