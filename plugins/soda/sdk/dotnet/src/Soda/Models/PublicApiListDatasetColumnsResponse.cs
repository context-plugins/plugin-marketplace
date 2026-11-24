using System.Collections.Generic;
using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiListDatasetColumnsResponse
{
    [JsonPropertyName("content")]
    public required IReadOnlyList<PublicApiDatasetColumnContentDto> Content { get; init; }

    [JsonPropertyName("first")]
    public required bool First { get; init; }

    [JsonPropertyName("last")]
    public required bool Last { get; init; }

    [JsonPropertyName("number")]
    public required int Number { get; init; }

    [JsonPropertyName("size")]
    public required int Size { get; init; }

    [JsonPropertyName("totalElements")]
    public required int TotalElements { get; init; }

    [JsonPropertyName("totalPages")]
    public required int TotalPages { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
