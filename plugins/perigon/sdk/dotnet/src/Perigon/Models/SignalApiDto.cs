using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;
using Perigon.Models.Enums;

namespace Perigon.Models;

/// <summary>
/// Monitor payload.
/// </summary>
public record SignalApiDto
{
    /// <summary>
    /// Unique identifier for the monitor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public Guid? Uuid { get; init; }

    /// <summary>
    /// Display name of the monitor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Date and time the monitor was created, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Date and time the monitor was last updated, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// Current lifecycle status: DRAFT, ACTIVE, STOPPED, or ARCHIVED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusPerigonMonitorsApi? Status { get; init; }

    /// <summary>
    /// How matching content is classified: EVENT, MENTIONS, or TOPIC.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classificationType")]
    public ClassificationType? ClassificationType { get; init; }

    /// <summary>
    /// Plain-language objective that defines what the monitor tracks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monitoringObjective")]
    public string? MonitoringObjective { get; init; }

    /// <summary>
    /// Optional instructions used to guide monitor processing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt")]
    public string? Prompt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataSchema")]
    public SignalMonitoringPlanDataSchema? DataSchema { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("newsletterConfig")]
    public SignalMonitoringPlanNewsletterConfig? NewsletterConfig { get; init; }

    /// <summary>
    /// Entity groups the monitor identifies in matching content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entityGroups")]
    public IReadOnlyList<EntityGroup>? EntityGroups { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("query")]
    public ComplexAllEndpointQuery? Query { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedulePolicy")]
    public SignalSchedulePolicy? SchedulePolicy { get; init; }

    /// <summary>
    /// Numeric ID of the watchlist associated with the monitor, if any.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("watchlistId")]
    public int? WatchlistId { get; init; }

    /// <summary>
    /// UUIDs of contact points configured to receive monitor notifications.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contactPointIds")]
    public IReadOnlyList<Guid>? ContactPointIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("xQuery")]
    public SignalXQuery? XQuery { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
