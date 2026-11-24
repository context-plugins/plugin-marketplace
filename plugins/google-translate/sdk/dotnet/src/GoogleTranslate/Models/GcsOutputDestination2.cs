using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Google Cloud Storage destination to write the output.
/// </summary>
public record GcsOutputDestination2
{
    /// <summary>
    /// Required. Google Cloud Storage URI to output directory. For example, <c>gs://bucket/directory</c>. The requesting user must have write permission to the bucket. The directory will be created if it doesn't exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputUriPrefix")]
    public string? OutputUriPrefix { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
