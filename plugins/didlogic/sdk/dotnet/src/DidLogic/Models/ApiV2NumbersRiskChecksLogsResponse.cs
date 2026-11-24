using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersRiskChecksLogsResponse
{
    /// <summary>
    /// List of risk check logs
    /// </summary>
    [JsonPropertyName("logs")]
    public required IReadOnlyList<LogDidlogicComRiskChecksApi> Logs { get; init; }

    /// <summary>
    /// Pagination metadata
    /// </summary>
    [JsonPropertyName("pagination")]
    public required PaginationDidlogicComHlrLookupsApi Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
