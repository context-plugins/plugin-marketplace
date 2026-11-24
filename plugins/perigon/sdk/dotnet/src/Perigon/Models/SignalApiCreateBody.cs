using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Perigon.Core.Models;
using Perigon.Models.Enums;

namespace Perigon.Models;

public record SignalApiCreateBody
{
    /// <summary>
    /// Display name for the monitor. Must be non-blank and at most 256 characters.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(256, MinimumLength = 0)]
    public required string Name { get; init; }

    /// <summary>
    /// Required initial monitor status. Accepts ACTIVE or DRAFT.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status1PerigonMonitorsApi? Status { get; init; }

    /// <summary>
    /// How matching content is classified. Accepts EVENT, MENTIONS, or TOPIC.
    /// </summary>
    [JsonPropertyName("classificationType")]
    public required ClassificationType2 ClassificationType { get; init; }

    /// <summary>
    /// Plain-language objective that defines what the monitor tracks. Must be non-blank and at most 4,096 characters.
    /// </summary>
    [JsonPropertyName("monitoringObjective")]
    [StringLength(4096, MinimumLength = 0)]
    public required string MonitoringObjective { get; init; }

    /// <summary>
    /// Optional instructions used to guide monitor processing. Limited to 8,192 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt")]
    [StringLength(8192, MinimumLength = 0)]
    public string? Prompt { get; init; }

    /// <summary>
    /// Schema for the structured data extracted into each matching event.
    /// </summary>
    [JsonPropertyName("dataSchema")]
    public required SignalMonitoringPlanDataSchema DataSchema { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("newsletterConfig")]
    public SignalMonitoringPlanNewsletterConfig? NewsletterConfig { get; init; }

    /// <summary>
    /// Entity groups the monitor should identify in matching content. Null is treated as an empty list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entityGroups")]
    public IReadOnlyList<EntityGroup>? EntityGroups { get; init; }

    /// <summary>
    /// Article search filters that determine which content the monitor evaluates.
    /// </summary>
    [JsonPropertyName("query")]
    public required ComplexAllEndpointQuery Query { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedulePolicy")]
    public SignalSchedulePolicy? SchedulePolicy { get; init; }

    /// <summary>
    /// Numeric ID of a visible watchlist in the monitor's organization to associate with the monitor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("watchlistId")]
    public int? WatchlistId { get; init; }

    /// <summary>
    /// UUIDs of verified, non-archived contact points that receive monitor notifications.
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
