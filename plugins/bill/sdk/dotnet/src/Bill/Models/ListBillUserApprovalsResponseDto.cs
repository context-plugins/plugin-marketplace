using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// List Bill User Approvals Response Dto.
/// </summary>
public record ListBillUserApprovalsResponseDto
{
    /// <summary>
    /// List of bills pending approval
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bills")]
    public IReadOnlyList<BillUserApprovalsResponseDto>? Bills { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
