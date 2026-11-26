using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using AlphAi.Core.Extensions;
using AlphAi.Core.Models;

namespace AlphAi.Models.AnyOf;

[JsonConverter(typeof(EventContextConverter))]
public record EventContext
{
    private readonly Optional<RadarTickerContext> _radarTickerContextValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private EventContext(Optional<RadarTickerContext> radarTickerContextValue, Optional<UnknownArm> unknownValue)
    {
        _radarTickerContextValue = radarTickerContextValue;
        _unknownValue = unknownValue;
    }

    public static EventContext RadarTickerContext(RadarTickerContext value) =>
        new(Optional<RadarTickerContext>.Some(value), default);

    internal static EventContext Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetRadarTickerContext([NotNullWhen(true)] out RadarTickerContext? value) =>
        _radarTickerContextValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator EventContext(RadarTickerContext value) => RadarTickerContext(value);

    public TResult Match<TResult>(Func<RadarTickerContext, TResult> onRadarTickerContext,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetRadarTickerContext(out var radarTickerContextValue) => onRadarTickerContext(
                radarTickerContextValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(EventContext)} holds no value.")
        };

    public void Match(Action<RadarTickerContext> onRadarTickerContext, Action<JsonElement> otherwise)
    {
        if (TryGetRadarTickerContext(out var radarTickerContextValue)) onRadarTickerContext(radarTickerContextValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(EventContext)} holds no value.");
    }
}

file sealed class EventContextConverter : JsonConverter<EventContext>
{
    public override EventContext Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<RadarTickerContext>(root, options, out var radarTickerContextValue))
        {
            return EventContext.RadarTickerContext(radarTickerContextValue);
        }
        return EventContext.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, EventContext value, JsonSerializerOptions options)
    {
        if (value.TryGetRadarTickerContext(out var radarTickerContextValue))
        {
            JsonSerializer.Serialize(writer, radarTickerContextValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(EventContext)} contains no valid value to serialize.");
        }
    }
}
