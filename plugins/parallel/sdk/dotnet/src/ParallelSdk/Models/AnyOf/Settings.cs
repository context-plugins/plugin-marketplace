using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Type-specific settings for the monitor. The expected shape is determined by the root <c>type</c> field: pass <c>MonitorEventStreamSettings</c> when <c>type</c> is <c>event_stream</c>, and <c>MonitorSnapshotSettings</c> when <c>type</c> is <c>snapshot</c>.
/// </summary>
[JsonConverter(typeof(SettingsConverter))]
public record Settings
{
    private readonly Optional<MonitorEventStreamSettings> _monitorEventStreamSettingsValue;

    private readonly Optional<MonitorSnapshotSettings> _monitorSnapshotSettingsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Settings(Optional<MonitorEventStreamSettings> monitorEventStreamSettingsValue,
        Optional<MonitorSnapshotSettings> monitorSnapshotSettingsValue,
        Optional<UnknownArm> unknownValue)
    {
        _monitorEventStreamSettingsValue = monitorEventStreamSettingsValue;
        _monitorSnapshotSettingsValue = monitorSnapshotSettingsValue;
        _unknownValue = unknownValue;
    }

    public static Settings MonitorEventStreamSettings(MonitorEventStreamSettings value) =>
        new(Optional<MonitorEventStreamSettings>.Some(value), default, default);

    public static Settings MonitorSnapshotSettings(MonitorSnapshotSettings value) =>
        new(default, Optional<MonitorSnapshotSettings>.Some(value), default);

    internal static Settings Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMonitorEventStreamSettings([NotNullWhen(true)] out MonitorEventStreamSettings? value) =>
        _monitorEventStreamSettingsValue.TryGetValue(out value);

    public bool TryGetMonitorSnapshotSettings([NotNullWhen(true)] out MonitorSnapshotSettings? value) =>
        _monitorSnapshotSettingsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Settings(MonitorEventStreamSettings value) => MonitorEventStreamSettings(value);

    public static implicit operator Settings(MonitorSnapshotSettings value) => MonitorSnapshotSettings(value);

    public TResult Match<TResult>(Func<MonitorEventStreamSettings, TResult> onMonitorEventStreamSettings,
        Func<MonitorSnapshotSettings, TResult> onMonitorSnapshotSettings,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMonitorEventStreamSettings(
                out var monitorEventStreamSettingsValue) => onMonitorEventStreamSettings(
                monitorEventStreamSettingsValue),
            _ when TryGetMonitorSnapshotSettings(out var monitorSnapshotSettingsValue) => onMonitorSnapshotSettings(
                monitorSnapshotSettingsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Settings)} holds no value.")
        };

    public void Match(Action<MonitorEventStreamSettings> onMonitorEventStreamSettings,
        Action<MonitorSnapshotSettings> onMonitorSnapshotSettings,
        Action<JsonElement> otherwise)
    {
        if (TryGetMonitorEventStreamSettings(out var monitorEventStreamSettingsValue)) onMonitorEventStreamSettings(
            monitorEventStreamSettingsValue);
        else if (TryGetMonitorSnapshotSettings(out var monitorSnapshotSettingsValue)) onMonitorSnapshotSettings(
            monitorSnapshotSettingsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Settings)} holds no value.");
    }
}

file sealed class SettingsConverter : JsonConverter<Settings>
{
    public override Settings Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<MonitorEventStreamSettings>(
            root,
            options,
            out var monitorEventStreamSettingsValue))
        {
            return Settings.MonitorEventStreamSettings(monitorEventStreamSettingsValue);
        }
        if (JsonSerializer.TryDeserialize<MonitorSnapshotSettings>(root, options, out var monitorSnapshotSettingsValue))
        {
            return Settings.MonitorSnapshotSettings(monitorSnapshotSettingsValue);
        }
        return Settings.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Settings value, JsonSerializerOptions options)
    {
        if (value.TryGetMonitorEventStreamSettings(out var monitorEventStreamSettingsValue))
        {
            JsonSerializer.Serialize(writer, monitorEventStreamSettingsValue, options);
        }
        else if (value.TryGetMonitorSnapshotSettings(out var monitorSnapshotSettingsValue))
        {
            JsonSerializer.Serialize(writer, monitorSnapshotSettingsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Settings)} contains no valid value to serialize.");
        }
    }
}
