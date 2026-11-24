using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Response from a list API request with paging references.
/// </summary>
public record PaginationResponseDtoBudgetResponseDto
{
    /// <summary>
    /// Next page token
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPage")]
    public string? NextPage { get; init; }

    /// <summary>
    /// Previous page token
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prevPage")]
    public string? PrevPage { get; init; }

    /// <summary>
    /// Results
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<BudgetResponseDto>? Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
