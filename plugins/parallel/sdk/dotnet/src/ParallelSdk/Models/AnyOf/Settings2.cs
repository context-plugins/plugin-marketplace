using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Type-specific settings to update. Only valid when <c>type</c> is <c>event_stream</c>. Pass <c>settings.query</c> to update the prompt, or <c>null</c> for <c>settings.advanced_settings</c> to clear it.
/// </summary>
[JsonConverter(typeof(Settings2Converter))]
public record Settings2
{
    private readonly Optional<UpdateMonitorEventStreamSettings> _updateMonitorEventStreamSettingsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Settings2(Optional<UpdateMonitorEventStreamSettings> updateMonitorEventStreamSettingsValue,
        Optional<UnknownArm> unknownValue)
    {
        _updateMonitorEventStreamSettingsValue = updateMonitorEventStreamSettingsValue;
        _unknownValue = unknownValue;
    }

    public static Settings2 UpdateMonitorEventStreamSettings(UpdateMonitorEventStreamSettings value) =>
        new(Optional<UpdateMonitorEventStreamSettings>.Some(value), default);

    internal static Settings2 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUpdateMonitorEventStreamSettings([NotNullWhen(true)] out UpdateMonitorEventStreamSettings? value) =>
        _updateMonitorEventStreamSettingsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Settings2(UpdateMonitorEventStreamSettings value) =>
        UpdateMonitorEventStreamSettings(value);

    public TResult Match<TResult>(Func<UpdateMonitorEventStreamSettings, TResult> onUpdateMonitorEventStreamSettings,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUpdateMonitorEventStreamSettings(
                out var updateMonitorEventStreamSettingsValue) => onUpdateMonitorEventStreamSettings(
                updateMonitorEventStreamSettingsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Settings2)} holds no value.")
        };

    public void Match(Action<UpdateMonitorEventStreamSettings> onUpdateMonitorEventStreamSettings,
        Action<JsonElement> otherwise)
    {
        if (TryGetUpdateMonitorEventStreamSettings(
            out var updateMonitorEventStreamSettingsValue)) onUpdateMonitorEventStreamSettings(
            updateMonitorEventStreamSettingsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Settings2)} holds no value.");
    }
}

file sealed class Settings2Converter : JsonConverter<Settings2>
{
    public override Settings2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<UpdateMonitorEventStreamSettings>(
            root,
            options,
            out var updateMonitorEventStreamSettingsValue))
        {
            return Settings2.UpdateMonitorEventStreamSettings(updateMonitorEventStreamSettingsValue);
        }
        return Settings2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Settings2 value, JsonSerializerOptions options)
    {
        if (value.TryGetUpdateMonitorEventStreamSettings(out var updateMonitorEventStreamSettingsValue))
        {
            JsonSerializer.Serialize(writer, updateMonitorEventStreamSettingsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Settings2)} contains no valid value to serialize.");
        }
    }
}
