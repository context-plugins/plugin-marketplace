using System.Text.Json.Serialization;
using S1.Core.Models;

namespace S1.Models;

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
