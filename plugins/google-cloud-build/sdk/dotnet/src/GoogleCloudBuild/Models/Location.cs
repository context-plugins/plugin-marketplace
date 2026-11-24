using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// A resource that represents a Google Cloud location.
/// </summary>
public record Location
{
    /// <summary>
    /// Service-specific metadata. For example the available capacity at the given location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    /// <summary>
    /// The canonical id for this location. For example: <c>"us-east1"</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locationId")]
    public string? LocationId { get; init; }

    /// <summary>
    /// The friendly name for this location, typically a nearby city name. For example, "Tokyo".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Resource name for the location, which may vary between implementations. For example: <c>"projects/example-project/locations/us-east1"</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
