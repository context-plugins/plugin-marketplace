using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Controls full content extraction. Set to true to enable with defaults, false to disable, or provide FullContentSettings for fine-grained control.
/// </summary>
[JsonConverter(typeof(FullContent1Converter))]
public record FullContent1
{
    private readonly Optional<FullContentSettings> _fullContentSettingsValue;

    private readonly Optional<bool> _boolValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private FullContent1(Optional<FullContentSettings> fullContentSettingsValue,
        Optional<bool> boolValue,
        Optional<UnknownArm> unknownValue)
    {
        _fullContentSettingsValue = fullContentSettingsValue;
        _boolValue = boolValue;
        _unknownValue = unknownValue;
    }

    public static FullContent1 FullContentSettings(FullContentSettings value) =>
        new(Optional<FullContentSettings>.Some(value), default, default);

    public static FullContent1 Bool(bool value) => new(default, Optional<bool>.Some(value), default);

    internal static FullContent1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetFullContentSettings([NotNullWhen(true)] out FullContentSettings? value) =>
        _fullContentSettingsValue.TryGetValue(out value);

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator FullContent1(FullContentSettings value) => FullContentSettings(value);

    public static implicit operator FullContent1(bool value) => Bool(value);

    public TResult Match<TResult>(Func<FullContentSettings, TResult> onFullContentSettings,
        Func<bool, TResult> onBool,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetFullContentSettings(out var fullContentSettingsValue) => onFullContentSettings(
                fullContentSettingsValue),
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(FullContent1)} holds no value.")
        };

    public void Match(Action<FullContentSettings> onFullContentSettings,
        Action<bool> onBool,
        Action<JsonElement> otherwise)
    {
        if (TryGetFullContentSettings(out var fullContentSettingsValue)) onFullContentSettings(
            fullContentSettingsValue);
        else if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(FullContent1)} holds no value.");
    }
}

file sealed class FullContent1Converter : JsonConverter<FullContent1>
{
    public override FullContent1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<FullContentSettings>(root, options, out var fullContentSettingsValue))
        {
            return FullContent1.FullContentSettings(fullContentSettingsValue);
        }
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return FullContent1.Bool(boolValue);
        }
        return FullContent1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, FullContent1 value, JsonSerializerOptions options)
    {
        if (value.TryGetFullContentSettings(out var fullContentSettingsValue))
        {
            JsonSerializer.Serialize(writer, fullContentSettingsValue, options);
        }
        else if (value.TryGetBool(out var boolValue))
        {
            JsonSerializer.Serialize(writer, boolValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(FullContent1)} contains no valid value to serialize.");
        }
    }
}
