using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models.OneOf;

[JsonConverter(typeof(Button3Converter))]
public record Button3
{
    private readonly Optional<UnknownArm> _unknownValue;

    private Button3(Optional<UnknownArm> unknownValue)
    {
        _unknownValue = unknownValue;
    }

    internal static Button3 Unknown(JsonElement value) => new(Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Button3)} holds no value.")
        };

    public void Match(Action<JsonElement> otherwise)
    {
        if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Button3)} holds no value.");
    }
}

file sealed class Button3Converter : JsonConverter<Button3>
{
    public override Button3 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("type", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'type' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            _ => Button3.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, Button3 value, JsonSerializerOptions options)
    {
        if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Button3)} contains no valid value to serialize.");
        }
    }
}
