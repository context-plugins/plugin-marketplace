using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Paginated response containing test executions
/// </summary>
public record TestExecutionListResponse
{
    /// <summary>
    /// Total number of test executions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalCount")]
    public int? TotalCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executions")]
    public IReadOnlyList<TestExecution>? Executions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
