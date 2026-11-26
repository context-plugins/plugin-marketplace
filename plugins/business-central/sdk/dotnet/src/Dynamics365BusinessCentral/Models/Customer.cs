using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Models.Enums;

namespace Dynamics365BusinessCentral.Models;

public record Customer
{
    /// <summary>
    /// ETag for concurrency control
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("@odata.etag")]
    public string? OdataEtag { get; init; }

    /// <summary>
    /// The unique identifier of the customer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// The customer number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("number")]
    [MaxLength(20)]
    public string? Number { get; init; }

    /// <summary>
    /// The customer display name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    [MaxLength(100)]
    public string? DisplayName { get; init; }

    /// <summary>
    /// The customer type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeDynamics365BusinessCentralApiV20CustomersApi? Type { get; init; }

    /// <summary>
    /// First line of the address
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressLine1")]
    [MaxLength(100)]
    public string? AddressLine1 { get; init; }

    /// <summary>
    /// Second line of the address
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressLine2")]
    [MaxLength(50)]
    public string? AddressLine2 { get; init; }

    /// <summary>
    /// The city
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    [MaxLength(30)]
    public string? City { get; init; }

    /// <summary>
    /// The state or province code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    [MaxLength(20)]
    public string? State { get; init; }

    /// <summary>
    /// The country/region code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    [MaxLength(10)]
    public string? Country { get; init; }

    /// <summary>
    /// The postal code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postalCode")]
    [MaxLength(20)]
    public string? PostalCode { get; init; }

    /// <summary>
    /// The phone number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phoneNumber")]
    [MaxLength(30)]
    public string? PhoneNumber { get; init; }

    /// <summary>
    /// The email address
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [MaxLength(80)]
    public string? Email { get; init; }

    /// <summary>
    /// The website URL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website")]
    [MaxLength(80)]
    public string? Website { get; init; }

    /// <summary>
    /// The salesperson code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salespersonCode")]
    [MaxLength(20)]
    public string? SalespersonCode { get; init; }

    /// <summary>
    /// The balance due from the customer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("balanceDue")]
    public double? BalanceDue { get; init; }

    /// <summary>
    /// The credit limit
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditLimit")]
    public double? CreditLimit { get; init; }

    /// <summary>
    /// Whether the customer is tax liable
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxLiable")]
    public bool? TaxLiable { get; init; }

    /// <summary>
    /// The tax area ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxAreaId")]
    public Guid? TaxAreaId { get; init; }

    /// <summary>
    /// The tax area display name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxAreaDisplayName")]
    public string? TaxAreaDisplayName { get; init; }

    /// <summary>
    /// The tax registration number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxRegistrationNumber")]
    [MaxLength(20)]
    public string? TaxRegistrationNumber { get; init; }

    /// <summary>
    /// The currency ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currencyId")]
    public Guid? CurrencyId { get; init; }

    /// <summary>
    /// The currency code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currencyCode")]
    [MaxLength(10)]
    public string? CurrencyCode { get; init; }

    /// <summary>
    /// The payment terms ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentTermsId")]
    public Guid? PaymentTermsId { get; init; }

    /// <summary>
    /// The shipment method ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shipmentMethodId")]
    public Guid? ShipmentMethodId { get; init; }

    /// <summary>
    /// The payment method ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentMethodId")]
    public Guid? PaymentMethodId { get; init; }

    /// <summary>
    /// Whether the customer is blocked
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blocked")]
    public Blocked? Blocked { get; init; }

    /// <summary>
    /// The date and time when the customer was last modified
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedDateTime")]
    public DateTimeOffset? LastModifiedDateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
