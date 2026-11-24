using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Company search result
/// </summary>
public record CompanySearchResult
{
    [JsonPropertyName("status")]
    public required int Status { get; init; }

    [JsonPropertyName("numResults")]
    public required long NumResults { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<Company> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
