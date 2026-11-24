using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Bill approve/deny action request
/// </summary>
public record BillApproveDenyActionRequestDto
{
    /// <summary>
    /// BILL-generated ID of the bill. The value begins with <c>00n</c>.
    /// </summary>
    [JsonPropertyName("billId")]
    public required string BillId { get; init; }

    [JsonPropertyName("action")]
    public required BillApproveDenyAction Action { get; init; }

    /// <summary>
    /// Reason of the decision
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comment")]
    public string? Comment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
