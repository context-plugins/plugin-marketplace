using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, webhook_subscription.
/// </summary>
[JsonConverter(typeof(WebhookSubscriptionConverter))]
public record WebhookSubscription
{
    public required ObjectModel ObjectModel { get; init; }

    public required WebhookSubscriptionProperties WebhookSubscriptionProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out WebhookSubscriptionProperties webhookSubscriptionProperties)
    {
        objectModel = ObjectModel;
        webhookSubscriptionProperties = WebhookSubscriptionProperties;
    }

    public static implicit operator ObjectModel(WebhookSubscription value) => value.ObjectModel;

    public static implicit operator WebhookSubscriptionProperties(WebhookSubscription value) =>
        value.WebhookSubscriptionProperties;
}

file class WebhookSubscriptionConverter : JsonConverter<WebhookSubscription>
{
    public override WebhookSubscription Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var webhookSubscriptionProperties = root.Deserialize<WebhookSubscriptionProperties>(options) ??
            throw new JsonException("Failed to deserialize WebhookSubscriptionProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                webhookSubscriptionProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        webhookSubscriptionProperties.AdditionalProperties.Clear();
        return new WebhookSubscription
        {
            ObjectModel = objectModel,
            WebhookSubscriptionProperties = webhookSubscriptionProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, WebhookSubscription value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.WebhookSubscriptionProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
