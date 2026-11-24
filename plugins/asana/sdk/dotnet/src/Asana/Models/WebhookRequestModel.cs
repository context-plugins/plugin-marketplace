using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Core.Validation;
using Asana.Core.Validation.Attributes;

namespace Asana.Models;

public record WebhookRequestModel
{
    /// <summary>
    /// A resource ID to subscribe to. Many Asana resources are valid to create webhooks on, but higher-level resources require filters.
    /// </summary>
    [JsonPropertyName("resource")]
    public required string Resource { get; init; }

    /// <summary>
    /// The URL to receive the HTTP POST. The full URL will be used to deliver events from this webhook (including parameters) which allows encoding of application-specific state when the webhook is created.
    /// </summary>
    [JsonPropertyName("target")]
    [Format(FormatKind.Uri)]
    public required string Target { get; init; }

    /// <summary>
    /// An array of WebhookFilter objects to specify a whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public IReadOnlyList<Filter>? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
