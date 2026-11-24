using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

/// <summary>
/// One page of a Composer recipe's results.
/// </summary>
public record ComposerRecipeResultList
{
    /// <summary>
    /// Results on this page.
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<ComposerRecipeResult> Items { get; init; }

    /// <summary>
    /// Token for the next page. Absent on the last page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Total number of results across all pages.
    /// </summary>
    [JsonPropertyName("rowCount")]
    [Minimum(0)]
    public required long RowCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
