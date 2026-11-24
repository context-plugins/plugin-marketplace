using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Extensions;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Models.Enums;

namespace TranscriptFetch.Models.AnyOf;

/// <summary>
/// Which form the transcript comes back in. true (the default) returns the <c>segments</c> array, each with start, duration and text (podcast episodes transcribed from audio may also carry a <c>speaker</c> id per segment - see the podcast notes). false returns a single joined <c>text</c> string instead. On the single-transcript 200 exactly one of the two is present, never both, since segments already contain every word the joined text does; job results and batch entries carry both text and segments. The older strings "segment" and "none" mean the same two things and are still accepted.
/// </summary>
[JsonConverter(typeof(Timestamps1Converter))]
public record Timestamps1
{
    private readonly Optional<bool> _boolValue;

    private readonly Optional<Timestamps> _timestampsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Timestamps1(Optional<bool> boolValue,
        Optional<Timestamps> timestampsValue,
        Optional<UnknownArm> unknownValue)
    {
        _boolValue = boolValue;
        _timestampsValue = timestampsValue;
        _unknownValue = unknownValue;
    }

    public static Timestamps1 Bool(bool value) => new(Optional<bool>.Some(value), default, default);

    public static Timestamps1 Timestamps(Timestamps value) => new(default, Optional<Timestamps>.Some(value), default);

    internal static Timestamps1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetTimestamps([NotNullWhen(true)] out Timestamps? value) => _timestampsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Timestamps1(bool value) => Bool(value);

    public static implicit operator Timestamps1(Timestamps value) => Timestamps(value);

    public TResult Match<TResult>(Func<bool, TResult> onBool,
        Func<Timestamps, TResult> onTimestamps,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetTimestamps(out var timestampsValue) => onTimestamps(timestampsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Timestamps1)} holds no value.")
        };

    public void Match(Action<bool> onBool, Action<Timestamps> onTimestamps, Action<JsonElement> otherwise)
    {
        if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetTimestamps(out var timestampsValue)) onTimestamps(timestampsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Timestamps1)} holds no value.");
    }
}

file sealed class Timestamps1Converter : JsonConverter<Timestamps1>
{
    public override Timestamps1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return Timestamps1.Bool(boolValue);
        }
        if (JsonSerializer.TryDeserialize<Timestamps>(root, options, out var timestampsValue))
        {
            return Timestamps1.Timestamps(timestampsValue);
        }
        return Timestamps1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Timestamps1 value, JsonSerializerOptions options)
    {
        if (value.TryGetBool(out var boolValue))
        {
            JsonSerializer.Serialize(writer, boolValue, options);
        }
        else if (value.TryGetTimestamps(out var timestampsValue))
        {
            JsonSerializer.Serialize(writer, timestampsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Timestamps1)} contains no valid value to serialize.");
        }
    }
}
