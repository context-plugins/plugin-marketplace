using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Semrush.Core.Models;
using Semrush.Models.Enums;

namespace Semrush.Models;

/// <summary>
/// Event status response
/// </summary>
public record Data
{
    /// <summary>
    /// Global event identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// Event registration time in ISO format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ts")]
    public DateTimeOffset? Ts { get; init; }

    /// <summary>
    /// State of event processing.
    /// * 1 - Event has been registered and awaiting processing
    /// * 2 - Event processing was delayed
    /// * 3 - Event was processed
    /// * 4 - Event has nothing to do with
    /// * 5 - Event processing was blocked by internal rules
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public EventState? State { get; init; }

    /// <summary>
    /// Time when event get in current state in ISO format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state_on")]
    public DateTimeOffset? StateOn { get; init; }

    /// <summary>
    /// Processing decision
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("decision")]
    public string? Decision { get; init; }

    /// <summary>
    /// Actions taken on event
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actions")]
    public IReadOnlyList<EventAction>? Actions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
