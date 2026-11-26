using System;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Exchange Rate Response DTO.
/// </summary>
public record ExchangeRateResponseDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billCurrency")]
    public CurrencyCode? BillCurrency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentCurrency")]
    public CurrencyCode? PaymentCurrency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("baseCurrency")]
    public CurrencyCode? BaseCurrency { get; init; }

    /// <summary>
    /// Exchange rate. This rate compares the organization's base currency and the vendor <c>paymentCurrency</c> value.
    /// <para>
    /// For example, if the organization's base currency is USD and the vendor <c>paymentCurrency</c> is CAD, an <c>exchangeRate</c> of <c>1.372</c> tells us that <c>1 USD = 1.372 CAD</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchangeRate")]
    public double? ExchangeRate { get; init; }

    /// <summary>
    /// Exchange rate batch ID. BILL maintains all <c>exchangeRate</c> values in a batch. When a batch expires, a new batch ID is generated and all <c>exchangeRate</c> values are updated in the new batch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchangeRateBatchId")]
    public int? ExchangeRateBatchId { get; init; }

    /// <summary>
    /// BILL-generated ID of the international vendor
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendorId")]
    public string? VendorId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amountRange")]
    public AmountRange? AmountRange { get; init; }

    /// <summary>
    /// Exchange rate batch expiration date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expirationTime")]
    public DateTimeOffset? ExpirationTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
