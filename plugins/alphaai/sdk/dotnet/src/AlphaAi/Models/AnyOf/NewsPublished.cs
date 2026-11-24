using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using AlphaAi.Core.Extensions;
using AlphaAi.Core.Models;

namespace AlphaAi.Models.AnyOf;

/// <summary>
/// Article publication time for its AlphAI URL.
/// </summary>
[JsonConverter(typeof(NewsPublishedConverter))]
public record NewsPublished
{
    private readonly Optional<DateTimeOffset> _dateTimeValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private NewsPublished(Optional<DateTimeOffset> dateTimeValue, Optional<UnknownArm> unknownValue)
    {
        _dateTimeValue = dateTimeValue;
        _unknownValue = unknownValue;
    }

    public static NewsPublished DateTime(DateTimeOffset value) => new(Optional<DateTimeOffset>.Some(value), default);

    internal static NewsPublished Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDateTime(out DateTimeOffset value) => _dateTimeValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator NewsPublished(DateTimeOffset value) => DateTime(value);

    public TResult Match<TResult>(Func<DateTimeOffset, TResult> onDateTime, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDateTime(out var dateTimeValue) => onDateTime(dateTimeValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(NewsPublished)} holds no value.")
        };

    public void Match(Action<DateTimeOffset> onDateTime, Action<JsonElement> otherwise)
    {
        if (TryGetDateTime(out var dateTimeValue)) onDateTime(dateTimeValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(NewsPublished)} holds no value.");
    }
}

file sealed class NewsPublishedConverter : JsonConverter<NewsPublished>
{
    public override NewsPublished Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DateTimeOffset>(root, options, out var dateTimeValue))
        {
            return NewsPublished.DateTime(dateTimeValue);
        }
        return NewsPublished.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, NewsPublished value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(NewsPublished)} contains no valid value to serialize.");
        }
    }
}
