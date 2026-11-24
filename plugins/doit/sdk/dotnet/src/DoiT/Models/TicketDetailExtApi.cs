using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Detailed information about a single support ticket.
/// </summary>
public record TicketDetailExtApi
{
    /// <summary>
    /// Ticket ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public long? Id { get; init; }

    /// <summary>
    /// The subject of the ticket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject")]
    public string? Subject { get; init; }

    /// <summary>
    /// The body of the initial ticket message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Email address of the ticket requester.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requester")]
    public string? Requester { get; init; }

    /// <summary>
    /// Ticket severity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("severity")]
    public SeverityDoiTSupportRequestsApi? Severity { get; init; }

    /// <summary>
    /// Platform of the ticket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform")]
    public PlatformDoiTSupportRequestsApi? Platform { get; init; }

    /// <summary>
    /// Ticket product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product")]
    public string? Product { get; init; }

    /// <summary>
    /// The cloud asset identifier(s) the requester selected on the support
    /// form's asset-selector control — typically the GCP project ID, AWS
    /// account ID, Azure subscription ID, or equivalent. May contain
    /// multiple identifiers as a comma-separated list (no spaces) when the
    /// requester selected more than one asset, e.g.
    /// "111111111111,222222222222". Empty string when the ticket has no
    /// asset value (e.g. older tickets or tickets opened through paths that
    /// bypass the form selector).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform_info")]
    public string? PlatformInfo { get; init; }

    /// <summary>
    /// Ticket status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// The time when this ticket was created, in milliseconds since the epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public long? CreateTime { get; init; }

    /// <summary>
    /// The time when this ticket was last updated, in milliseconds since the epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public long? UpdateTime { get; init; }

    /// <summary>
    /// Link to the ticket in DoiT console.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("urlUI")]
    public string? UrlUi { get; init; }

    /// <summary>
    /// Whether the ticket is public.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_public")]
    public bool? IsPublic { get; init; }

    /// <summary>
    /// Ticket tags, filtered by caller type. DoiT employee (doer) callers
    /// receive the full tag set verbatim, including internal namespaces
    /// (e.g. <c>tier/*</c>, <c>synapse_*</c>). Customer callers receive only tags
    /// under the <c>customer_tag/</c> namespace, with that prefix stripped
    /// (e.g. a tag added as <c>billing</c> reads back as <c>billing</c>). Always
    /// present; empty array when the caller has no visible tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
