using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2IdentitiesResponse
{
    /// <summary>
    /// List of identities
    /// </summary>
    [JsonPropertyName("identities")]
    public required IReadOnlyList<Identity> Identities { get; init; }

    /// <summary>
    /// Pagination metadata
    /// </summary>
    [JsonPropertyName("pagination")]
    public required PaginationDidlogicComHlrLookupsApi Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
