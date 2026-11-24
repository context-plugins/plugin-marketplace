using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Core.Validation;

namespace BrowserUse.Models.AnyOf;

/// <summary>
/// Seconds the session's browser stays open after its last run, so a follow-up run reuses the same page, never past the browser's 4 h lifetime. Default 120. Follow-up runs inherit the session's value; send a new value to change it or null to restore the default. Kept time is billed as browser time. Ignored (always 120) for free-tier and Zero Data Retention projects.
/// </summary>
[JsonConverter(typeof(KeepaliveConverter))]
public record Keepalive
{
    private readonly Optional<int> _intValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Keepalive(Optional<int> intValue, Optional<UnknownArm> unknownValue)
    {
        _intValue = intValue;
        _unknownValue = unknownValue;
    }

    public static Keepalive Int(int value) => new(Optional<int>.Some(value), default);

    internal static Keepalive Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Keepalive(int value) => Int(value);

    public TResult Match<TResult>(Func<int, TResult> onInt, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Keepalive)} holds no value.")
        };

    public void Match(Action<int> onInt, Action<JsonElement> otherwise)
    {
        if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Keepalive)} holds no value.");
    }
}

file sealed class KeepaliveConverter : JsonConverter<Keepalive>
{
    public override Keepalive Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue) && intValue.MeetsMinimum(120) && intValue.MeetsMaximum(14400))
            {
                return Keepalive.Int(intValue);
            }
        }
        return Keepalive.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Keepalive value, JsonSerializerOptions options)
    {
        if (value.TryGetInt(out var intValue))
        {
            JsonSerializer.Serialize(writer, intValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Keepalive)} contains no valid value to serialize.");
        }
    }
}
