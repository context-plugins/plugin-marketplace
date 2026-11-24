using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Webhook for the FindAll run., Callback URL (webhook endpoint) that will receive an HTTP POST when the run completes.
/// This feature is not available via the Python SDK.
/// </summary>
[JsonConverter(typeof(Webhook1Converter))]
public record Webhook1
{
    private readonly Optional<Webhook> _webhookValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Webhook1(Optional<Webhook> webhookValue, Optional<UnknownArm> unknownValue)
    {
        _webhookValue = webhookValue;
        _unknownValue = unknownValue;
    }

    public static Webhook1 Webhook(Webhook value) => new(Optional<Webhook>.Some(value), default);

    internal static Webhook1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetWebhook([NotNullWhen(true)] out Webhook? value) => _webhookValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Webhook1(Webhook value) => Webhook(value);

    public TResult Match<TResult>(Func<Webhook, TResult> onWebhook, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetWebhook(out var webhookValue) => onWebhook(webhookValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Webhook1)} holds no value.")
        };

    public void Match(Action<Webhook> onWebhook, Action<JsonElement> otherwise)
    {
        if (TryGetWebhook(out var webhookValue)) onWebhook(webhookValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Webhook1)} holds no value.");
    }
}

file sealed class Webhook1Converter : JsonConverter<Webhook1>
{
    public override Webhook1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Webhook>(root, options, out var webhookValue))
        {
            return Webhook1.Webhook(webhookValue);
        }
        return Webhook1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Webhook1 value, JsonSerializerOptions options)
    {
        if (value.TryGetWebhook(out var webhookValue))
        {
            JsonSerializer.Serialize(writer, webhookValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Webhook1)} contains no valid value to serialize.");
        }
    }
}
