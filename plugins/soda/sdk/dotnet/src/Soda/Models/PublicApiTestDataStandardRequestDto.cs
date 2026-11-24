using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiTestDataStandardRequestDto
{
    [JsonPropertyName("contents")]
    public required string Contents { get; init; }

    [JsonPropertyName("datasetId")]
    public required string DatasetId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
