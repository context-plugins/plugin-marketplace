using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Bank account details for a Vendor.
/// </summary>
public record VendorBankAccountResponseDto
{
    /// <summary>
    /// Vendor bank account name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nameOnAccount")]
    public string? NameOnAccount { get; init; }

    /// <summary>
    /// Vendor bank account number. This field is required for enabling electronic payments to vendors.
    /// <para>
    /// See <see href="https://developer.bill.com/docs/creating-an-international-vendor">Create an international vendor</see> for more information on how to set up vendor payment information for an international (not US) vendor.
    /// </para>
    /// </summary>
    [JsonPropertyName("accountNumber")]
    [MinLength(1)]
    public required string AccountNumber { get; init; }

    /// <summary>
    /// Vendor bank routing number. This field is required for enabling electronic payments to vendors. This field is empty for an IBAN <c>accountNumber</c>.
    /// <para>
    /// See <see href="https://developer.bill.com/docs/creating-an-international-vendor">Create an international vendor</see> for more information on how to set up vendor payment information for an international (not US) vendor.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routingNumber")]
    public string? RoutingNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public BankAccountType? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownerType")]
    public BankAccountOwnerType? OwnerType { get; init; }

    /// <summary>
    /// International bank account regulatory information. The <c>name</c> and <c>value</c> fields are required for each required bank account regulatory field.
    /// <para>
    /// See <see href="https://developer.bill.com/docs/creating-an-international-vendor">Create an international vendor</see> for more information on how to set <c>regulatoryFields</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("regulatoryFields")]
    public IReadOnlyList<NameValue>? RegulatoryFields { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentCurrency")]
    public CurrencyCode? PaymentCurrency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bankInfo")]
    public BankInfo1? BankInfo { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public BankAccountStatus? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
