using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.AnyOf;

namespace DidLogic.Models;

/// <summary>
/// Paginated list of CDR records
/// </summary>
public record CdrListResponse
{
    /// <summary>
    /// Array of call detail records
    /// </summary>
    [JsonPropertyName("calls")]
    public required IReadOnlyList<Call> Calls { get; init; }

    /// <summary>
    /// Pagination metadata for list responses
    /// </summary>
    [JsonPropertyName("pagination")]
    public required PaginationModel Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
