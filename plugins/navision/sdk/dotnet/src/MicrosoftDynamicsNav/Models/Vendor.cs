using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models.Enums;

namespace MicrosoftDynamicsNav.Models;

public record Vendor
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("@odata.etag")]
    public string? OdataEtag { get; init; }

    /// <summary>
    /// The unique identifier of the vendor
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// The vendor number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("number")]
    [MaxLength(20)]
    public string? Number { get; init; }

    /// <summary>
    /// The vendor display name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    [MaxLength(100)]
    public string? DisplayName { get; init; }

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
    /// The payment method ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentMethodId")]
    public Guid? PaymentMethodId { get; init; }

    /// <summary>
    /// Whether the vendor is tax liable
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxLiable")]
    public bool? TaxLiable { get; init; }

    /// <summary>
    /// Whether the vendor is blocked
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blocked")]
    public Blocked2? Blocked { get; init; }

    /// <summary>
    /// The vendor balance
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("balance")]
    public double? Balance { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedDateTime")]
    public DateTimeOffset? LastModifiedDateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
