using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using OddsRelay.Core.Extensions;
using OddsRelay.Core.Models;

namespace OddsRelay.Models.AnyOf;

[JsonConverter(typeof(V2SportsResponse1Converter))]
public record V2SportsResponse1
{
    private readonly Optional<V2SportsResponse> _v2SportsResponseValue;

    private readonly Optional<IReadOnlyList<Sport>> _listOfSportValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private V2SportsResponse1(Optional<V2SportsResponse> v2SportsResponseValue,
        Optional<IReadOnlyList<Sport>> listOfSportValue,
        Optional<UnknownArm> unknownValue)
    {
        _v2SportsResponseValue = v2SportsResponseValue;
        _listOfSportValue = listOfSportValue;
        _unknownValue = unknownValue;
    }

    public static V2SportsResponse1 V2SportsResponse(V2SportsResponse value) =>
        new(Optional<V2SportsResponse>.Some(value), default, default);

    public static V2SportsResponse1 ListOfSport(IReadOnlyList<Sport> value) =>
        new(default, Optional<IReadOnlyList<Sport>>.Some(value), default);

    internal static V2SportsResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetV2SportsResponse([NotNullWhen(true)] out V2SportsResponse? value) =>
        _v2SportsResponseValue.TryGetValue(out value);

    public bool TryGetListOfSport([NotNullWhen(true)] out IReadOnlyList<Sport>? value) =>
        _listOfSportValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator V2SportsResponse1(V2SportsResponse value) => V2SportsResponse(value);

    public TResult Match<TResult>(Func<V2SportsResponse, TResult> onV2SportsResponse,
        Func<IReadOnlyList<Sport>, TResult> onListOfSport,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV2SportsResponse(out var v2SportsResponseValue) => onV2SportsResponse(v2SportsResponseValue),
            _ when TryGetListOfSport(out var listOfSportValue) => onListOfSport(listOfSportValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(V2SportsResponse1)} holds no value.")
        };

    public void Match(Action<V2SportsResponse> onV2SportsResponse,
        Action<IReadOnlyList<Sport>> onListOfSport,
        Action<JsonElement> otherwise)
    {
        if (TryGetV2SportsResponse(out var v2SportsResponseValue)) onV2SportsResponse(v2SportsResponseValue);
        else if (TryGetListOfSport(out var listOfSportValue)) onListOfSport(listOfSportValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(V2SportsResponse1)} holds no value.");
    }
}

file sealed class V2SportsResponse1Converter : JsonConverter<V2SportsResponse1>
{
    public override V2SportsResponse1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<V2SportsResponse>(root, options, out var v2SportsResponseValue))
        {
            return V2SportsResponse1.V2SportsResponse(v2SportsResponseValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<Sport>>(root, options, out var listOfSportValue))
        {
            return V2SportsResponse1.ListOfSport(listOfSportValue);
        }
        return V2SportsResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, V2SportsResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetV2SportsResponse(out var v2SportsResponseValue))
        {
            JsonSerializer.Serialize(writer, v2SportsResponseValue, options);
        }
        else if (value.TryGetListOfSport(out var listOfSportValue))
        {
            JsonSerializer.Serialize(writer, listOfSportValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(V2SportsResponse1)} contains no valid value to serialize.");
        }
    }
}
