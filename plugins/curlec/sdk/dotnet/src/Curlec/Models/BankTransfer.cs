using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Models.Enums;

namespace Curlec.Models;

/// <summary>
/// A payment received into a Virtual Account via bank transfer (NEFT/RTGS/IMPS/UPI). Created automatically when a payer sends funds to the virtual account. Prefix: bt_
/// </summary>
public record BankTransfer
{
    /// <summary>
    /// Bank transfer ID. Prefix: bt_
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity")]
    public Entity3? Entity { get; init; }

    /// <summary>
    /// Razorpay payment ID generated for this bank transfer (pay_*).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_id")]
    public string? PaymentId { get; init; }

    /// <summary>
    /// Transfer mode used by the payer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode? Mode { get; init; }

    /// <summary>
    /// Amount received in paise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public int? Amount { get; init; }

    /// <summary>
    /// Payer's bank account details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payer_bank_account")]
    public PayerBankAccount? PayerBankAccount { get; init; }

    /// <summary>
    /// UTR (Unique Transaction Reference) number from the bank.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bank_reference")]
    public string? BankReference { get; init; }

    /// <summary>
    /// Virtual account that received this transfer (va_*).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtual_account_id")]
    public string? VirtualAccountId { get; init; }

    /// <summary>
    /// A virtual bank account or VPA that accepts NEFT/RTGS/IMPS/UPI payments (Smart Collect). Each payment creates a BankTransfer entity. Auto-closes after 90 days of inactivity. Prefix: va_
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtual_account")]
    public VirtualAccount? VirtualAccount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
