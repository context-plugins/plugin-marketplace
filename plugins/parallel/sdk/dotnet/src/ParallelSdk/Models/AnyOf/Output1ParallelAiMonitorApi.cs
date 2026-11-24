using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Runtime output state. Present only for <c>snapshot</c> monitors; <c>null</c> for <c>event_stream</c> monitors.
/// </summary>
[JsonConverter(typeof(Output1ParallelAiMonitorApiConverter))]
public record Output1ParallelAiMonitorApi
{
    private readonly Optional<MonitorSnapshotOutput> _monitorSnapshotOutputValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Output1ParallelAiMonitorApi(Optional<MonitorSnapshotOutput> monitorSnapshotOutputValue,
        Optional<UnknownArm> unknownValue)
    {
        _monitorSnapshotOutputValue = monitorSnapshotOutputValue;
        _unknownValue = unknownValue;
    }

    public static Output1ParallelAiMonitorApi MonitorSnapshotOutput(MonitorSnapshotOutput value) =>
        new(Optional<MonitorSnapshotOutput>.Some(value), default);

    internal static Output1ParallelAiMonitorApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMonitorSnapshotOutput([NotNullWhen(true)] out MonitorSnapshotOutput? value) =>
        _monitorSnapshotOutputValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Output1ParallelAiMonitorApi(MonitorSnapshotOutput value) =>
        MonitorSnapshotOutput(value);

    public TResult Match<TResult>(Func<MonitorSnapshotOutput, TResult> onMonitorSnapshotOutput,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMonitorSnapshotOutput(out var monitorSnapshotOutputValue) => onMonitorSnapshotOutput(
                monitorSnapshotOutputValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Output1ParallelAiMonitorApi)} holds no value.")
        };

    public void Match(Action<MonitorSnapshotOutput> onMonitorSnapshotOutput, Action<JsonElement> otherwise)
    {
        if (TryGetMonitorSnapshotOutput(out var monitorSnapshotOutputValue)) onMonitorSnapshotOutput(
            monitorSnapshotOutputValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Output1ParallelAiMonitorApi)} holds no value.");
    }
}

file sealed class Output1ParallelAiMonitorApiConverter : JsonConverter<Output1ParallelAiMonitorApi>
{
    public override Output1ParallelAiMonitorApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<MonitorSnapshotOutput>(root, options, out var monitorSnapshotOutputValue))
        {
            return Output1ParallelAiMonitorApi.MonitorSnapshotOutput(monitorSnapshotOutputValue);
        }
        return Output1ParallelAiMonitorApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Output1ParallelAiMonitorApi value, JsonSerializerOptions options)
    {
        if (value.TryGetMonitorSnapshotOutput(out var monitorSnapshotOutputValue))
        {
            JsonSerializer.Serialize(writer, monitorSnapshotOutputValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Output1ParallelAiMonitorApi)} contains no valid value to serialize.");
        }
    }
}
