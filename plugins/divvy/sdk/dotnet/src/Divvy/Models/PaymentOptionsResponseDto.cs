using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Payments options response dto.
/// </summary>
public record PaymentOptionsResponseDto
{
    /// <summary>
    /// BILL-generated ID of the vendor to be paid. The value begins with <c>009</c>.
    /// </summary>
    [JsonPropertyName("vendorId")]
    public required string VendorId { get; init; }

    /// <summary>
    /// Vendor payment amount
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fundingOptions")]
    public FundingOptions2? FundingOptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
