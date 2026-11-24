using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

/// <summary>
/// Paginated list of available DID numbers
/// </summary>
public record Dids
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
    public required IReadOnlyList<Dids1> DidsValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
