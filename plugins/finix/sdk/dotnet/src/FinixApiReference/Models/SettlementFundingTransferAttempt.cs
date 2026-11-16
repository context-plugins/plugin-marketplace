using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record SettlementFundingTransferAttempt
{
    /// <summary>
    /// The ID of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [MinLength(1)]
    public string? Id { get; init; }

    /// <summary>
    /// Timestamp of when the object was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Timestamp of when the object was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public long? Amount { get; init; }

    /// <summary>
    /// ID of the <c>Application</c> the resource was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    [MinLength(1)]
    public string? Application { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// The ID of the <c>Transfer</c> used to track the payout.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funding_transfer_id")]
    public string? FundingTransferId { get; init; }

    /// <summary>
    /// The ID of the <c>Payment Instrument</c> to use for the instant payout.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_id")]
    public string? InstrumentId { get; init; }

    /// <summary>
    /// The ID of the <c>Merchant</c> resource for the <c>Funding Transfer Attempt</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_id")]
    public string? MerchantId { get; init; }

    /// <summary>
    /// The error code when the <c>Funding Transfer Attempt</c> fails.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure_code")]
    public FailureCode3? FailureCode { get; init; }

    /// <summary>
    /// A human-readable message describing why the <c>Funding Transfer Attempt</c> failed. Corresponds to <c>failure_code</c>:
    /// <list type="bullet">
    ///   <item><description><c>BALANCE_ACCOUNT_NOT_FOUND</c>: Balance Account not found. Please contact support if you have questions.</description></item>
    ///   <item><description><c>BALANCE_VALIDATION_FAILED</c>: Balance Validation failed.</description></item>
    ///   <item><description><c>INSUFFICIENT_BALANCE</c>: Your account balance is insufficient for this operation. Please contact support if you have any questions.</description></item>
    ///   <item><description><c>INVALID_BALANCE_ACCOUNT</c>: Balance Account is invalid.</description></item>
    ///   <item><description><c>VELOCITY_LIMIT_EXCEEDED</c>: Dynamically generated based on the violated rule. Examples: <c>Daily volume limit exceeded for APPLICATION</c>, <c>Monthly count limit exceeded for RECIPIENT</c>, <c>Maximum amount exceeded for SENDER</c>.</description></item>
    ///   <item><description><c>VELOCITY_RULE_NOT_FOUND</c>: Velocity Rule not found. Please contact support if you have any questions.</description></item>
    ///   <item><description><c>VELOCITY_VALIDATION_FAILED</c>: Velocity Validation failed. Please contact support if you have any questions.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure_message")]
    public string? FailureMessage { get; init; }

    /// <summary>
    /// The status of the <c>Funding Transfer Attempt</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State12? State { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    /// <summary>
    /// The ID of the <c>Settlement</c> resource used for this <c>Funding Transfer Attempt</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_id")]
    public object? SettlementId { get; init; }

    /// <summary>
    /// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links9? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
