using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

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
