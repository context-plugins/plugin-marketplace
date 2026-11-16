using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(WebhooksRequest1Converter))]
public record WebhooksRequest1
{
    private readonly Optional<UpdateWebhookAllFields> _updateWebhookAllFieldsValue;

    private readonly Optional<UpdateWebhookAddAuthenticationToAWebhook> _updateWebhookAddAuthenticationToAWebhookValue;

    private readonly Optional<UpdateWebhookEnableDisableWebhookEvents> _updateWebhookEnableDisableWebhookEventsValue;

    private readonly Optional<UpdateWebhookFilterEvents> _updateWebhookFilterEventsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private WebhooksRequest1(Optional<UpdateWebhookAllFields> updateWebhookAllFieldsValue,
        Optional<UpdateWebhookAddAuthenticationToAWebhook> updateWebhookAddAuthenticationToAWebhookValue,
        Optional<UpdateWebhookEnableDisableWebhookEvents> updateWebhookEnableDisableWebhookEventsValue,
        Optional<UpdateWebhookFilterEvents> updateWebhookFilterEventsValue,
        Optional<UnknownArm> unknownValue)
    {
        _updateWebhookAllFieldsValue = updateWebhookAllFieldsValue;
        _updateWebhookAddAuthenticationToAWebhookValue = updateWebhookAddAuthenticationToAWebhookValue;
        _updateWebhookEnableDisableWebhookEventsValue = updateWebhookEnableDisableWebhookEventsValue;
        _updateWebhookFilterEventsValue = updateWebhookFilterEventsValue;
        _unknownValue = unknownValue;
    }

    public static WebhooksRequest1 UpdateWebhookAllFields(UpdateWebhookAllFields value) =>
        new(Optional<UpdateWebhookAllFields>.Some(value), default, default, default, default);

    public static WebhooksRequest1 UpdateWebhookAddAuthenticationToAWebhook(UpdateWebhookAddAuthenticationToAWebhook value) =>
        new(default, Optional<UpdateWebhookAddAuthenticationToAWebhook>.Some(value), default, default, default);

    public static WebhooksRequest1 UpdateWebhookEnableDisableWebhookEvents(UpdateWebhookEnableDisableWebhookEvents value) =>
        new(default, default, Optional<UpdateWebhookEnableDisableWebhookEvents>.Some(value), default, default);

    public static WebhooksRequest1 UpdateWebhookFilterEvents(UpdateWebhookFilterEvents value) =>
        new(default, default, default, Optional<UpdateWebhookFilterEvents>.Some(value), default);

    internal static WebhooksRequest1 Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUpdateWebhookAllFields([NotNullWhen(true)] out UpdateWebhookAllFields? value) =>
        _updateWebhookAllFieldsValue.TryGetValue(out value);

    public bool TryGetUpdateWebhookAddAuthenticationToAWebhook([NotNullWhen(true)] out UpdateWebhookAddAuthenticationToAWebhook? value) =>
        _updateWebhookAddAuthenticationToAWebhookValue.TryGetValue(out value);

    public bool TryGetUpdateWebhookEnableDisableWebhookEvents([NotNullWhen(true)] out UpdateWebhookEnableDisableWebhookEvents? value) =>
        _updateWebhookEnableDisableWebhookEventsValue.TryGetValue(out value);

    public bool TryGetUpdateWebhookFilterEvents([NotNullWhen(true)] out UpdateWebhookFilterEvents? value) =>
        _updateWebhookFilterEventsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator WebhooksRequest1(UpdateWebhookAllFields value) => UpdateWebhookAllFields(value);

    public static implicit operator WebhooksRequest1(UpdateWebhookAddAuthenticationToAWebhook value) =>
        UpdateWebhookAddAuthenticationToAWebhook(value);

    public static implicit operator WebhooksRequest1(UpdateWebhookEnableDisableWebhookEvents value) =>
        UpdateWebhookEnableDisableWebhookEvents(value);

    public static implicit operator WebhooksRequest1(UpdateWebhookFilterEvents value) =>
        UpdateWebhookFilterEvents(value);

    public TResult Match<TResult>(Func<UpdateWebhookAllFields, TResult> onUpdateWebhookAllFields,
        Func<UpdateWebhookAddAuthenticationToAWebhook, TResult> onUpdateWebhookAddAuthenticationToAWebhook,
        Func<UpdateWebhookEnableDisableWebhookEvents, TResult> onUpdateWebhookEnableDisableWebhookEvents,
        Func<UpdateWebhookFilterEvents, TResult> onUpdateWebhookFilterEvents,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUpdateWebhookAllFields(out var updateWebhookAllFieldsValue) => onUpdateWebhookAllFields(
                updateWebhookAllFieldsValue),
            _ when TryGetUpdateWebhookAddAuthenticationToAWebhook(
                out var updateWebhookAddAuthenticationToAWebhookValue) => onUpdateWebhookAddAuthenticationToAWebhook(
                updateWebhookAddAuthenticationToAWebhookValue),
            _ when TryGetUpdateWebhookEnableDisableWebhookEvents(
                out var updateWebhookEnableDisableWebhookEventsValue) => onUpdateWebhookEnableDisableWebhookEvents(
                updateWebhookEnableDisableWebhookEventsValue),
            _ when TryGetUpdateWebhookFilterEvents(
                out var updateWebhookFilterEventsValue) => onUpdateWebhookFilterEvents(updateWebhookFilterEventsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(WebhooksRequest1)} holds no value.")
        };

    public void Match(Action<UpdateWebhookAllFields> onUpdateWebhookAllFields,
        Action<UpdateWebhookAddAuthenticationToAWebhook> onUpdateWebhookAddAuthenticationToAWebhook,
        Action<UpdateWebhookEnableDisableWebhookEvents> onUpdateWebhookEnableDisableWebhookEvents,
        Action<UpdateWebhookFilterEvents> onUpdateWebhookFilterEvents,
        Action<JsonElement> otherwise)
    {
        if (TryGetUpdateWebhookAllFields(out var updateWebhookAllFieldsValue)) onUpdateWebhookAllFields(
            updateWebhookAllFieldsValue);
        else if (TryGetUpdateWebhookAddAuthenticationToAWebhook(
            out var updateWebhookAddAuthenticationToAWebhookValue)) onUpdateWebhookAddAuthenticationToAWebhook(
            updateWebhookAddAuthenticationToAWebhookValue);
        else if (TryGetUpdateWebhookEnableDisableWebhookEvents(
            out var updateWebhookEnableDisableWebhookEventsValue)) onUpdateWebhookEnableDisableWebhookEvents(
            updateWebhookEnableDisableWebhookEventsValue);
        else if (TryGetUpdateWebhookFilterEvents(out var updateWebhookFilterEventsValue)) onUpdateWebhookFilterEvents(
            updateWebhookFilterEventsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(WebhooksRequest1)} holds no value.");
    }
}

file sealed class WebhooksRequest1Converter : JsonConverter<WebhooksRequest1>
{
    public override WebhooksRequest1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<UpdateWebhookAllFields>(root, options, out var updateWebhookAllFieldsValue))
        {
            return WebhooksRequest1.UpdateWebhookAllFields(updateWebhookAllFieldsValue);
        }
        if (JsonSerializer.TryDeserialize<UpdateWebhookAddAuthenticationToAWebhook>(
            root,
            options,
            out var updateWebhookAddAuthenticationToAWebhookValue))
        {
            return WebhooksRequest1.UpdateWebhookAddAuthenticationToAWebhook(
                updateWebhookAddAuthenticationToAWebhookValue);
        }
        if (JsonSerializer.TryDeserialize<UpdateWebhookEnableDisableWebhookEvents>(
            root,
            options,
            out var updateWebhookEnableDisableWebhookEventsValue))
        {
            return WebhooksRequest1.UpdateWebhookEnableDisableWebhookEvents(
                updateWebhookEnableDisableWebhookEventsValue);
        }
        if (JsonSerializer.TryDeserialize<UpdateWebhookFilterEvents>(
            root,
            options,
            out var updateWebhookFilterEventsValue))
        {
            return WebhooksRequest1.UpdateWebhookFilterEvents(updateWebhookFilterEventsValue);
        }
        return WebhooksRequest1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, WebhooksRequest1 value, JsonSerializerOptions options)
    {
        if (value.TryGetUpdateWebhookAllFields(out var updateWebhookAllFieldsValue))
        {
            JsonSerializer.Serialize(writer, updateWebhookAllFieldsValue, options);
        }
        else if (value.TryGetUpdateWebhookAddAuthenticationToAWebhook(
            out var updateWebhookAddAuthenticationToAWebhookValue))
        {
            JsonSerializer.Serialize(writer, updateWebhookAddAuthenticationToAWebhookValue, options);
        }
        else if (value.TryGetUpdateWebhookEnableDisableWebhookEvents(
            out var updateWebhookEnableDisableWebhookEventsValue))
        {
            JsonSerializer.Serialize(writer, updateWebhookEnableDisableWebhookEventsValue, options);
        }
        else if (value.TryGetUpdateWebhookFilterEvents(out var updateWebhookFilterEventsValue))
        {
            JsonSerializer.Serialize(writer, updateWebhookFilterEventsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(WebhooksRequest1)} contains no valid value to serialize.");
        }
    }
}
