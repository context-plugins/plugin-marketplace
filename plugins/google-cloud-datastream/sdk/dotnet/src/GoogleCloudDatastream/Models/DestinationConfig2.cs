using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Required. Destination connection profile configuration.
/// </summary>
public record DestinationConfig2
{
    /// <summary>
    /// A configuration for how data should be loaded to Cloud Storage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsDestinationConfig")]
    public GcsDestinationConfig2? GcsDestinationConfig { get; init; }

    /// <summary>
    /// BigQuery destination configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bigqueryDestinationConfig")]
    public BigQueryDestinationConfig2? BigqueryDestinationConfig { get; init; }

    /// <summary>
    /// Required. Destination connection profile resource. Format: <c>projects/{project}/locations/{location}/connectionProfiles/{name}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destinationConnectionProfile")]
    public string? DestinationConnectionProfile { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
