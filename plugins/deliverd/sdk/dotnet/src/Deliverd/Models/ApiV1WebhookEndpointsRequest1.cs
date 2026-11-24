using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation;
using Deliverd.Core.Validation.Attributes;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1WebhookEndpointsRequest1
{
    /// <summary>
    /// Where to POST each event. HTTPS, on a public host.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public string? Url { get; init; }

    /// <summary>
    /// What the endpoint is for, as an administrator will read it in the list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(200)]
    public string? Description { get; init; }

    /// <summary>
    /// The events to send. Empty means every event, including any added later, except the opt-in ones (gate.* lifecycle, task.blocked, side_task.completed, context.changed, audit.event), which arrive only when named.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("events")]
    public IReadOnlyList<Event>? Events { get; init; }

    /// <summary>
    /// json: the signed envelope. slack: Block Kit for an Incoming Webhook. teams: an Adaptive Card for a Workflows webhook. discord: an embed with a link button for a channel webhook. workspace_studio: fires a Google Workspace Studio starter; made by the Deliverd add-on, with runAs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public Format1? Format { get; init; }

    /// <summary>
    /// Turn deliveries off or back on. Turning one back on clears its run of failures, so an endpoint paused after twenty is not paused again by the next.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
