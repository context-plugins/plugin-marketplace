using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apibara.Core.Models;
using Apibara.Models.Enums;

namespace Apibara.Models;

public record VehicleChangeEvent
{
    [JsonPropertyName("sequence")]
    public required long Sequence { get; init; }

    [JsonPropertyName("event_id")]
    public required string EventId { get; init; }

    [JsonPropertyName("event")]
    public required Event Event { get; init; }

    /// <summary>
    /// True only for terminal outcomes such as sold, not sold or removed.
    /// </summary>
    [JsonPropertyName("terminal")]
    public required bool Terminal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    [JsonPropertyName("vehicle")]
    public required Vehicle1 Vehicle { get; init; }

    /// <summary>
    /// Canonical field paths changed by this event.
    /// </summary>
    [JsonPropertyName("changed_fields")]
    public required IReadOnlyList<string> ChangedFields { get; init; }

    [JsonPropertyName("before")]
    public required object Before { get; init; }

    [JsonPropertyName("after")]
    public required object After { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vehicle_updated_at")]
    public DateTimeOffset? VehicleUpdatedAt { get; init; }

    [JsonPropertyName("recorded_at")]
    public required DateTimeOffset RecordedAt { get; init; }

    /// <summary>
    /// Optional current full normalized vehicle record returned when include_record=true. May be null for deleted records.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("record")]
    public Vehicle? Record { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
