using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// The Google Cloud Storage location for the input content.
/// </summary>
public record GcsSource
{
    /// <summary>
    /// Required. Source data URI. For example, <c>gs://my_bucket/my_object</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputUri")]
    public string? InputUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
