using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using OddsRelay.Core.Extensions;
using OddsRelay.Core.Models;

namespace OddsRelay.Models.AnyOf;

[JsonConverter(typeof(V2EventsResponse1Converter))]
public record V2EventsResponse1
{
    private readonly Optional<V2EventsResponse> _v2EventsResponseValue;

    private readonly Optional<IReadOnlyList<Event>> _listOfEventValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private V2EventsResponse1(Optional<V2EventsResponse> v2EventsResponseValue,
        Optional<IReadOnlyList<Event>> listOfEventValue,
        Optional<UnknownArm> unknownValue)
    {
        _v2EventsResponseValue = v2EventsResponseValue;
        _listOfEventValue = listOfEventValue;
        _unknownValue = unknownValue;
    }

    public static V2EventsResponse1 V2EventsResponse(V2EventsResponse value) =>
        new(Optional<V2EventsResponse>.Some(value), default, default);

    public static V2EventsResponse1 ListOfEvent(IReadOnlyList<Event> value) =>
        new(default, Optional<IReadOnlyList<Event>>.Some(value), default);

    internal static V2EventsResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetV2EventsResponse([NotNullWhen(true)] out V2EventsResponse? value) =>
        _v2EventsResponseValue.TryGetValue(out value);

    public bool TryGetListOfEvent([NotNullWhen(true)] out IReadOnlyList<Event>? value) =>
        _listOfEventValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator V2EventsResponse1(V2EventsResponse value) => V2EventsResponse(value);

    public TResult Match<TResult>(Func<V2EventsResponse, TResult> onV2EventsResponse,
        Func<IReadOnlyList<Event>, TResult> onListOfEvent,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV2EventsResponse(out var v2EventsResponseValue) => onV2EventsResponse(v2EventsResponseValue),
            _ when TryGetListOfEvent(out var listOfEventValue) => onListOfEvent(listOfEventValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(V2EventsResponse1)} holds no value.")
        };

    public void Match(Action<V2EventsResponse> onV2EventsResponse,
        Action<IReadOnlyList<Event>> onListOfEvent,
        Action<JsonElement> otherwise)
    {
        if (TryGetV2EventsResponse(out var v2EventsResponseValue)) onV2EventsResponse(v2EventsResponseValue);
        else if (TryGetListOfEvent(out var listOfEventValue)) onListOfEvent(listOfEventValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(V2EventsResponse1)} holds no value.");
    }
}

file sealed class V2EventsResponse1Converter : JsonConverter<V2EventsResponse1>
{
    public override V2EventsResponse1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<V2EventsResponse>(root, options, out var v2EventsResponseValue))
        {
            return V2EventsResponse1.V2EventsResponse(v2EventsResponseValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<Event>>(root, options, out var listOfEventValue))
        {
            return V2EventsResponse1.ListOfEvent(listOfEventValue);
        }
        return V2EventsResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, V2EventsResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetV2EventsResponse(out var v2EventsResponseValue))
        {
            JsonSerializer.Serialize(writer, v2EventsResponseValue, options);
        }
        else if (value.TryGetListOfEvent(out var listOfEventValue))
        {
            JsonSerializer.Serialize(writer, listOfEventValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(V2EventsResponse1)} contains no valid value to serialize.");
        }
    }
}
