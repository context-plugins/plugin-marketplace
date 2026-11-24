using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using OddsRelay.Core.Extensions;
using OddsRelay.Core.Models;

namespace OddsRelay.Models.AnyOf;

[JsonConverter(typeof(V2BookmakersResponse1Converter))]
public record V2BookmakersResponse1
{
    private readonly Optional<V2BookmakersResponse> _v2BookmakersResponseValue;

    private readonly Optional<IReadOnlyList<Venue>> _listOfVenueValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private V2BookmakersResponse1(Optional<V2BookmakersResponse> v2BookmakersResponseValue,
        Optional<IReadOnlyList<Venue>> listOfVenueValue,
        Optional<UnknownArm> unknownValue)
    {
        _v2BookmakersResponseValue = v2BookmakersResponseValue;
        _listOfVenueValue = listOfVenueValue;
        _unknownValue = unknownValue;
    }

    public static V2BookmakersResponse1 V2BookmakersResponse(V2BookmakersResponse value) =>
        new(Optional<V2BookmakersResponse>.Some(value), default, default);

    public static V2BookmakersResponse1 ListOfVenue(IReadOnlyList<Venue> value) =>
        new(default, Optional<IReadOnlyList<Venue>>.Some(value), default);

    internal static V2BookmakersResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetV2BookmakersResponse([NotNullWhen(true)] out V2BookmakersResponse? value) =>
        _v2BookmakersResponseValue.TryGetValue(out value);

    public bool TryGetListOfVenue([NotNullWhen(true)] out IReadOnlyList<Venue>? value) =>
        _listOfVenueValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator V2BookmakersResponse1(V2BookmakersResponse value) => V2BookmakersResponse(value);

    public TResult Match<TResult>(Func<V2BookmakersResponse, TResult> onV2BookmakersResponse,
        Func<IReadOnlyList<Venue>, TResult> onListOfVenue,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV2BookmakersResponse(out var v2BookmakersResponseValue) => onV2BookmakersResponse(
                v2BookmakersResponseValue),
            _ when TryGetListOfVenue(out var listOfVenueValue) => onListOfVenue(listOfVenueValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(V2BookmakersResponse1)} holds no value.")
        };

    public void Match(Action<V2BookmakersResponse> onV2BookmakersResponse,
        Action<IReadOnlyList<Venue>> onListOfVenue,
        Action<JsonElement> otherwise)
    {
        if (TryGetV2BookmakersResponse(out var v2BookmakersResponseValue)) onV2BookmakersResponse(
            v2BookmakersResponseValue);
        else if (TryGetListOfVenue(out var listOfVenueValue)) onListOfVenue(listOfVenueValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(V2BookmakersResponse1)} holds no value.");
    }
}

file sealed class V2BookmakersResponse1Converter : JsonConverter<V2BookmakersResponse1>
{
    public override V2BookmakersResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<V2BookmakersResponse>(root, options, out var v2BookmakersResponseValue))
        {
            return V2BookmakersResponse1.V2BookmakersResponse(v2BookmakersResponseValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<Venue>>(root, options, out var listOfVenueValue))
        {
            return V2BookmakersResponse1.ListOfVenue(listOfVenueValue);
        }
        return V2BookmakersResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, V2BookmakersResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetV2BookmakersResponse(out var v2BookmakersResponseValue))
        {
            JsonSerializer.Serialize(writer, v2BookmakersResponseValue, options);
        }
        else if (value.TryGetListOfVenue(out var listOfVenueValue))
        {
            JsonSerializer.Serialize(writer, listOfVenueValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(V2BookmakersResponse1)} contains no valid value to serialize.");
        }
    }
}
