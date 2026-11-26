using System.Text.Json.Serialization;
using Search1Api.Core.Models;

namespace Search1Api.Models;

public record ExtractResponse
{
    [JsonPropertyName("success")]
    public string Success { get; } = "True";

    [JsonPropertyName("extractParameters")]
    public required ExtractParameters ExtractParameters { get; init; }

    [JsonPropertyName("results")]
    public required object Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
