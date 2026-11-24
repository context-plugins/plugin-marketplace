using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;

namespace TranscriptFetch.Models.OneOf;

[JsonConverter(typeof(DataTranscriptfetchSystemApiConverter))]
public record DataTranscriptfetchSystemApi
{
    private readonly Optional<UnknownArm> _unknownValue;

    private DataTranscriptfetchSystemApi(Optional<UnknownArm> unknownValue)
    {
        _unknownValue = unknownValue;
    }

    internal static DataTranscriptfetchSystemApi Unknown(JsonElement value) =>
        new(Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(DataTranscriptfetchSystemApi)} holds no value.")
        };

    public void Match(Action<JsonElement> otherwise)
    {
        if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DataTranscriptfetchSystemApi)} holds no value.");
    }
}

file sealed class DataTranscriptfetchSystemApiConverter : JsonConverter<DataTranscriptfetchSystemApi>
{
    public override DataTranscriptfetchSystemApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("kind", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'kind' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            _ => DataTranscriptfetchSystemApi.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, DataTranscriptfetchSystemApi value, JsonSerializerOptions options)
    {
        if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(DataTranscriptfetchSystemApi)} contains no valid value to serialize.");
        }
    }
}
