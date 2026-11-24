using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

/// <summary>
/// Paginated search results
/// </summary>
public record Dids2
{
    /// <summary>
    /// Pagination metadata
    /// </summary>
    [JsonPropertyName("pagination")]
    public required PaginationDidlogicComNumbersInventoryApi Pagination { get; init; }

    /// <summary>
    /// Array of available DID numbers
    /// </summary>
    [JsonPropertyName("dids")]
    public required IReadOnlyList<Dids3> Dids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
