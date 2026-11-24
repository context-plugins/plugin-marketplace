using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// A citation for a web resource used to generate a model response.
/// </summary>
public record AnnotationUrlCitation
{
    [JsonPropertyName("end_index")]
    public required int EndIndex { get; init; }

    [JsonPropertyName("start_index")]
    public required int StartIndex { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "url_citation";

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
