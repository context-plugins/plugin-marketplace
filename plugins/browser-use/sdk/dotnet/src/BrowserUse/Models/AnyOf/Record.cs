using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Extensions;
using BrowserUse.Core.Models;

namespace BrowserUse.Models.AnyOf;

/// <summary>
/// Record the browser session to an mp4, retrievable via GET /browsers/{id} once the browser stops. API runs default to off; pass true to enable. Like other browser settings, this only applies when a new browser is provisioned: a follow-up that reuses the session's live browser keeps that browser's recording state. Ignored (always off) for Zero Data Retention projects.
/// </summary>
[JsonConverter(typeof(RecordConverter))]
public record Record
{
    private readonly Optional<bool> _boolValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Record(Optional<bool> boolValue, Optional<UnknownArm> unknownValue)
    {
        _boolValue = boolValue;
        _unknownValue = unknownValue;
    }

    public static Record Bool(bool value) => new(Optional<bool>.Some(value), default);

    internal static Record Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Record(bool value) => Bool(value);

    public TResult Match<TResult>(Func<bool, TResult> onBool, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Record)} holds no value.")
        };

    public void Match(Action<bool> onBool, Action<JsonElement> otherwise)
    {
        if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Record)} holds no value.");
    }
}

file sealed class RecordConverter : JsonConverter<Record>
{
    public override Record Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return Record.Bool(boolValue);
        }
        return Record.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Record value, JsonSerializerOptions options)
    {
        if (value.TryGetBool(out var boolValue))
        {
            JsonSerializer.Serialize(writer, boolValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Record)} contains no valid value to serialize.");
        }
    }
}
