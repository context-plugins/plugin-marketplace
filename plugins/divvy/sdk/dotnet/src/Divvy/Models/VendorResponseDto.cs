using System;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Vendors response.
/// </summary>
public record VendorResponseDto
{
    /// <summary>
    /// BILL-generated ID of the vendor. The value begins with <c>009</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the vendor is archived
    /// </summary>
    [JsonPropertyName("archived")]
    public required bool Archived { get; init; }

    /// <summary>
    /// Vendor name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Vendor short name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shortName")]
    public string? ShortName { get; init; }

    /// <summary>
    /// User account number set by the vendor.
    /// <para>
    /// When you pay the vendor, this value appears on the check memo or electronic payment record.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountNumber")]
    public string? AccountNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountType")]
    public AccountTypeResponse? AccountType { get; init; }

    /// <summary>
    /// Vendor email address
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// Vendor phone number. This field is overridden when you connect with a vendor in the BILL network.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public string? Phone { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public Address2? Address { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentInformation")]
    public PaymentInformation1? PaymentInformation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalInfo")]
    public AdditionalInfo1? AdditionalInfo { get; init; }

    /// <summary>
    /// BILL-generated ID of the verified national vendor (if the vendor is a verified national vendor)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rppsId")]
    public string? RppsId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bankAccountStatus")]
    public VendorBankAccountStatusResponse? BankAccountStatus { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the vendor has recurring payments enabled
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurringPayments")]
    public bool? RecurringPayments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billCurrency")]
    public CurrencyCode? BillCurrency { get; init; }

    /// <summary>
    /// Created date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdTime")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// Updated date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedTime")]
    public DateTimeOffset? UpdatedTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("balance")]
    public Balance2? Balance { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoPay")]
    public AutoPayBillV3VendorsApi? AutoPay { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("networkStatus")]
    public NetworkInvitationStatus? NetworkStatus { get; init; }

    /// <summary>
    /// Vendor Payment Network ID (PNI). Each vendor with a BILL account is assigned a unique PNI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentNetworkId")]
    public string? PaymentNetworkId { get; init; }

    /// <summary>
    /// Relevance score from the fuzzy name search that matched this vendor. This field appears in the response only for vendors matched by an <c>fz</c> filter on <c>name</c>.
    /// <para>
    /// Scores are comparable only among the results of a single search. Do not compare them across searches or against a fixed threshold.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("relevanceScore")]
    public double? RelevanceScore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
