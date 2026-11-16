using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Details needed to process card present transactions.
/// </summary>
public record CardPresentDetails1
{
    /// <summary>
    /// Unique ID used to identify the approval of the <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approval_code")]
    public string? ApprovalCode { get; init; }

    /// <summary>
    /// The brand of the card saved in the <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("brand")]
    public string? Brand { get; init; }

    /// <summary>
    /// Encrypted card data used to process the transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emv_data")]
    public EmvData1? EmvData { get; init; }

    /// <summary>
    /// Details of the card payment method used to process the transaction.
    /// <para>
    /// The possible enums are:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>UNKNOWN - The method by which the payment card was used is unknown.</description></item>
    ///   <item><description>SWIPED - The card was swiped through a POS terminal.</description></item>
    ///   <item><description>CONTACTLESS - The payment was made by tapping a card on a POS terminal.</description></item>
    ///   <item><description>CHIP_ENTRY - The payment card was inserted into a card reader.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entry_mode")]
    public EntryMode? EntryMode { get; init; }

    /// <summary>
    /// Last four digits of the bank account number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("masked_account_number")]
    public string? MaskedAccountNumber { get; init; }

    /// <summary>
    /// The name of the bank account or card owner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The ID of the file containing the digital signature captured during the transaction. If a signature was not collected, this field returns <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("digital_signature_file_id")]
    public string? DigitalSignatureFileId { get; init; }

    /// <summary>
    /// The type of <c>Payment Instrument</c> used in the transaction (or the original payment).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_type")]
    public string? PaymentType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
