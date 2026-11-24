using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation;
using Deliverd.Core.Validation.Attributes;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1WebhookEndpointsRequest
{
    /// <summary>
    /// Where to POST each event. HTTPS, on a public host.
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

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
    public Format1? Format { get; init; } = Format1.Json;

    /// <summary>
    /// workspace_studio only: the Google address of the person whose flow this starter belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runAs")]
    [MaxLength(254)]
    [Format(FormatKind.Email)]
    public string? RunAs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
