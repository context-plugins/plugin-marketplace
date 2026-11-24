using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiExecuteDataStandardsRequestDto
{
    [JsonPropertyName("datasetId")]
    public required string DatasetId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
