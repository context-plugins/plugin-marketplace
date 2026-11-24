using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Core.Validation;
using Asana.Core.Validation.Attributes;

namespace Asana.Models;

public record WebhookResponse
{
    /// <summary>
    /// Globally unique identifier of the resource, as a string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gid")]
    public string? Gid { get; init; }

    /// <summary>
    /// The base type of this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_type")]
    public string? ResourceType { get; init; }

    /// <summary>
    /// If true, the webhook will send events - if false it is considered inactive and will not generate events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active")]
    public bool? Active { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource")]
    public AsanaNamedResource? Resource { get; init; }

    /// <summary>
    /// The URL to receive the HTTP POST.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("target")]
    [Format(FormatKind.Uri)]
    public string? Target { get; init; }

    /// <summary>
    /// The time at which this resource was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// The timestamp when the webhook last received an error when sending an event to the target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_failure_at")]
    public DateTimeOffset? LastFailureAt { get; init; }

    /// <summary>
    /// The contents of the last error response sent to the webhook when attempting to deliver events to the target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_failure_content")]
    public string? LastFailureContent { get; init; }

    /// <summary>
    /// The timestamp when the webhook last successfully sent an event to the target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_success_at")]
    public DateTimeOffset? LastSuccessAt { get; init; }

    /// <summary>
    /// Whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public IReadOnlyList<Filter>? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
