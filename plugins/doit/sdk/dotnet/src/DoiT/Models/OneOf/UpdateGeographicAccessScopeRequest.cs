using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models.OneOf;

[JsonConverter(typeof(UpdateGeographicAccessScopeRequestConverter))]
public record UpdateGeographicAccessScopeRequest
{
    private readonly Optional<UnknownArm> _unknownValue;

    private UpdateGeographicAccessScopeRequest(Optional<UnknownArm> unknownValue)
    {
        _unknownValue = unknownValue;
    }

    internal static UpdateGeographicAccessScopeRequest Unknown(JsonElement value) =>
        new(Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(UpdateGeographicAccessScopeRequest)} holds no value.")
        };

    public void Match(Action<JsonElement> otherwise)
    {
        if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(UpdateGeographicAccessScopeRequest)} holds no value.");
    }
}

file sealed class UpdateGeographicAccessScopeRequestConverter : JsonConverter<UpdateGeographicAccessScopeRequest>
{
    public override UpdateGeographicAccessScopeRequest Read(ref Utf8JsonReader reader,
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
            _ => UpdateGeographicAccessScopeRequest.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer,
        UpdateGeographicAccessScopeRequest value,
        JsonSerializerOptions options)
    {
        if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(UpdateGeographicAccessScopeRequest)} contains no valid value to serialize.");
        }
    }
}
