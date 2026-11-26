using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Mass payment response DTO.
/// </summary>
public record MassPaymentResponseDto
{
    /// <summary>
    /// BILL-generated ID of the mass payment batch. The value begins with <c>bbq</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentBatchId")]
    public string? PaymentBatchId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
