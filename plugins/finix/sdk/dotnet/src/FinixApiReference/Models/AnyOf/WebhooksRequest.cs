using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(WebhooksRequestConverter))]
public record WebhooksRequest
{
    private readonly Optional<WebhookAllFields> _webhookAllFieldsValue;

    private readonly Optional<WebhookMinimalFieldsNoAuthentication> _webhookMinimalFieldsNoAuthenticationValue;

    private readonly Optional<WebhookBasicAuthentication> _webhookBasicAuthenticationValue;

    private readonly Optional<WebhookBearerToken> _webhookBearerTokenValue;

    private readonly Optional<WebhookEventFiltering> _webhookEventFilteringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private WebhooksRequest(Optional<WebhookAllFields> webhookAllFieldsValue,
        Optional<WebhookMinimalFieldsNoAuthentication> webhookMinimalFieldsNoAuthenticationValue,
        Optional<WebhookBasicAuthentication> webhookBasicAuthenticationValue,
        Optional<WebhookBearerToken> webhookBearerTokenValue,
        Optional<WebhookEventFiltering> webhookEventFilteringValue,
        Optional<UnknownArm> unknownValue)
    {
        _webhookAllFieldsValue = webhookAllFieldsValue;
        _webhookMinimalFieldsNoAuthenticationValue = webhookMinimalFieldsNoAuthenticationValue;
        _webhookBasicAuthenticationValue = webhookBasicAuthenticationValue;
        _webhookBearerTokenValue = webhookBearerTokenValue;
        _webhookEventFilteringValue = webhookEventFilteringValue;
        _unknownValue = unknownValue;
    }

    public static WebhooksRequest WebhookAllFields(WebhookAllFields value) =>
        new(Optional<WebhookAllFields>.Some(value), default, default, default, default, default);

    public static WebhooksRequest WebhookMinimalFieldsNoAuthentication(WebhookMinimalFieldsNoAuthentication value) =>
        new(default, Optional<WebhookMinimalFieldsNoAuthentication>.Some(value), default, default, default, default);

    public static WebhooksRequest WebhookBasicAuthentication(WebhookBasicAuthentication value) =>
        new(default, default, Optional<WebhookBasicAuthentication>.Some(value), default, default, default);

    public static WebhooksRequest WebhookBearerToken(WebhookBearerToken value) =>
        new(default, default, default, Optional<WebhookBearerToken>.Some(value), default, default);

    public static WebhooksRequest WebhookEventFiltering(WebhookEventFiltering value) =>
        new(default, default, default, default, Optional<WebhookEventFiltering>.Some(value), default);

    internal static WebhooksRequest Unknown(JsonElement value) =>
        new(default, default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetWebhookAllFields([NotNullWhen(true)] out WebhookAllFields? value) =>
        _webhookAllFieldsValue.TryGetValue(out value);

    public bool TryGetWebhookMinimalFieldsNoAuthentication([NotNullWhen(true)] out WebhookMinimalFieldsNoAuthentication? value) =>
        _webhookMinimalFieldsNoAuthenticationValue.TryGetValue(out value);

    public bool TryGetWebhookBasicAuthentication([NotNullWhen(true)] out WebhookBasicAuthentication? value) =>
        _webhookBasicAuthenticationValue.TryGetValue(out value);

    public bool TryGetWebhookBearerToken([NotNullWhen(true)] out WebhookBearerToken? value) =>
        _webhookBearerTokenValue.TryGetValue(out value);

    public bool TryGetWebhookEventFiltering([NotNullWhen(true)] out WebhookEventFiltering? value) =>
        _webhookEventFilteringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator WebhooksRequest(WebhookAllFields value) => WebhookAllFields(value);

    public static implicit operator WebhooksRequest(WebhookMinimalFieldsNoAuthentication value) =>
        WebhookMinimalFieldsNoAuthentication(value);

    public static implicit operator WebhooksRequest(WebhookBasicAuthentication value) =>
        WebhookBasicAuthentication(value);

    public static implicit operator WebhooksRequest(WebhookBearerToken value) => WebhookBearerToken(value);

    public static implicit operator WebhooksRequest(WebhookEventFiltering value) => WebhookEventFiltering(value);

    public TResult Match<TResult>(Func<WebhookAllFields, TResult> onWebhookAllFields,
        Func<WebhookMinimalFieldsNoAuthentication, TResult> onWebhookMinimalFieldsNoAuthentication,
        Func<WebhookBasicAuthentication, TResult> onWebhookBasicAuthentication,
        Func<WebhookBearerToken, TResult> onWebhookBearerToken,
        Func<WebhookEventFiltering, TResult> onWebhookEventFiltering,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetWebhookAllFields(out var webhookAllFieldsValue) => onWebhookAllFields(webhookAllFieldsValue),
            _ when TryGetWebhookMinimalFieldsNoAuthentication(
                out var webhookMinimalFieldsNoAuthenticationValue) => onWebhookMinimalFieldsNoAuthentication(
                webhookMinimalFieldsNoAuthenticationValue),
            _ when TryGetWebhookBasicAuthentication(
                out var webhookBasicAuthenticationValue) => onWebhookBasicAuthentication(
                webhookBasicAuthenticationValue),
            _ when TryGetWebhookBearerToken(out var webhookBearerTokenValue) => onWebhookBearerToken(
                webhookBearerTokenValue),
            _ when TryGetWebhookEventFiltering(out var webhookEventFilteringValue) => onWebhookEventFiltering(
                webhookEventFilteringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(WebhooksRequest)} holds no value.")
        };

    public void Match(Action<WebhookAllFields> onWebhookAllFields,
        Action<WebhookMinimalFieldsNoAuthentication> onWebhookMinimalFieldsNoAuthentication,
        Action<WebhookBasicAuthentication> onWebhookBasicAuthentication,
        Action<WebhookBearerToken> onWebhookBearerToken,
        Action<WebhookEventFiltering> onWebhookEventFiltering,
        Action<JsonElement> otherwise)
    {
        if (TryGetWebhookAllFields(out var webhookAllFieldsValue)) onWebhookAllFields(webhookAllFieldsValue);
        else if (TryGetWebhookMinimalFieldsNoAuthentication(
            out var webhookMinimalFieldsNoAuthenticationValue)) onWebhookMinimalFieldsNoAuthentication(
            webhookMinimalFieldsNoAuthenticationValue);
        else if (TryGetWebhookBasicAuthentication(
            out var webhookBasicAuthenticationValue)) onWebhookBasicAuthentication(webhookBasicAuthenticationValue);
        else if (TryGetWebhookBearerToken(out var webhookBearerTokenValue)) onWebhookBearerToken(
            webhookBearerTokenValue);
        else if (TryGetWebhookEventFiltering(out var webhookEventFilteringValue)) onWebhookEventFiltering(
            webhookEventFilteringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(WebhooksRequest)} holds no value.");
    }
}

file sealed class WebhooksRequestConverter : JsonConverter<WebhooksRequest>
{
    public override WebhooksRequest Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<WebhookAllFields>(root, options, out var webhookAllFieldsValue))
        {
            return WebhooksRequest.WebhookAllFields(webhookAllFieldsValue);
        }
        if (JsonSerializer.TryDeserialize<WebhookMinimalFieldsNoAuthentication>(
            root,
            options,
            out var webhookMinimalFieldsNoAuthenticationValue))
        {
            return WebhooksRequest.WebhookMinimalFieldsNoAuthentication(webhookMinimalFieldsNoAuthenticationValue);
        }
        if (JsonSerializer.TryDeserialize<WebhookBasicAuthentication>(
            root,
            options,
            out var webhookBasicAuthenticationValue))
        {
            return WebhooksRequest.WebhookBasicAuthentication(webhookBasicAuthenticationValue);
        }
        if (JsonSerializer.TryDeserialize<WebhookBearerToken>(root, options, out var webhookBearerTokenValue))
        {
            return WebhooksRequest.WebhookBearerToken(webhookBearerTokenValue);
        }
        if (JsonSerializer.TryDeserialize<WebhookEventFiltering>(root, options, out var webhookEventFilteringValue))
        {
            return WebhooksRequest.WebhookEventFiltering(webhookEventFilteringValue);
        }
        return WebhooksRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, WebhooksRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetWebhookAllFields(out var webhookAllFieldsValue))
        {
            JsonSerializer.Serialize(writer, webhookAllFieldsValue, options);
        }
        else if (value.TryGetWebhookMinimalFieldsNoAuthentication(out var webhookMinimalFieldsNoAuthenticationValue))
        {
            JsonSerializer.Serialize(writer, webhookMinimalFieldsNoAuthenticationValue, options);
        }
        else if (value.TryGetWebhookBasicAuthentication(out var webhookBasicAuthenticationValue))
        {
            JsonSerializer.Serialize(writer, webhookBasicAuthenticationValue, options);
        }
        else if (value.TryGetWebhookBearerToken(out var webhookBearerTokenValue))
        {
            JsonSerializer.Serialize(writer, webhookBearerTokenValue, options);
        }
        else if (value.TryGetWebhookEventFiltering(out var webhookEventFilteringValue))
        {
            JsonSerializer.Serialize(writer, webhookEventFilteringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(WebhooksRequest)} contains no valid value to serialize.");
        }
    }
}
