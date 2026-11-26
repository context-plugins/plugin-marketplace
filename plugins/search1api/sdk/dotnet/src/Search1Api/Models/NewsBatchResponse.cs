using System.Collections.Generic;
using System.Text.Json.Serialization;
using Search1Api.Core.Models;

namespace Search1Api.Models;

public record NewsBatchResponse
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<Result1> Results { get; init; }

    [JsonPropertyName("summary")]
    public required Summary Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
