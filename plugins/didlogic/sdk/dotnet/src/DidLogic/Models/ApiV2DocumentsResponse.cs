using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2DocumentsResponse
{
    /// <summary>
    /// List of documents
    /// </summary>
    [JsonPropertyName("documents")]
    public required IReadOnlyList<Document> Documents { get; init; }

    /// <summary>
    /// Pagination metadata
    /// </summary>
    [JsonPropertyName("pagination")]
    public required PaginationDidlogicComHlrLookupsApi Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
