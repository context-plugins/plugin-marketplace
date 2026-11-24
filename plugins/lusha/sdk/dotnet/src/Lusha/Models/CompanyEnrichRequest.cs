using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CompanyEnrichRequest
{
    /// <summary>
    /// The requestId from the Prospecting Search response
    /// </summary>
    [JsonPropertyName("requestId")]
    public required string RequestId { get; init; }

    /// <summary>
    /// An array of company IDs for enrichment. Min 1, max 100.
    /// </summary>
    [JsonPropertyName("companiesIds")]
    public required IReadOnlyList<string> CompaniesIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
