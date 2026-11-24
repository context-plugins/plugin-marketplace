using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Only return memories sourced from task, monitor, or FindAll runs completed at or after this RFC 3339 timestamp.
/// </summary>
[JsonConverter(typeof(SinceConverter))]
public record Since
{
    private readonly Optional<DateTimeOffset> _dateTimeValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Since(Optional<DateTimeOffset> dateTimeValue, Optional<UnknownArm> unknownValue)
    {
        _dateTimeValue = dateTimeValue;
        _unknownValue = unknownValue;
    }

    public static Since DateTime(DateTimeOffset value) => new(Optional<DateTimeOffset>.Some(value), default);

    internal static Since Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDateTime(out DateTimeOffset value) => _dateTimeValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Since(DateTimeOffset value) => DateTime(value);

    public TResult Match<TResult>(Func<DateTimeOffset, TResult> onDateTime, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDateTime(out var dateTimeValue) => onDateTime(dateTimeValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Since)} holds no value.")
        };

    public void Match(Action<DateTimeOffset> onDateTime, Action<JsonElement> otherwise)
    {
        if (TryGetDateTime(out var dateTimeValue)) onDateTime(dateTimeValue);
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
        if (JsonSerializer.TryDeserialize<DateTimeOffset>(root, options, out var dateTimeValue))
        {
            return Since.DateTime(dateTimeValue);
        }
        return Since.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Since value, JsonSerializerOptions options)
    {
        if (value.TryGetDateTime(out var dateTimeValue))
        {
            JsonSerializer.Serialize(writer, dateTimeValue, options);
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
