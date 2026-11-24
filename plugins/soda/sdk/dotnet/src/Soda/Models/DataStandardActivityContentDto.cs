using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record DataStandardActivityContentDto
{
    [JsonPropertyName("activeCount")]
    public required int ActiveCount { get; init; }

    [JsonPropertyName("checkResults")]
    public required DataStandardCheckResultsDto CheckResults { get; init; }

    [JsonPropertyName("datasetCount")]
    public required int DatasetCount { get; init; }

    [JsonPropertyName("totalCount")]
    public required int TotalCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
