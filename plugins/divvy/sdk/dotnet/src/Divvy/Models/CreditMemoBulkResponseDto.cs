using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Response Dto for bulk credit memo.
/// </summary>
public record CreditMemoBulkResponseDto
{
    /// <summary>
    /// List of credit memos
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditMemos")]
    public IReadOnlyList<CreditMemoResponseDto>? CreditMemos { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
