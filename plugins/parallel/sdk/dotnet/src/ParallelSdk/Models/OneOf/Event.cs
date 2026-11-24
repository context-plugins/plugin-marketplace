using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.OneOf;

[JsonConverter(typeof(EventConverter))]
public record Event
{
    private readonly Optional<MonitorCompletionEvent> _monitorCompletionEventValue;

    private readonly Optional<MonitorErrorEvent> _monitorErrorEventValue;

    private readonly Optional<MonitorEventStreamEvent> _monitorEventStreamEventValue;

    private readonly Optional<MonitorSnapshotEvent> _monitorSnapshotEventValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Event(Optional<MonitorCompletionEvent> monitorCompletionEventValue,
        Optional<MonitorErrorEvent> monitorErrorEventValue,
        Optional<MonitorEventStreamEvent> monitorEventStreamEventValue,
        Optional<MonitorSnapshotEvent> monitorSnapshotEventValue,
        Optional<UnknownArm> unknownValue)
    {
        _monitorCompletionEventValue = monitorCompletionEventValue;
        _monitorErrorEventValue = monitorErrorEventValue;
        _monitorEventStreamEventValue = monitorEventStreamEventValue;
        _monitorSnapshotEventValue = monitorSnapshotEventValue;
        _unknownValue = unknownValue;
    }

    public static Event MonitorCompletionEvent(MonitorCompletionEvent value) =>
        new(Optional<MonitorCompletionEvent>.Some(value), default, default, default, default);

    public static Event MonitorErrorEvent(MonitorErrorEvent value) =>
        new(default, Optional<MonitorErrorEvent>.Some(value), default, default, default);

    public static Event MonitorEventStreamEvent(MonitorEventStreamEvent value) =>
        new(default, default, Optional<MonitorEventStreamEvent>.Some(value), default, default);

    public static Event MonitorSnapshotEvent(MonitorSnapshotEvent value) =>
        new(default, default, default, Optional<MonitorSnapshotEvent>.Some(value), default);

    internal static Event Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMonitorCompletionEvent([NotNullWhen(true)] out MonitorCompletionEvent? value) =>
        _monitorCompletionEventValue.TryGetValue(out value);

    public bool TryGetMonitorErrorEvent([NotNullWhen(true)] out MonitorErrorEvent? value) =>
        _monitorErrorEventValue.TryGetValue(out value);

    public bool TryGetMonitorEventStreamEvent([NotNullWhen(true)] out MonitorEventStreamEvent? value) =>
        _monitorEventStreamEventValue.TryGetValue(out value);

    public bool TryGetMonitorSnapshotEvent([NotNullWhen(true)] out MonitorSnapshotEvent? value) =>
        _monitorSnapshotEventValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Event(MonitorCompletionEvent value) => MonitorCompletionEvent(value);

    public static implicit operator Event(MonitorErrorEvent value) => MonitorErrorEvent(value);

    public static implicit operator Event(MonitorEventStreamEvent value) => MonitorEventStreamEvent(value);

    public static implicit operator Event(MonitorSnapshotEvent value) => MonitorSnapshotEvent(value);

    public TResult Match<TResult>(Func<MonitorCompletionEvent, TResult> onMonitorCompletionEvent,
        Func<MonitorErrorEvent, TResult> onMonitorErrorEvent,
        Func<MonitorEventStreamEvent, TResult> onMonitorEventStreamEvent,
        Func<MonitorSnapshotEvent, TResult> onMonitorSnapshotEvent,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMonitorCompletionEvent(out var monitorCompletionEventValue) => onMonitorCompletionEvent(
                monitorCompletionEventValue),
            _ when TryGetMonitorErrorEvent(out var monitorErrorEventValue) => onMonitorErrorEvent(
                monitorErrorEventValue),
            _ when TryGetMonitorEventStreamEvent(out var monitorEventStreamEventValue) => onMonitorEventStreamEvent(
                monitorEventStreamEventValue),
            _ when TryGetMonitorSnapshotEvent(out var monitorSnapshotEventValue) => onMonitorSnapshotEvent(
                monitorSnapshotEventValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Event)} holds no value.")
        };

    public void Match(Action<MonitorCompletionEvent> onMonitorCompletionEvent,
        Action<MonitorErrorEvent> onMonitorErrorEvent,
        Action<MonitorEventStreamEvent> onMonitorEventStreamEvent,
        Action<MonitorSnapshotEvent> onMonitorSnapshotEvent,
        Action<JsonElement> otherwise)
    {
        if (TryGetMonitorCompletionEvent(out var monitorCompletionEventValue)) onMonitorCompletionEvent(
            monitorCompletionEventValue);
        else if (TryGetMonitorErrorEvent(out var monitorErrorEventValue)) onMonitorErrorEvent(monitorErrorEventValue);
        else if (TryGetMonitorEventStreamEvent(out var monitorEventStreamEventValue)) onMonitorEventStreamEvent(
            monitorEventStreamEventValue);
        else if (TryGetMonitorSnapshotEvent(out var monitorSnapshotEventValue)) onMonitorSnapshotEvent(
            monitorSnapshotEventValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Event)} holds no value.");
    }
}

file sealed class EventConverter : JsonConverter<Event>
{
    public override Event Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("event_type", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'event_type' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            "completion" => Event.MonitorCompletionEvent(root.Deserialize<MonitorCompletionEvent>(options)!),
            "error" => Event.MonitorErrorEvent(root.Deserialize<MonitorErrorEvent>(options)!),
            "event_stream" => Event.MonitorEventStreamEvent(root.Deserialize<MonitorEventStreamEvent>(options)!),
            "snapshot" => Event.MonitorSnapshotEvent(root.Deserialize<MonitorSnapshotEvent>(options)!),
            _ => Event.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, Event value, JsonSerializerOptions options)
    {
        if (value.TryGetMonitorCompletionEvent(out var monitorCompletionEventValue))
        {
            JsonSerializer.Serialize(writer, monitorCompletionEventValue, options);
        }
        else if (value.TryGetMonitorErrorEvent(out var monitorErrorEventValue))
        {
            JsonSerializer.Serialize(writer, monitorErrorEventValue, options);
        }
        else if (value.TryGetMonitorEventStreamEvent(out var monitorEventStreamEventValue))
        {
            JsonSerializer.Serialize(writer, monitorEventStreamEventValue, options);
        }
        else if (value.TryGetMonitorSnapshotEvent(out var monitorSnapshotEventValue))
        {
            JsonSerializer.Serialize(writer, monitorSnapshotEventValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Event)} contains no valid value to serialize.");
        }
    }
}
