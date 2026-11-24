using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Profile for connecting to a Spanner source.
/// </summary>
public record SpannerProfile
{
    /// <summary>
    /// Optional. The Spanner endpoint to connect to. Defaults to the global endpoint (https://spanner.googleapis.com). Must be in the format: https://spanner.{region}.rep.googleapis.com.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("host")]
    public string? Host { get; init; }

    /// <summary>
    /// Required. Immutable. Cloud Spanner database resource. This field is immutable. Must be in the format: projects/{project}/instances/{instance}/databases/{database_id}.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("database")]
    public string? Database { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
