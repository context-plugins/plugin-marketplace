using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Transactions response.
/// </summary>
public record TransactionResponseDto
{
    /// <summary>
    /// BILL-generated ID of the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// BILL-generated UUID of the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public string? Uuid { get; init; }

    /// <summary>
    /// BILL-generated IDs of child transactions associated with the current transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("childTransactionIds")]
    public IReadOnlyList<string>? ChildTransactionIds { get; init; }

    /// <summary>
    /// BILL-generated IDs of child transactions associated with the current transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("childTransactionUuids")]
    public IReadOnlyList<string>? ChildTransactionUuids { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the transaction is locked
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isLocked")]
    public bool? IsLocked { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the transaction is reconciled
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isReconciled")]
    public bool? IsReconciled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactionType")]
    public TransactionTypeBillV3TransactionsApi? TransactionType { get; init; }

    /// <summary>
    /// BILL-generated ID of the parent transaction. This field is set on child transactions when a parent transaction is split.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentTransactionId")]
    public string? ParentTransactionId { get; init; }

    /// <summary>
    /// BILL-generated ID of the user who created the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public string? UserId { get; init; }

    /// <summary>
    /// BILL-generated UUID of the user who created the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userUuid")]
    public string? UserUuid { get; init; }

    /// <summary>
    /// Display name of the user who created the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userName")]
    public string? UserName { get; init; }

    /// <summary>
    /// Raw merchant name for the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawMerchantName")]
    public string? RawMerchantName { get; init; }

    /// <summary>
    /// Readable (cleaned) merchant name for the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchantName")]
    public string? MerchantName { get; init; }

    /// <summary>
    /// BILL-generated ID of the budget linked with the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("budgetId")]
    public string? BudgetId { get; init; }

    /// <summary>
    /// BILL-generated UUID of the budget linked with the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("budgetUuid")]
    public string? BudgetUuid { get; init; }

    /// <summary>
    /// Name of the budget linked with the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("budgetName")]
    public string? BudgetName { get; init; }

    /// <summary>
    /// BILL-generated UUID of the parent budget linked with the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentBudgetUuid")]
    public string? ParentBudgetUuid { get; init; }

    /// <summary>
    /// BILL-generated ID of the originating authorization transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originalAuthTransactionId")]
    public string? OriginalAuthTransactionId { get; init; }

    /// <summary>
    /// BILL-generated UUID of the originating authorization transaction.
    /// <para>
    /// After a transaction is authorized, it is set as cleared when it is complete. The <c>originalAuthTransactionUuid</c> ties the cleared transaction to the authorized transaction. The value is <c>null</c> when the transaction is not authorized.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originalAuthTransactionUuid")]
    public string? OriginalAuthTransactionUuid { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the transaction is a credit
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isCredit")]
    public bool? IsCredit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currencyData")]
    public CurrencyData1? CurrencyData { get; init; }

    /// <summary>
    /// Set as <c>true</c> if a receipt is required to complete the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receiptRequired")]
    public bool? ReceiptRequired { get; init; }

    /// <summary>
    /// Set as <c>true</c> if a review is required to complete the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reviewRequired")]
    public bool? ReviewRequired { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public TransactionStatusTagType? Status { get; init; }

    /// <summary>
    /// Created date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("occurredTime")]
    public DateTimeOffset? OccurredTime { get; init; }

    /// <summary>
    /// Updated date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedTime")]
    public DateTimeOffset? UpdatedTime { get; init; }

    /// <summary>
    /// Transaction authorized date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorizedTime")]
    public DateTimeOffset? AuthorizedTime { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the transaction has all the required fields completed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("complete")]
    public bool? Complete { get; init; }

    /// <summary>
    /// Points awarded for the transaction. This value is <c>0</c> until the transaction is cleared.
    /// <para>
    /// <b>Note</b>: Only <c>ADMIN</c> users can view any awarded points.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pointsAwarded")]
    public long? PointsAwarded { get; init; }

    /// <summary>
    /// Transaction custom fields information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customFields")]
    public IReadOnlyList<CustomFieldDto>? CustomFields { get; init; }

    /// <summary>
    /// List of receipts attached to the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receipts")]
    public IReadOnlyList<ReceiptImage>? Receipts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("network")]
    public ProgramNetworkType? Network { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the transaction is the parent of another transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isParent")]
    public bool? IsParent { get; init; }

    /// <summary>
    /// Transaction review information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reviews")]
    public IReadOnlyList<Review>? Reviews { get; init; }

    /// <summary>
    /// Transaction amount including fees.
    /// <para>
    /// When <c>amount</c> is negative, the transaction is a reversal or refund.
    /// * <b>Reversal</b>: For a reversal (cancel before funds are settled), <c>transactionType</c> is set as <c>AUTHORIZATION</c> and <c>amount</c> is a negative value.
    /// * <b>Refund</b>: For a refund (cancel after funds are settled), <c>transactionType</c> is set as <c>CLEAR</c> and <c>amount</c> is a negative value.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    /// <summary>
    /// Transaction amount not including fees
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactedAmount")]
    public double? TransactedAmount { get; init; }

    /// <summary>
    /// Sum of transaction fees (including <c>foreignExchangeFee</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fees")]
    public double? Fees { get; init; }

    /// <summary>
    /// Foreign exchange fee for the transaction (if any)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("foreignExchangeFee")]
    public double? ForeignExchangeFee { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receiptStatus")]
    public ReceiptStatusTypeBillV3TransactionsApi? ReceiptStatus { get; init; }

    /// <summary>
    /// BILL-generated ID of the cleared transaction. Use this ID to identify the transaction after it is cleared.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matchedClearTransactionId")]
    public string? MatchedClearTransactionId { get; init; }

    /// <summary>
    /// BILL-generated UUID of the cleared transaction. Use this ID to identify the transaction after it is cleared.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matchedClearTransactionUuid")]
    public string? MatchedClearTransactionUuid { get; init; }

    /// <summary>
    /// Accounting system integration information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountingIntegrationTransactions")]
    public IReadOnlyList<AccountingIntegrationTransaction>? AccountingIntegrationTransactions { get; init; }

    /// <summary>
    /// Transaction reviewers information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reviewers")]
    public IReadOnlyList<Reviewer>? Reviewers { get; init; }

    /// <summary>
    /// BILL-generated ID of the card used to make the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cardId")]
    public string? CardId { get; init; }

    /// <summary>
    /// BILL-generated UUID of the card used to make the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cardUuid")]
    public string? CardUuid { get; init; }

    /// <summary>
    /// Last four digits of the card number used to make the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cardLastFour")]
    public string? CardLastFour { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cardType")]
    public CardType? CardType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receiptSyncStatus")]
    public ReceiptSyncStatusType? ReceiptSyncStatus { get; init; }

    /// <summary>
    /// Merchant category code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchantCategoryCode")]
    public string? MerchantCategoryCode { get; init; }

    /// <summary>
    /// Human-readable transaction decline reason. This field is available when <c>transactionType</c> is set as <c>DECLINE</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("declineReason")]
    public string? DeclineReason { get; init; }

    /// <summary>
    /// Transaction decline reason code. This field is available when <c>transactionType</c> is set as <c>DECLINE</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("declineInternalReasonCode")]
    public string? DeclineInternalReasonCode { get; init; }

    /// <summary>
    /// Set as <c>true</c> if a physical card was present for the transaction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cardPresent")]
    public bool? CardPresent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchantLocation")]
    public MerchantLocation? MerchantLocation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disputeStatus")]
    public DisputeStatusType? DisputeStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
