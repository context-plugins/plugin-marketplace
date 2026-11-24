using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Extensions;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models.AnyOf;

[JsonConverter(typeof(SinceConverter))]
public record Since
{
    private readonly Optional<DateTimeOffset> _dateValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Since(Optional<DateTimeOffset> dateValue, Optional<UnknownArm> unknownValue)
    {
        _dateValue = dateValue;
        _unknownValue = unknownValue;
    }

    public static Since Date(DateTimeOffset value) => new(Optional<DateTimeOffset>.Some(value), default);

    internal static Since Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDate(out DateTimeOffset value) => _dateValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Since(DateTimeOffset value) => Date(value);

    public TResult Match<TResult>(Func<DateTimeOffset, TResult> onDate, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDate(out var dateValue) => onDate(dateValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Since)} holds no value.")
        };

    public void Match(Action<DateTimeOffset> onDate, Action<JsonElement> otherwise)
    {
        if (TryGetDate(out var dateValue)) onDate(dateValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Since)} holds no value.");
    }
}

file sealed class SinceConverter : JsonConverter<Since>
{
    public override Since Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DateTimeOffset>(root, options, out var dateValue))
        {
            return Since.Date(dateValue);
        }
        return Since.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Since value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(Since)} contains no valid value to serialize.");
        }
    }
}
