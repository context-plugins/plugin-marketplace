using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models.OneOf;

[JsonConverter(typeof(GeographicAccessScopeConverter))]
public record GeographicAccessScope
{
    private readonly Optional<UnknownArm> _unknownValue;

    private GeographicAccessScope(Optional<UnknownArm> unknownValue)
    {
        _unknownValue = unknownValue;
    }

    internal static GeographicAccessScope Unknown(JsonElement value) =>
        new(Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(GeographicAccessScope)} holds no value.")
        };

    public void Match(Action<JsonElement> otherwise)
    {
        if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(GeographicAccessScope)} holds no value.");
    }
}

file sealed class GeographicAccessScopeConverter : JsonConverter<GeographicAccessScope>
{
    public override GeographicAccessScope Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("type", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'type' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            _ => GeographicAccessScope.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, GeographicAccessScope value, JsonSerializerOptions options)
    {
        if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(GeographicAccessScope)} contains no valid value to serialize.");
        }
    }
}
