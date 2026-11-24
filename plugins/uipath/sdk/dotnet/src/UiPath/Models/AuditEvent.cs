using System;
using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Core.Validation;
using UiPath.Core.Validation.Attributes;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// A single audit event record
/// </summary>
public record AuditEvent
{
    /// <summary>
    /// Unique identifier of the audit event
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the event occurred
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdOn")]
    public DateTimeOffset? CreatedOn { get; init; }

    /// <summary>
    /// Identifier of the organization in which the event occurred
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organizationId")]
    public string? OrganizationId { get; init; }

    /// <summary>
    /// Identifier of the user or service that performed the action
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actorId")]
    public string? ActorId { get; init; }

    /// <summary>
    /// Email address of the actor who performed the action
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actorEmail")]
    [Format(FormatKind.Email)]
    public string? ActorEmail { get; init; }

    /// <summary>
    /// Type identifier of the audit event
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventType")]
    public string? EventType { get; init; }

    /// <summary>
    /// Service that generated the audit event
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventSource")]
    public string? EventSource { get; init; }

    /// <summary>
    /// Category of resource targeted by the action
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventTarget")]
    public string? EventTarget { get; init; }

    /// <summary>
    /// Detailed payload of the audit event in service-specific format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventDetails")]
    public object? EventDetails { get; init; }

    /// <summary>
    /// Human-readable summary of the audit event
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventSummary")]
    public string? EventSummary { get; init; }

    /// <summary>
    /// Outcome status (0 = success, 1 = failed)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    /// <summary>
    /// Client connection information for an audit event
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientInfo")]
    public ClientInfo? ClientInfo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
