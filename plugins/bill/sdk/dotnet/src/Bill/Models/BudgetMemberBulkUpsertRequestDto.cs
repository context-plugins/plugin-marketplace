using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Update multiple budget members
/// </summary>
public record BudgetMemberBulkUpsertRequestDto
{
    /// <summary>
    /// List of budget member updates
    /// </summary>
    [JsonPropertyName("members")]
    [MinLength(1)]
    public required IReadOnlyList<BudgetMemberBulkUpsertDto> Members { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
