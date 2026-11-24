using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Tabby.Core.Extensions;
using Tabby.Core.Models;

namespace Tabby.Models.AnyOf;

[JsonConverter(typeof(WebhookResponseAllConverter))]
public record WebhookResponseAll
{
    private readonly Optional<Webhook> _webhookValue;

    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private WebhookResponseAll(Optional<Webhook> webhookValue,
        Optional<object> anonymousObjectValue,
        Optional<UnknownArm> unknownValue)
    {
        _webhookValue = webhookValue;
        _anonymousObjectValue = anonymousObjectValue;
        _unknownValue = unknownValue;
    }

    public static WebhookResponseAll Webhook(Webhook value) => new(Optional<Webhook>.Some(value), default, default);

    public static WebhookResponseAll AnonymousObject(object value) =>
        new(default, Optional<object>.Some(value), default);

    internal static WebhookResponseAll Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetWebhook([NotNullWhen(true)] out Webhook? value) => _webhookValue.TryGetValue(out value);

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator WebhookResponseAll(Webhook value) => Webhook(value);

    public TResult Match<TResult>(Func<Webhook, TResult> onWebhook,
        Func<object, TResult> onAnonymousObject,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetWebhook(out var webhookValue) => onWebhook(webhookValue),
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(WebhookResponseAll)} holds no value.")
        };

    public void Match(Action<Webhook> onWebhook, Action<object> onAnonymousObject, Action<JsonElement> otherwise)
    {
        if (TryGetWebhook(out var webhookValue)) onWebhook(webhookValue);
        else if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(WebhookResponseAll)} holds no value.");
    }
}

file sealed class WebhookResponseAllConverter : JsonConverter<WebhookResponseAll>
{
    public override WebhookResponseAll Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Webhook>(root, options, out var webhookValue))
        {
            return WebhookResponseAll.Webhook(webhookValue);
        }
        if (JsonSerializer.TryDeserialize<object>(root, options, out var anonymousObjectValue))
        {
            return WebhookResponseAll.AnonymousObject(anonymousObjectValue);
        }
        return WebhookResponseAll.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, WebhookResponseAll value, JsonSerializerOptions options)
    {
        if (value.TryGetWebhook(out var webhookValue))
        {
            JsonSerializer.Serialize(writer, webhookValue, options);
        }
        else if (value.TryGetAnonymousObject(out var anonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, anonymousObjectValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(WebhookResponseAll)} contains no valid value to serialize.");
        }
    }
}
