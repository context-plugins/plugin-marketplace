using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Specifies an optional destination for the recognition results.
/// </summary>
public record TranscriptOutputConfig
{
    /// <summary>
    /// Specifies a Cloud Storage URI for the recognition results. Must be specified in the format: <c>gs://bucket_name/object_name</c>, and the bucket must already exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsUri")]
    public string? GcsUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
