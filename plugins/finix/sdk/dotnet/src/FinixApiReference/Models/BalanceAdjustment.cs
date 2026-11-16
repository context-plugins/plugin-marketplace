using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record BalanceAdjustment
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
    [JsonPropertyName("application_id")]
    [MinLength(1)]
    public string? ApplicationId { get; init; }

    /// <summary>
    /// A ledger record that tracks individual financial movements within a <c>Balance Adjustment</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("balance_entry_id")]
    public string? BalanceEntryId { get; init; }

    /// <summary>
    /// ISO 4217 3 letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency1? Currency { get; init; }

    /// <summary>
    /// A description of the <c>Balance Adjustment</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The code of the failure so the decline can be handled programmatically. For more info on how to handle the failure, see <see href="/guides/payouts/handling-payout-failures">Failure Codes</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure_code")]
    public string? FailureCode { get; init; }

    /// <summary>
    /// The code of the failure so the decline can be handled programmatically. For more info on how to handle the failure, see <see href="/guides/payouts/handling-payout-failures">Failure Codes</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure_message")]
    public string? FailureMessage { get; init; }

    /// <summary>
    /// Pass any randomly generated or internal ID to <see href="/api/section/idempotent-requests">idempotently</see> identify <c>Transfers</c>, <c>Authorizations</c>, or refund requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotency_id")]
    public string? IdempotencyId { get; init; }

    /// <summary>
    /// The account, card, or bank account that is credited or debited as part of the adjustment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_id")]
    public string? InstrumentId { get; init; }

    /// <summary>
    /// The payment processing entity responsible for handling transactions, fund movements, etc., between different financial accounts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processor")]
    public Processor? Processor { get; init; }

    /// <summary>
    /// The method of adjustment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rail")]
    public Rail? Rail { get; init; }

    /// <summary>
    /// The status of the <c>Balance Adjustment</c>, indicating whether the adjustment was successful or failed.
    /// <list type="bullet">
    ///   <item><description><c>SUBMITTED</c> - The balance adjustment has been initiated but is not yet confirmed.</description></item>
    ///   <item><description><c>SUCCEEDED</c> - The adjustment was successful, and the funds are available. This typically occurs 1-3 business days after <c>SUBMITTED</c>.</description></item>
    ///   <item><description><c>FAILED</c> - Finix was unable to process the adjustment, and the balance was not updated.</description></item>
    ///   <item><description><c>RETURN</c> - The adjustment was initially successful, but a subsequent return resulted in a reversal of the balance increase.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State3? State { get; init; }

    /// <summary>
    /// The ID of the top-up configuration that created the adjustment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("top_up_config_id")]
    public string? TopUpConfigId { get; init; }

    /// <summary>
    /// A unique identifier for tracking the <c>Balance Adjustment</c> across its lifecycle.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trace_id")]
    public string? TraceId { get; init; }

    /// <summary>
    /// Specifies whether the <c>Balance Adjustment</c> increases or decreases the account balance.
    /// <para>
    /// Acceptable values:
    /// - <c>TOP_UP</c> - Adds funds to the balance (e.g., a deposit or manual funding).
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type6? Type { get; init; }

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
    /// An object containing link(s) relevant to the request. You can store these links for follow-up requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links4? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
