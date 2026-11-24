using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using OddsRelay.Core.Extensions;
using OddsRelay.Core.Models;

namespace OddsRelay.Models.AnyOf;

[JsonConverter(typeof(V2OddsEventResponseConverter))]
public record V2OddsEventResponse
{
    private readonly Optional<RawEvent> _rawEventValue;

    private readonly Optional<Quote> _quoteValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private V2OddsEventResponse(Optional<RawEvent> rawEventValue,
        Optional<Quote> quoteValue,
        Optional<UnknownArm> unknownValue)
    {
        _rawEventValue = rawEventValue;
        _quoteValue = quoteValue;
        _unknownValue = unknownValue;
    }

    public static V2OddsEventResponse RawEvent(RawEvent value) => new(Optional<RawEvent>.Some(value), default, default);

    public static V2OddsEventResponse Quote(Quote value) => new(default, Optional<Quote>.Some(value), default);

    internal static V2OddsEventResponse Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetRawEvent([NotNullWhen(true)] out RawEvent? value) => _rawEventValue.TryGetValue(out value);

    public bool TryGetQuote([NotNullWhen(true)] out Quote? value) => _quoteValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator V2OddsEventResponse(RawEvent value) => RawEvent(value);

    public static implicit operator V2OddsEventResponse(Quote value) => Quote(value);

    public TResult Match<TResult>(Func<RawEvent, TResult> onRawEvent,
        Func<Quote, TResult> onQuote,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetRawEvent(out var rawEventValue) => onRawEvent(rawEventValue),
            _ when TryGetQuote(out var quoteValue) => onQuote(quoteValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(V2OddsEventResponse)} holds no value.")
        };

    public void Match(Action<RawEvent> onRawEvent, Action<Quote> onQuote, Action<JsonElement> otherwise)
    {
        if (TryGetRawEvent(out var rawEventValue)) onRawEvent(rawEventValue);
        else if (TryGetQuote(out var quoteValue)) onQuote(quoteValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(V2OddsEventResponse)} holds no value.");
    }
}

file sealed class V2OddsEventResponseConverter : JsonConverter<V2OddsEventResponse>
{
    public override V2OddsEventResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<RawEvent>(root, options, out var rawEventValue))
        {
            return V2OddsEventResponse.RawEvent(rawEventValue);
        }
        if (JsonSerializer.TryDeserialize<Quote>(root, options, out var quoteValue))
        {
            return V2OddsEventResponse.Quote(quoteValue);
        }
        return V2OddsEventResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, V2OddsEventResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetRawEvent(out var rawEventValue))
        {
            JsonSerializer.Serialize(writer, rawEventValue, options);
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
            throw new JsonException($"{nameof(V2OddsEventResponse)} contains no valid value to serialize.");
        }
    }
}
