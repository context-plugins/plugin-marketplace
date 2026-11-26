using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

public record AdditionalInfoBillV3VendorsApi
{
    /// <summary>
    /// Vendor tax ID. This value is required by the IRS for tax purposes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxId")]
    public string? TaxId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxIdType")]
    public TaxIdTypeRequest? TaxIdType { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the vendor is eligible to receive an IRS form 1099 from the payer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("track1099")]
    public bool? Track1099 { get; init; }

    /// <summary>
    /// Vendor payment lead time in days
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("leadTimeInDays")]
    public int? LeadTimeInDays { get; init; }

    /// <summary>
    /// Set as <c>true</c> to combine a bulk payment made to the vendor with <c>POST /v3/payments/bulk</c>. The default value is <c>true</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("combinePayments")]
    public bool? CombinePayments { get; init; }

    /// <summary>
    /// BILL-generated ID of the payment term. Use payment terms to set the number of days that customers have to pay a vendor bill.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentTermId")]
    public string? PaymentTermId { get; init; }

    /// <summary>
    /// Vendor business name. This value is required by the IRS for tax purposes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyName")]
    public string? CompanyName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
