using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1ReportsDataResponse1
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("sizeBytes")]
    public required double SizeBytes { get; init; }

    [JsonPropertyName("updatedAt")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
