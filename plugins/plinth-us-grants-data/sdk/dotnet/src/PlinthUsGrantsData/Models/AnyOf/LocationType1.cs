using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.Enums;

namespace PlinthUsGrantsData.Models.AnyOf;

[JsonConverter(typeof(LocationType1Converter))]
public record LocationType1
{
    private readonly Optional<LocationType> _locationTypeValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private LocationType1(Optional<LocationType> locationTypeValue, Optional<UnknownArm> unknownValue)
    {
        _locationTypeValue = locationTypeValue;
        _unknownValue = unknownValue;
    }

    public static LocationType1 LocationType(LocationType value) => new(Optional<LocationType>.Some(value), default);

    internal static LocationType1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetLocationType([NotNullWhen(true)] out LocationType? value) =>
        _locationTypeValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator LocationType1(LocationType value) => LocationType(value);

    public TResult Match<TResult>(Func<LocationType, TResult> onLocationType, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetLocationType(out var locationTypeValue) => onLocationType(locationTypeValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(LocationType1)} holds no value.")
        };

    public void Match(Action<LocationType> onLocationType, Action<JsonElement> otherwise)
    {
        if (TryGetLocationType(out var locationTypeValue)) onLocationType(locationTypeValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(LocationType1)} holds no value.");
    }
}

file sealed class LocationType1Converter : JsonConverter<LocationType1>
{
    public override LocationType1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<LocationType>(root, options, out var locationTypeValue))
        {
            return LocationType1.LocationType(locationTypeValue);
        }
        return LocationType1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, LocationType1 value, JsonSerializerOptions options)
    {
        if (value.TryGetLocationType(out var locationTypeValue))
        {
            JsonSerializer.Serialize(writer, locationTypeValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(LocationType1)} contains no valid value to serialize.");
        }
    }
}
