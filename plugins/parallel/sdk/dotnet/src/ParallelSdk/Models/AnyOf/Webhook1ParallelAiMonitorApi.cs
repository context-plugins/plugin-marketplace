using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Webhook configuration for the monitor.
/// </summary>
[JsonConverter(typeof(Webhook1ParallelAiMonitorApiConverter))]
public record Webhook1ParallelAiMonitorApi
{
    private readonly Optional<MonitorWebhook> _monitorWebhookValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Webhook1ParallelAiMonitorApi(Optional<MonitorWebhook> monitorWebhookValue,
        Optional<UnknownArm> unknownValue)
    {
        _monitorWebhookValue = monitorWebhookValue;
        _unknownValue = unknownValue;
    }

    public static Webhook1ParallelAiMonitorApi MonitorWebhook(MonitorWebhook value) =>
        new(Optional<MonitorWebhook>.Some(value), default);

    internal static Webhook1ParallelAiMonitorApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMonitorWebhook([NotNullWhen(true)] out MonitorWebhook? value) =>
        _monitorWebhookValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Webhook1ParallelAiMonitorApi(MonitorWebhook value) => MonitorWebhook(value);

    public TResult Match<TResult>(Func<MonitorWebhook, TResult> onMonitorWebhook,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMonitorWebhook(out var monitorWebhookValue) => onMonitorWebhook(monitorWebhookValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Webhook1ParallelAiMonitorApi)} holds no value.")
        };

    public void Match(Action<MonitorWebhook> onMonitorWebhook, Action<JsonElement> otherwise)
    {
        if (TryGetMonitorWebhook(out var monitorWebhookValue)) onMonitorWebhook(monitorWebhookValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Webhook1ParallelAiMonitorApi)} holds no value.");
    }
}

file sealed class Webhook1ParallelAiMonitorApiConverter : JsonConverter<Webhook1ParallelAiMonitorApi>
{
    public override Webhook1ParallelAiMonitorApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<MonitorWebhook>(root, options, out var monitorWebhookValue))
        {
            return Webhook1ParallelAiMonitorApi.MonitorWebhook(monitorWebhookValue);
        }
        return Webhook1ParallelAiMonitorApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Webhook1ParallelAiMonitorApi value, JsonSerializerOptions options)
    {
        if (value.TryGetMonitorWebhook(out var monitorWebhookValue))
        {
            JsonSerializer.Serialize(writer, monitorWebhookValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Webhook1ParallelAiMonitorApi)} contains no valid value to serialize.");
        }
    }
}
