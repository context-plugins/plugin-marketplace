using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// VendorCredit usage Dto.
/// </summary>
public record VendorCreditUsageDto
{
    /// <summary>
    /// BILL-generated ID of the bill to which the vendor credit is applied
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billId")]
    public string? BillId { get; init; }

    /// <summary>
    /// BILL-generated ID of the payment to which the vendor credit is applied
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentId")]
    public string? PaymentId { get; init; }

    /// <summary>
    /// Vendor credit amount applied
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
