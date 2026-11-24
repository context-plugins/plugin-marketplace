using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models.OneOf;

[JsonConverter(typeof(Step2Converter))]
public record Step2
{
    private readonly Optional<UnknownArm> _unknownValue;

    private Step2(Optional<UnknownArm> unknownValue)
    {
        _unknownValue = unknownValue;
    }

    internal static Step2 Unknown(JsonElement value) => new(Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Step2)} holds no value.")
        };

    public void Match(Action<JsonElement> otherwise)
    {
        if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Step2)} holds no value.");
    }
}

file sealed class Step2Converter : JsonConverter<Step2>
{
    public override Step2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("type", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'type' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            _ => Step2.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, Step2 value, JsonSerializerOptions options)
    {
        if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Step2)} contains no valid value to serialize.");
        }
    }
}
