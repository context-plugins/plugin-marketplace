using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using OddsRelay.Core.Extensions;
using OddsRelay.Core.Models;

namespace OddsRelay.Models.AnyOf;

[JsonConverter(typeof(V2OddsRawResponseConverter))]
public record V2OddsRawResponse
{
    private readonly Optional<RawEnvelope> _rawEnvelopeValue;

    private readonly Optional<IReadOnlyList<RawEvent>> _listOfRawEventValue;

    private readonly Optional<Quote> _quoteValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private V2OddsRawResponse(Optional<RawEnvelope> rawEnvelopeValue,
        Optional<IReadOnlyList<RawEvent>> listOfRawEventValue,
        Optional<Quote> quoteValue,
        Optional<UnknownArm> unknownValue)
    {
        _rawEnvelopeValue = rawEnvelopeValue;
        _listOfRawEventValue = listOfRawEventValue;
        _quoteValue = quoteValue;
        _unknownValue = unknownValue;
    }

    public static V2OddsRawResponse RawEnvelope(RawEnvelope value) =>
        new(Optional<RawEnvelope>.Some(value), default, default, default);

    public static V2OddsRawResponse ListOfRawEvent(IReadOnlyList<RawEvent> value) =>
        new(default, Optional<IReadOnlyList<RawEvent>>.Some(value), default, default);

    public static V2OddsRawResponse Quote(Quote value) => new(default, default, Optional<Quote>.Some(value), default);

    internal static V2OddsRawResponse Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetRawEnvelope([NotNullWhen(true)] out RawEnvelope? value) =>
        _rawEnvelopeValue.TryGetValue(out value);

    public bool TryGetListOfRawEvent([NotNullWhen(true)] out IReadOnlyList<RawEvent>? value) =>
        _listOfRawEventValue.TryGetValue(out value);

    public bool TryGetQuote([NotNullWhen(true)] out Quote? value) => _quoteValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator V2OddsRawResponse(RawEnvelope value) => RawEnvelope(value);

    public static implicit operator V2OddsRawResponse(Quote value) => Quote(value);

    public TResult Match<TResult>(Func<RawEnvelope, TResult> onRawEnvelope,
        Func<IReadOnlyList<RawEvent>, TResult> onListOfRawEvent,
        Func<Quote, TResult> onQuote,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetRawEnvelope(out var rawEnvelopeValue) => onRawEnvelope(rawEnvelopeValue),
            _ when TryGetListOfRawEvent(out var listOfRawEventValue) => onListOfRawEvent(listOfRawEventValue),
            _ when TryGetQuote(out var quoteValue) => onQuote(quoteValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(V2OddsRawResponse)} holds no value.")
        };

    public void Match(Action<RawEnvelope> onRawEnvelope,
        Action<IReadOnlyList<RawEvent>> onListOfRawEvent,
        Action<Quote> onQuote,
        Action<JsonElement> otherwise)
    {
        if (TryGetRawEnvelope(out var rawEnvelopeValue)) onRawEnvelope(rawEnvelopeValue);
        else if (TryGetListOfRawEvent(out var listOfRawEventValue)) onListOfRawEvent(listOfRawEventValue);
        else if (TryGetQuote(out var quoteValue)) onQuote(quoteValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(V2OddsRawResponse)} holds no value.");
    }
}

file sealed class V2OddsRawResponseConverter : JsonConverter<V2OddsRawResponse>
{
    public override V2OddsRawResponse Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<RawEnvelope>(root, options, out var rawEnvelopeValue))
        {
            return V2OddsRawResponse.RawEnvelope(rawEnvelopeValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<RawEvent>>(root, options, out var listOfRawEventValue))
        {
            return V2OddsRawResponse.ListOfRawEvent(listOfRawEventValue);
        }
        if (JsonSerializer.TryDeserialize<Quote>(root, options, out var quoteValue))
        {
            return V2OddsRawResponse.Quote(quoteValue);
        }
        return V2OddsRawResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, V2OddsRawResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetRawEnvelope(out var rawEnvelopeValue))
        {
            JsonSerializer.Serialize(writer, rawEnvelopeValue, options);
        }
        else if (value.TryGetListOfRawEvent(out var listOfRawEventValue))
        {
            JsonSerializer.Serialize(writer, listOfRawEventValue, options);
        }
        else if (value.TryGetQuote(out var quoteValue))
        {
            JsonSerializer.Serialize(writer, quoteValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(V2OddsRawResponse)} contains no valid value to serialize.");
        }
    }
}
