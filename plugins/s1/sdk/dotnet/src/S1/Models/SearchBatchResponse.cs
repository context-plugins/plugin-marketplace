using System.Collections.Generic;
using System.Text.Json.Serialization;
using S1.Core.Models;

namespace S1.Models;

public record SearchBatchResponse
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<Result> Results { get; init; }

    [JsonPropertyName("summary")]
    public required Summary Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
