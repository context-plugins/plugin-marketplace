using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models.OneOf;

/// <summary>
/// A block in the post content.
/// </summary>
[JsonConverter(typeof(Block17Converter))]
public record Block17
{
    private readonly Optional<UnknownArm> _unknownValue;

    private Block17(Optional<UnknownArm> unknownValue)
    {
        _unknownValue = unknownValue;
    }

    internal static Block17 Unknown(JsonElement value) => new(Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Block17)} holds no value.")
        };

    public void Match(Action<JsonElement> otherwise)
    {
        if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Block17)} holds no value.");
    }
}

file sealed class Block17Converter : JsonConverter<Block17>
{
    public override Block17 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("type", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'type' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            _ => Block17.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, Block17 value, JsonSerializerOptions options)
    {
        if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Block17)} contains no valid value to serialize.");
        }
    }
}
