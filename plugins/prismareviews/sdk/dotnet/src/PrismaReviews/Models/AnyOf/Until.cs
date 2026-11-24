using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Extensions;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models.AnyOf;

[JsonConverter(typeof(UntilConverter))]
public record Until
{
    private readonly Optional<DateTimeOffset> _dateValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Until(Optional<DateTimeOffset> dateValue, Optional<UnknownArm> unknownValue)
    {
        _dateValue = dateValue;
        _unknownValue = unknownValue;
    }

    public static Until Date(DateTimeOffset value) => new(Optional<DateTimeOffset>.Some(value), default);

    internal static Until Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDate(out DateTimeOffset value) => _dateValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Until(DateTimeOffset value) => Date(value);

    public TResult Match<TResult>(Func<DateTimeOffset, TResult> onDate, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDate(out var dateValue) => onDate(dateValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Until)} holds no value.")
        };

    public void Match(Action<DateTimeOffset> onDate, Action<JsonElement> otherwise)
    {
        if (TryGetDate(out var dateValue)) onDate(dateValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Until)} holds no value.");
    }
}

file sealed class UntilConverter : JsonConverter<Until>
{
    public override Until Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DateTimeOffset>(root, options, out var dateValue))
        {
            return Until.Date(dateValue);
        }
        return Until.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Until value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(Until)} contains no valid value to serialize.");
        }
    }
}
