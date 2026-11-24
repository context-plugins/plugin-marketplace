using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models.OneOf;

/// <summary>
/// A block in the post content that can be embedded within a column.
/// </summary>
[JsonConverter(typeof(EmbeddableBlocks6Converter))]
public record EmbeddableBlocks6
{
    private readonly Optional<UnknownArm> _unknownValue;

    private EmbeddableBlocks6(Optional<UnknownArm> unknownValue)
    {
        _unknownValue = unknownValue;
    }

    internal static EmbeddableBlocks6 Unknown(JsonElement value) =>
        new(Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(EmbeddableBlocks6)} holds no value.")
        };

    public void Match(Action<JsonElement> otherwise)
    {
        if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(EmbeddableBlocks6)} holds no value.");
    }
}

file sealed class EmbeddableBlocks6Converter : JsonConverter<EmbeddableBlocks6>
{
    public override EmbeddableBlocks6 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("type", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'type' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            _ => EmbeddableBlocks6.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, EmbeddableBlocks6 value, JsonSerializerOptions options)
    {
        if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(EmbeddableBlocks6)} contains no valid value to serialize.");
        }
    }
}
