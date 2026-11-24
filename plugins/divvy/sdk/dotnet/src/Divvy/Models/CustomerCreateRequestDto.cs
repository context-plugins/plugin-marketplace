using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Create a customer
/// </summary>
public record CustomerCreateRequestDto
{
    /// <summary>
    /// Customer name
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// Customer company name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyName")]
    [MaxLength(250)]
    public string? CompanyName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact")]
    public Contact? Contact { get; init; }

    /// <summary>
    /// Customer email address
    /// </summary>
    [JsonPropertyName("email")]
    [MinLength(1)]
    public required string Email { get; init; }

    /// <summary>
    /// Customer phone number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    [RegularExpression("^.{0,20}$")]
    public string? Phone { get; init; }

    /// <summary>
    /// Customer fax number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fax")]
    [RegularExpression("^.{0,20}$")]
    public string? Fax { get; init; }

    /// <summary>
    /// Customer description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(4000)]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceCurrency")]
    public CurrencyCode? InvoiceCurrency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountType")]
    public CustomerAccountTypeRequest? AccountType { get; init; }

    /// <summary>
    /// BILL-generated ID of the payment term. Use payment terms to set the number of days the customer has to clear an invoice.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentTermId")]
    public string? PaymentTermId { get; init; }

    /// <summary>
    /// Customer account number. The number appears in customer invoices.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountNumber")]
    [MaxLength(100)]
    public string? AccountNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingAddress")]
    public BillingAddress2? BillingAddress { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shippingAddress")]
    public ShippingAddress2? ShippingAddress { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
