using System.Text.Json.Serialization;
using S1.Core.Models;
using S1.Core.Validation.Attributes;

namespace S1.Models;

public record Result
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public SearchResponse? Data { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error2? Error { get; init; }

    [JsonPropertyName("cost")]
    [Minimum(0)]
    public required int Cost { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
