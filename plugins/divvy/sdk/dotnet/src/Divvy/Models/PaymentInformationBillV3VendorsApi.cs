using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

public record PaymentInformationBillV3VendorsApi
{
    /// <summary>
    /// Vendor name for check and electronic payments
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payeeName")]
    public string? PayeeName { get; init; }

    /// <summary>
    /// Vendor email address for receiving payment information. BILL uses the vendor <c>email</c> value when this payment <c>email</c> value is not set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentPurpose")]
    public PaymentPurpose1BillV3VendorsApi? PaymentPurpose { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
