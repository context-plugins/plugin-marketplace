using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Extensions;
using TranscriptFetch.Core.Models;

namespace TranscriptFetch.Models.AnyOf;

/// <summary>
/// Either a transcript_job placeholder, or a transcript block with null text/segments, depending on how the request escalated.
/// </summary>
[JsonConverter(typeof(Data1Converter))]
public record Data1
{
    private readonly Optional<TranscriptJobData> _transcriptJobDataValue;

    private readonly Optional<TranscriptData> _transcriptDataValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Data1(Optional<TranscriptJobData> transcriptJobDataValue,
        Optional<TranscriptData> transcriptDataValue,
        Optional<UnknownArm> unknownValue)
    {
        _transcriptJobDataValue = transcriptJobDataValue;
        _transcriptDataValue = transcriptDataValue;
        _unknownValue = unknownValue;
    }

    public static Data1 TranscriptJobData(TranscriptJobData value) =>
        new(Optional<TranscriptJobData>.Some(value), default, default);

    public static Data1 TranscriptData(TranscriptData value) =>
        new(default, Optional<TranscriptData>.Some(value), default);

    internal static Data1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTranscriptJobData([NotNullWhen(true)] out TranscriptJobData? value) =>
        _transcriptJobDataValue.TryGetValue(out value);

    public bool TryGetTranscriptData([NotNullWhen(true)] out TranscriptData? value) =>
        _transcriptDataValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Data1(TranscriptJobData value) => TranscriptJobData(value);

    public static implicit operator Data1(TranscriptData value) => TranscriptData(value);

    public TResult Match<TResult>(Func<TranscriptJobData, TResult> onTranscriptJobData,
        Func<TranscriptData, TResult> onTranscriptData,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTranscriptJobData(out var transcriptJobDataValue) => onTranscriptJobData(
                transcriptJobDataValue),
            _ when TryGetTranscriptData(out var transcriptDataValue) => onTranscriptData(transcriptDataValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Data1)} holds no value.")
        };

    public void Match(Action<TranscriptJobData> onTranscriptJobData,
        Action<TranscriptData> onTranscriptData,
        Action<JsonElement> otherwise)
    {
        if (TryGetTranscriptJobData(out var transcriptJobDataValue)) onTranscriptJobData(transcriptJobDataValue);
        else if (TryGetTranscriptData(out var transcriptDataValue)) onTranscriptData(transcriptDataValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Data1)} holds no value.");
    }
}

file sealed class Data1Converter : JsonConverter<Data1>
{
    public override Data1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TranscriptJobData>(root, options, out var transcriptJobDataValue))
        {
            return Data1.TranscriptJobData(transcriptJobDataValue);
        }
        if (JsonSerializer.TryDeserialize<TranscriptData>(root, options, out var transcriptDataValue))
        {
            return Data1.TranscriptData(transcriptDataValue);
        }
        return Data1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Data1 value, JsonSerializerOptions options)
    {
        if (value.TryGetTranscriptJobData(out var transcriptJobDataValue))
        {
            JsonSerializer.Serialize(writer, transcriptJobDataValue, options);
        }
        else if (value.TryGetTranscriptData(out var transcriptDataValue))
        {
            JsonSerializer.Serialize(writer, transcriptDataValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Data1)} contains no valid value to serialize.");
        }
    }
}
