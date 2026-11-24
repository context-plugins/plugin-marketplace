using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Webhook to receive notifications about the monitor's execution.
/// </summary>
[JsonConverter(typeof(WebhookParallelAiMonitorApiConverter))]
public record WebhookParallelAiMonitorApi
{
    private readonly Optional<MonitorWebhook> _monitorWebhookValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private WebhookParallelAiMonitorApi(Optional<MonitorWebhook> monitorWebhookValue, Optional<UnknownArm> unknownValue)
    {
        _monitorWebhookValue = monitorWebhookValue;
        _unknownValue = unknownValue;
    }

    public static WebhookParallelAiMonitorApi MonitorWebhook(MonitorWebhook value) =>
        new(Optional<MonitorWebhook>.Some(value), default);

    internal static WebhookParallelAiMonitorApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMonitorWebhook([NotNullWhen(true)] out MonitorWebhook? value) =>
        _monitorWebhookValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator WebhookParallelAiMonitorApi(MonitorWebhook value) => MonitorWebhook(value);

    public TResult Match<TResult>(Func<MonitorWebhook, TResult> onMonitorWebhook,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMonitorWebhook(out var monitorWebhookValue) => onMonitorWebhook(monitorWebhookValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(WebhookParallelAiMonitorApi)} holds no value.")
        };

    public void Match(Action<MonitorWebhook> onMonitorWebhook, Action<JsonElement> otherwise)
    {
        if (TryGetMonitorWebhook(out var monitorWebhookValue)) onMonitorWebhook(monitorWebhookValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(WebhookParallelAiMonitorApi)} holds no value.");
    }
}

file sealed class WebhookParallelAiMonitorApiConverter : JsonConverter<WebhookParallelAiMonitorApi>
{
    public override WebhookParallelAiMonitorApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<MonitorWebhook>(root, options, out var monitorWebhookValue))
        {
            return WebhookParallelAiMonitorApi.MonitorWebhook(monitorWebhookValue);
        }
        return WebhookParallelAiMonitorApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, WebhookParallelAiMonitorApi value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(WebhookParallelAiMonitorApi)} contains no valid value to serialize.");
        }
    }
}
