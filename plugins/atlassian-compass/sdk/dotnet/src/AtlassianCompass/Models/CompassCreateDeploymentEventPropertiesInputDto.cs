using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Models.Enums;

namespace AtlassianCompass.Models;

/// <summary>
/// The list of properties of the deployment event.
/// </summary>
public record CompassCreateDeploymentEventPropertiesInputDto
{
    /// <summary>
    /// The sequence number for the deployment.
    /// </summary>
    [JsonPropertyName("sequenceNumber")]
    public required long SequenceNumber { get; init; }

    /// <summary>
    /// The state of the deployment.
    /// </summary>
    [JsonPropertyName("state")]
    public required State1 State { get; init; }

    /// <summary>
    /// The deployment event pipeline.
    /// </summary>
    [JsonPropertyName("pipeline")]
    public required CompassDeploymentEventPipelineInputDto Pipeline { get; init; }

    /// <summary>
    /// The environment where the deployment event has occurred.
    /// </summary>
    [JsonPropertyName("environment")]
    public required CompassDeploymentEventEnvironmentInputDto Environment { get; init; }

    /// <summary>
    /// The time this deployment was started at.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startedAt")]
    public DateTimeOffset? StartedAt { get; init; }

    /// <summary>
    /// The time this deployment was completed at.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completedAt")]
    public DateTimeOffset? CompletedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
