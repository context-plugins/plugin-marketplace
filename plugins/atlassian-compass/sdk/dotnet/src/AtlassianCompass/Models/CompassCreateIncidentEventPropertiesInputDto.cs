using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Models.Enums;

namespace AtlassianCompass.Models;

/// <summary>
/// The list of properties of the incident event.
/// </summary>
public record CompassCreateIncidentEventPropertiesInputDto
{
    /// <summary>
    /// The ID of the incident.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The state of the incident.
    /// </summary>
    [JsonPropertyName("state")]
    public required State State { get; init; }

    /// <summary>
    /// The severity of the incident
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("severity")]
    public CompassIncidentEventSeverityInputDto? Severity { get; init; }

    /// <summary>
    /// The time when the incident started
    /// </summary>
    [JsonPropertyName("startTime")]
    public required DateTimeOffset StartTime { get; init; }

    /// <summary>
    /// The time when the incident ended
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
