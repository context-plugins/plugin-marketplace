using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using OddsRelay.Core.Extensions;
using OddsRelay.Core.Models;

namespace OddsRelay.Models.AnyOf;

[JsonConverter(typeof(V2OddsResponseConverter))]
public record V2OddsResponse
{
    private readonly Optional<MatchedEnvelope> _matchedEnvelopeValue;

    private readonly Optional<IReadOnlyList<MatchedEvent>> _listOfMatchedEventValue;

    private readonly Optional<Quote> _quoteValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private V2OddsResponse(Optional<MatchedEnvelope> matchedEnvelopeValue,
        Optional<IReadOnlyList<MatchedEvent>> listOfMatchedEventValue,
        Optional<Quote> quoteValue,
        Optional<UnknownArm> unknownValue)
    {
        _matchedEnvelopeValue = matchedEnvelopeValue;
        _listOfMatchedEventValue = listOfMatchedEventValue;
        _quoteValue = quoteValue;
        _unknownValue = unknownValue;
    }

    public static V2OddsResponse MatchedEnvelope(MatchedEnvelope value) =>
        new(Optional<MatchedEnvelope>.Some(value), default, default, default);

    public static V2OddsResponse ListOfMatchedEvent(IReadOnlyList<MatchedEvent> value) =>
        new(default, Optional<IReadOnlyList<MatchedEvent>>.Some(value), default, default);

    public static V2OddsResponse Quote(Quote value) => new(default, default, Optional<Quote>.Some(value), default);

    internal static V2OddsResponse Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMatchedEnvelope([NotNullWhen(true)] out MatchedEnvelope? value) =>
        _matchedEnvelopeValue.TryGetValue(out value);

    public bool TryGetListOfMatchedEvent([NotNullWhen(true)] out IReadOnlyList<MatchedEvent>? value) =>
        _listOfMatchedEventValue.TryGetValue(out value);

    public bool TryGetQuote([NotNullWhen(true)] out Quote? value) => _quoteValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator V2OddsResponse(MatchedEnvelope value) => MatchedEnvelope(value);

    public static implicit operator V2OddsResponse(Quote value) => Quote(value);

    public TResult Match<TResult>(Func<MatchedEnvelope, TResult> onMatchedEnvelope,
        Func<IReadOnlyList<MatchedEvent>, TResult> onListOfMatchedEvent,
        Func<Quote, TResult> onQuote,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMatchedEnvelope(out var matchedEnvelopeValue) => onMatchedEnvelope(matchedEnvelopeValue),
            _ when TryGetListOfMatchedEvent(out var listOfMatchedEventValue) => onListOfMatchedEvent(
                listOfMatchedEventValue),
            _ when TryGetQuote(out var quoteValue) => onQuote(quoteValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(V2OddsResponse)} holds no value.")
        };

    public void Match(Action<MatchedEnvelope> onMatchedEnvelope,
        Action<IReadOnlyList<MatchedEvent>> onListOfMatchedEvent,
        Action<Quote> onQuote,
        Action<JsonElement> otherwise)
    {
        if (TryGetMatchedEnvelope(out var matchedEnvelopeValue)) onMatchedEnvelope(matchedEnvelopeValue);
        else if (TryGetListOfMatchedEvent(out var listOfMatchedEventValue)) onListOfMatchedEvent(
            listOfMatchedEventValue);
        else if (TryGetQuote(out var quoteValue)) onQuote(quoteValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(V2OddsResponse)} holds no value.");
    }
}

file sealed class V2OddsResponseConverter : JsonConverter<V2OddsResponse>
{
    public override V2OddsResponse Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<MatchedEnvelope>(root, options, out var matchedEnvelopeValue))
        {
            return V2OddsResponse.MatchedEnvelope(matchedEnvelopeValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<MatchedEvent>>(root, options, out var listOfMatchedEventValue))
        {
            return V2OddsResponse.ListOfMatchedEvent(listOfMatchedEventValue);
        }
        if (JsonSerializer.TryDeserialize<Quote>(root, options, out var quoteValue))
        {
            return V2OddsResponse.Quote(quoteValue);
        }
        return V2OddsResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, V2OddsResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetMatchedEnvelope(out var matchedEnvelopeValue))
        {
            JsonSerializer.Serialize(writer, matchedEnvelopeValue, options);
        }
        else if (value.TryGetListOfMatchedEvent(out var listOfMatchedEventValue))
        {
            JsonSerializer.Serialize(writer, listOfMatchedEventValue, options);
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
            throw new JsonException($"{nameof(V2OddsResponse)} contains no valid value to serialize.");
        }
    }
}
