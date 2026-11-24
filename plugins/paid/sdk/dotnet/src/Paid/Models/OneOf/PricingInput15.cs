using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models.OneOf;

[JsonConverter(typeof(PricingInput15Converter))]
public record PricingInput15
{
    private readonly Optional<UnknownArm> _unknownValue;

    private PricingInput15(Optional<UnknownArm> unknownValue)
    {
        _unknownValue = unknownValue;
    }

    internal static PricingInput15 Unknown(JsonElement value) => new(Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PricingInput15)} holds no value.")
        };

    public void Match(Action<JsonElement> otherwise)
    {
        if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PricingInput15)} holds no value.");
    }
}

file sealed class PricingInput15Converter : JsonConverter<PricingInput15>
{
    public override PricingInput15 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("pricingType", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'pricingType' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            _ => PricingInput15.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, PricingInput15 value, JsonSerializerOptions options)
    {
        if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PricingInput15)} contains no valid value to serialize.");
        }
    }
}
