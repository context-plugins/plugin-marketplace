using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// The Google Cloud Storage location for the output content.
/// </summary>
public record GcsDestination
{
    /// <summary>
    /// Required. The bucket used in 'output_uri_prefix' must exist and there must be no files under 'output_uri_prefix'. 'output_uri_prefix' must end with "/" and start with "gs://". One 'output_uri_prefix' can only be used by one batch translation job at a time. Otherwise an INVALID_ARGUMENT (400) error is returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputUriPrefix")]
    public string? OutputUriPrefix { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
