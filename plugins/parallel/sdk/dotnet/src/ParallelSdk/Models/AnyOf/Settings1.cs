using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Type-specific configuration. Shape is determined by <c>type</c>: <c>MonitorEventStreamResponseSettings</c> for <c>event_stream</c>, <c>MonitorSnapshotResponseSettings</c> for <c>snapshot</c>.
/// </summary>
[JsonConverter(typeof(Settings1Converter))]
public record Settings1
{
    private readonly Optional<MonitorEventStreamResponseSettings> _monitorEventStreamResponseSettingsValue;

    private readonly Optional<MonitorSnapshotResponseSettings> _monitorSnapshotResponseSettingsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Settings1(Optional<MonitorEventStreamResponseSettings> monitorEventStreamResponseSettingsValue,
        Optional<MonitorSnapshotResponseSettings> monitorSnapshotResponseSettingsValue,
        Optional<UnknownArm> unknownValue)
    {
        _monitorEventStreamResponseSettingsValue = monitorEventStreamResponseSettingsValue;
        _monitorSnapshotResponseSettingsValue = monitorSnapshotResponseSettingsValue;
        _unknownValue = unknownValue;
    }

    public static Settings1 MonitorEventStreamResponseSettings(MonitorEventStreamResponseSettings value) =>
        new(Optional<MonitorEventStreamResponseSettings>.Some(value), default, default);

    public static Settings1 MonitorSnapshotResponseSettings(MonitorSnapshotResponseSettings value) =>
        new(default, Optional<MonitorSnapshotResponseSettings>.Some(value), default);

    internal static Settings1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMonitorEventStreamResponseSettings([NotNullWhen(true)] out MonitorEventStreamResponseSettings? value) =>
        _monitorEventStreamResponseSettingsValue.TryGetValue(out value);

    public bool TryGetMonitorSnapshotResponseSettings([NotNullWhen(true)] out MonitorSnapshotResponseSettings? value) =>
        _monitorSnapshotResponseSettingsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Settings1(MonitorEventStreamResponseSettings value) =>
        MonitorEventStreamResponseSettings(value);

    public static implicit operator Settings1(MonitorSnapshotResponseSettings value) =>
        MonitorSnapshotResponseSettings(value);

    public TResult Match<TResult>(Func<MonitorEventStreamResponseSettings, TResult> onMonitorEventStreamResponseSettings,
        Func<MonitorSnapshotResponseSettings, TResult> onMonitorSnapshotResponseSettings,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMonitorEventStreamResponseSettings(
                out var monitorEventStreamResponseSettingsValue) => onMonitorEventStreamResponseSettings(
                monitorEventStreamResponseSettingsValue),
            _ when TryGetMonitorSnapshotResponseSettings(
                out var monitorSnapshotResponseSettingsValue) => onMonitorSnapshotResponseSettings(
                monitorSnapshotResponseSettingsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Settings1)} holds no value.")
        };

    public void Match(Action<MonitorEventStreamResponseSettings> onMonitorEventStreamResponseSettings,
        Action<MonitorSnapshotResponseSettings> onMonitorSnapshotResponseSettings,
        Action<JsonElement> otherwise)
    {
        if (TryGetMonitorEventStreamResponseSettings(
            out var monitorEventStreamResponseSettingsValue)) onMonitorEventStreamResponseSettings(
            monitorEventStreamResponseSettingsValue);
        else if (TryGetMonitorSnapshotResponseSettings(
            out var monitorSnapshotResponseSettingsValue)) onMonitorSnapshotResponseSettings(
            monitorSnapshotResponseSettingsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Settings1)} holds no value.");
    }
}

file sealed class Settings1Converter : JsonConverter<Settings1>
{
    public override Settings1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<MonitorEventStreamResponseSettings>(
            root,
            options,
            out var monitorEventStreamResponseSettingsValue))
        {
            return Settings1.MonitorEventStreamResponseSettings(monitorEventStreamResponseSettingsValue);
        }
        if (JsonSerializer.TryDeserialize<MonitorSnapshotResponseSettings>(
            root,
            options,
            out var monitorSnapshotResponseSettingsValue))
        {
            return Settings1.MonitorSnapshotResponseSettings(monitorSnapshotResponseSettingsValue);
        }
        return Settings1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Settings1 value, JsonSerializerOptions options)
    {
        if (value.TryGetMonitorEventStreamResponseSettings(out var monitorEventStreamResponseSettingsValue))
        {
            JsonSerializer.Serialize(writer, monitorEventStreamResponseSettingsValue, options);
        }
        else if (value.TryGetMonitorSnapshotResponseSettings(out var monitorSnapshotResponseSettingsValue))
        {
            JsonSerializer.Serialize(writer, monitorSnapshotResponseSettingsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Settings1)} contains no valid value to serialize.");
        }
    }
}
