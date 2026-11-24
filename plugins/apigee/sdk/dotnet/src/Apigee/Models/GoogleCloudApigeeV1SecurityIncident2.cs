using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Required. The security incident to update. Must contain all existing populated fields of the current incident.
/// </summary>
public record GoogleCloudApigeeV1SecurityIncident2
{
    /// <summary>
    /// Output only. Detection types which are part of the incident. Examples: Flooder, OAuth Abuser, Static Content Scraper, Anomaly Detection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detectionTypes")]
    public IReadOnlyList<string>? DetectionTypes { get; init; }

    /// <summary>
    /// Optional. Indicates if the user archived this incident.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("observability")]
    public Observability? Observability { get; init; }

    /// <summary>
    /// Optional. Display name of the security incident.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Output only. The time when events associated with the incident were first detected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstDetectedTime")]
    public string? FirstDetectedTime { get; init; }

    /// <summary>
    /// Total traffic detected as part of the incident.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trafficCount")]
    public string? TrafficCount { get; init; }

    /// <summary>
    /// Output only. Risk level of the incident.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("riskLevel")]
    public RiskLevel? RiskLevel { get; init; }

    /// <summary>
    /// Immutable. Name of the security incident resource. Format: organizations/{org}/environments/{environment}/securityIncidents/{incident} Example: organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. The time when the incident observability was last changed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastObservabilityChangeTime")]
    public string? LastObservabilityChangeTime { get; init; }

    /// <summary>
    /// Output only. The time when events associated with the incident were last detected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastDetectedTime")]
    public string? LastDetectedTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
