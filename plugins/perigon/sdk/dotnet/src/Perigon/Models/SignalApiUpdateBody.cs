using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Perigon.Core.Models;
using Perigon.Models.Enums;

namespace Perigon.Models;

public record SignalApiUpdateBody
{
    /// <summary>
    /// New display name for the monitor. Must be non-blank and at most 256 characters.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(256, MinimumLength = 0)]
    public required string Name { get; init; }

    /// <summary>
    /// New classification behavior. Accepts EVENT, MENTIONS, or TOPIC.
    /// </summary>
    [JsonPropertyName("classificationType")]
    public required ClassificationType1 ClassificationType { get; init; }

    /// <summary>
    /// New plain-language monitoring objective. Must be non-blank and at most 4,096 characters.
    /// </summary>
    [JsonPropertyName("monitoringObjective")]
    [StringLength(4096, MinimumLength = 0)]
    public required string MonitoringObjective { get; init; }

    /// <summary>
    /// New instructions used to guide monitor processing. Limited to 8,192 characters and may be cleared with null.
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
    /// Replacement entity groups for the monitor. Send an empty list to remove all groups.
    /// </summary>
    [JsonPropertyName("entityGroups")]
    public required IReadOnlyList<EntityGroup> EntityGroups { get; init; }

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
    /// Replacement UUIDs of verified, non-archived contact points. Send an empty list to remove all contact points.
    /// </summary>
    [JsonPropertyName("contactPointIds")]
    public required IReadOnlyList<Guid> ContactPointIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("xQuery")]
    public SignalXQuery? XQuery { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
