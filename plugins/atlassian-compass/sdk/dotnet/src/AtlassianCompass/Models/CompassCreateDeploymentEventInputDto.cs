using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Models;

/// <summary>
/// A deployment event.
/// </summary>
public record CompassCreateDeploymentEventInputDto
{
    /// <summary>
    /// The name of the deployment event.
    /// </summary>
    [JsonPropertyName("displayName")]
    public required string DisplayName { get; init; }

    /// <summary>
    /// A number specifying the order of the update to the event. Must be incremented to save new events. Otherwise, the request will be ignored.
    /// </summary>
    [JsonPropertyName("updateSequenceNumber")]
    public required long UpdateSequenceNumber { get; init; }

    /// <summary>
    /// The URL of the deployment event.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// The description of the deployment event.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// The last time this event was updated.
    /// </summary>
    [JsonPropertyName("lastUpdated")]
    public required DateTimeOffset LastUpdated { get; init; }

    /// <summary>
    /// The ID of the external event source.
    /// </summary>
    [JsonPropertyName("externalEventSourceId")]
    public required string ExternalEventSourceId { get; init; }

    /// <summary>
    /// The list of properties of the deployment event.
    /// </summary>
    [JsonPropertyName("deploymentProperties")]
    public required CompassCreateDeploymentEventPropertiesInputDto DeploymentProperties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
