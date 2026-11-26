using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Approve or deny a reimbursement
/// </summary>
public record ReimbursementActionRequestDto
{
    [JsonPropertyName("action")]
    public required ReimbursementActionType Action { get; init; }

    /// <summary>
    /// Reimbursement action note
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public string? Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
