using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models.OneOf;

/// <summary>
/// Input for segment creation. Use <c>subscriptions</c> or <c>emails</c> to create a manual segment from explicit lists, or <c>custom_fields</c> to create a dynamic segment filtered by custom field values.
/// </summary>
[JsonConverter(typeof(SegmentSubscriptionInput3Converter))]
public record SegmentSubscriptionInput3
{
    private readonly Optional<UnknownArm> _unknownValue;

    private SegmentSubscriptionInput3(Optional<UnknownArm> unknownValue)
    {
        _unknownValue = unknownValue;
    }

    internal static SegmentSubscriptionInput3 Unknown(JsonElement value) =>
        new(Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SegmentSubscriptionInput3)} holds no value.")
        };

    public void Match(Action<JsonElement> otherwise)
    {
        if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SegmentSubscriptionInput3)} holds no value.");
    }
}

file sealed class SegmentSubscriptionInput3Converter : JsonConverter<SegmentSubscriptionInput3>
{
    public override SegmentSubscriptionInput3 Read(ref Utf8JsonReader reader,
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
            _ => SegmentSubscriptionInput3.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, SegmentSubscriptionInput3 value, JsonSerializerOptions options)
    {
        if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SegmentSubscriptionInput3)} contains no valid value to serialize.");
        }
    }
}
