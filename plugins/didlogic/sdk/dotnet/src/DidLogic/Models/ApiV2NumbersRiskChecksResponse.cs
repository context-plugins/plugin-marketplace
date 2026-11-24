using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersRiskChecksResponse
{
    /// <summary>
    /// List of risk check tasks
    /// </summary>
    [JsonPropertyName("tasks")]
    public required IReadOnlyList<TaskModel> Tasks { get; init; }

    /// <summary>
    /// Pagination metadata
    /// </summary>
    [JsonPropertyName("pagination")]
    public required PaginationDidlogicComHlrLookupsApi Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
