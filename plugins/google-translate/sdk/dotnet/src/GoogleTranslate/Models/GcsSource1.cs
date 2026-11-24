using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Google Cloud Storage location. This must be a single file. For example: gs://example_bucket/example_file.pdf
/// </summary>
public record GcsSource1
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
