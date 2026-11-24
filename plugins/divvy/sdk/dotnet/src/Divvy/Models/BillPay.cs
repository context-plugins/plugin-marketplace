using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Core.Validation.Attributes;

namespace Divvy.Models;

/// <summary>
/// Bill pays details in Payments API.
/// </summary>
public record BillPay
{
    /// <summary>
    /// BILL-generated ID of the bill to be paid. The value begins with <c>00n</c>.
    /// </summary>
    [JsonPropertyName("billId")]
    [MinLength(1)]
    public required string BillId { get; init; }

    /// <summary>
    /// Payment amount
    /// </summary>
    [JsonPropertyName("amount")]
    [Minimum(0.0)]
    public required double Amount { get; init; }

    /// <summary>
    /// Vendor credits applied to the bill payment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendorCredits")]
    public IReadOnlyList<PaymentVendorCreditRequestDto>? VendorCredits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
