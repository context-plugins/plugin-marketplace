using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using AlphAi.Core.Extensions;
using AlphAi.Core.Models;

namespace AlphAi.Models.AnyOf;

[JsonConverter(typeof(EventDateConverter))]
public record EventDate
{
    private readonly Optional<DateTimeOffset> _dateValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private EventDate(Optional<DateTimeOffset> dateValue, Optional<UnknownArm> unknownValue)
    {
        _dateValue = dateValue;
        _unknownValue = unknownValue;
    }

    public static EventDate Date(DateTimeOffset value) => new(Optional<DateTimeOffset>.Some(value), default);

    internal static EventDate Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDate(out DateTimeOffset value) => _dateValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator EventDate(DateTimeOffset value) => Date(value);

    public TResult Match<TResult>(Func<DateTimeOffset, TResult> onDate, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDate(out var dateValue) => onDate(dateValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(EventDate)} holds no value.")
        };

    public void Match(Action<DateTimeOffset> onDate, Action<JsonElement> otherwise)
    {
        if (TryGetDate(out var dateValue)) onDate(dateValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(EventDate)} holds no value.");
    }
}

file sealed class EventDateConverter : JsonConverter<EventDate>
{
    public override EventDate Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DateTimeOffset>(root, options, out var dateValue))
        {
            return EventDate.Date(dateValue);
        }
        return EventDate.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, EventDate value, JsonSerializerOptions options)
    {
        if (value.TryGetDate(out var dateValue))
        {
            JsonSerializer.Serialize(writer, dateValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(EventDate)} contains no valid value to serialize.");
        }
    }
}
