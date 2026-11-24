using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models.AnyOf;

/// <summary>
/// Presigned URL to download the session recording, if recording was enabled. Only populated on GET /api/v2/browsers/{session_id}: the upload starts when the browser stops, so it is never ready in the stop response.
/// </summary>
[JsonConverter(typeof(RecordingUrlConverter))]
public record RecordingUrl
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private RecordingUrl(Optional<string> stringValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static RecordingUrl String(string value) => new(Optional<string>.Some(value), default);

    internal static RecordingUrl Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator RecordingUrl(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(RecordingUrl)} holds no value.")
        };

    public void Match(Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(RecordingUrl)} holds no value.");
    }
}

file sealed class RecordingUrlConverter : JsonConverter<RecordingUrl>
{
    public override RecordingUrl Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return RecordingUrl.String(value);
        }
        return RecordingUrl.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, RecordingUrl value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(RecordingUrl)} contains no valid value to serialize.");
        }
    }
}
