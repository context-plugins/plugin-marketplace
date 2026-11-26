using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Scheduled payment DTO.
/// </summary>
public record ScheduledPaymentDto
{
    /// <summary>
    /// BILL-generated ID of the bill. The value begins with <c>00n</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billId")]
    public string? BillId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
