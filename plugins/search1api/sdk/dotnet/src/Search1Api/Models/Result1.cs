using System.Text.Json.Serialization;
using Search1Api.Core.Models;
using Search1Api.Core.Validation.Attributes;

namespace Search1Api.Models;

public record Result1
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public NewsResponse? Data { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error2? Error { get; init; }

    [JsonPropertyName("cost")]
    [Minimum(0)]
    public required int Cost { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
