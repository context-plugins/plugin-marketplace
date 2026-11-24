using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.Enums;

namespace PlinthUsGrantsData.Models.AnyOf;

[JsonConverter(typeof(GeoIdType1Converter))]
public record GeoIdType1
{
    private readonly Optional<GeoIdType> _geoIdTypeValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private GeoIdType1(Optional<GeoIdType> geoIdTypeValue, Optional<UnknownArm> unknownValue)
    {
        _geoIdTypeValue = geoIdTypeValue;
        _unknownValue = unknownValue;
    }

    public static GeoIdType1 GeoIdType(GeoIdType value) => new(Optional<GeoIdType>.Some(value), default);

    internal static GeoIdType1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetGeoIdType([NotNullWhen(true)] out GeoIdType? value) => _geoIdTypeValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator GeoIdType1(GeoIdType value) => GeoIdType(value);

    public TResult Match<TResult>(Func<GeoIdType, TResult> onGeoIdType, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGeoIdType(out var geoIdTypeValue) => onGeoIdType(geoIdTypeValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(GeoIdType1)} holds no value.")
        };

    public void Match(Action<GeoIdType> onGeoIdType, Action<JsonElement> otherwise)
    {
        if (TryGetGeoIdType(out var geoIdTypeValue)) onGeoIdType(geoIdTypeValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(GeoIdType1)} holds no value.");
    }
}

file sealed class GeoIdType1Converter : JsonConverter<GeoIdType1>
{
    public override GeoIdType1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<GeoIdType>(root, options, out var geoIdTypeValue))
        {
            return GeoIdType1.GeoIdType(geoIdTypeValue);
        }
        return GeoIdType1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, GeoIdType1 value, JsonSerializerOptions options)
    {
        if (value.TryGetGeoIdType(out var geoIdTypeValue))
        {
            JsonSerializer.Serialize(writer, geoIdTypeValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(GeoIdType1)} contains no valid value to serialize.");
        }
    }
}
