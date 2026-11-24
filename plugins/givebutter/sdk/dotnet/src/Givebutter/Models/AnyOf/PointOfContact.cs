using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Givebutter.Core.Extensions;
using Givebutter.Core.Models;

namespace Givebutter.Models.AnyOf;

[JsonConverter(typeof(PointOfContactConverter))]
public record PointOfContact
{
    private readonly Optional<PointOfContactResource> _pointOfContactResourceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PointOfContact(Optional<PointOfContactResource> pointOfContactResourceValue,
        Optional<UnknownArm> unknownValue)
    {
        _pointOfContactResourceValue = pointOfContactResourceValue;
        _unknownValue = unknownValue;
    }

    public static PointOfContact PointOfContactResource(PointOfContactResource value) =>
        new(Optional<PointOfContactResource>.Some(value), default);

    internal static PointOfContact Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetPointOfContactResource([NotNullWhen(true)] out PointOfContactResource? value) =>
        _pointOfContactResourceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PointOfContact(PointOfContactResource value) => PointOfContactResource(value);

    public TResult Match<TResult>(Func<PointOfContactResource, TResult> onPointOfContactResource,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetPointOfContactResource(out var pointOfContactResourceValue) => onPointOfContactResource(
                pointOfContactResourceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PointOfContact)} holds no value.")
        };

    public void Match(Action<PointOfContactResource> onPointOfContactResource, Action<JsonElement> otherwise)
    {
        if (TryGetPointOfContactResource(out var pointOfContactResourceValue)) onPointOfContactResource(
            pointOfContactResourceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PointOfContact)} holds no value.");
    }
}

file sealed class PointOfContactConverter : JsonConverter<PointOfContact>
{
    public override PointOfContact Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<PointOfContactResource>(root, options, out var pointOfContactResourceValue))
        {
            return PointOfContact.PointOfContactResource(pointOfContactResourceValue);
        }
        return PointOfContact.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, PointOfContact value, JsonSerializerOptions options)
    {
        if (value.TryGetPointOfContactResource(out var pointOfContactResourceValue))
        {
            JsonSerializer.Serialize(writer, pointOfContactResourceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PointOfContact)} contains no valid value to serialize.");
        }
    }
}
