using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record BalanceEntry
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
    /// The ID of the application user that created this <c>Balance Adjustment</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_by")]
    public string? CreatedBy { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// A description of the <c>Balance Entry</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The ID of the resource that caused the change to the <c>Balance</c>, either a <c>Balance Adjustment</c> (i.e., "top-up") or a <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity_id")]
    public string? EntityId { get; init; }

    /// <summary>
    /// The resource type that caused the change to the <c>Balance</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity_type")]
    public EntityType? EntityType { get; init; }

    /// <summary>
    /// Timestamp estimating when the <c>Balance Entry</c> will be posted (i.e., the <c>state</c> is set to <c>SUCCEEDED</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimated_posted_date")]
    public DateTimeOffset? EstimatedPostedDate { get; init; }

    /// <summary>
    /// The ID of the resource (e.g., an <see href="#Application"><c>Application</c></see>) that the <c>Balance Entry</c> is linked to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_to")]
    public string? LinkedTo { get; init; }

    /// <summary>
    /// Specifies the type of resource identified in <c>linked_to</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_type")]
    public LinkedType? LinkedType { get; init; }

    /// <summary>
    /// The <c>parent_balance_entry_id</c> refers to the ID of the original <c>Balance Entry</c>. This is only applicable for transactions that have been reversed after being posted (i.e., the <c>state</c> is set to <c>RETURNED</c>). For instance, if a transaction with the ID <c>balance_entry_xyz</c> is reversed, the newly created reversal entry will have a <c>parent_balance_entry_id</c> that matches the ID of the original transaction, <c>balance_entry_xyz</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_balance_entry_id")]
    public string? ParentBalanceEntryId { get; init; }

    /// <summary>
    /// Timestamp of when the <c>Balance Entry</c> was posted and finalized on the <c>Balance</c> (i.e., state changed to <c>SUCCEEDED</c>). This field is <c>null</c> if the entry has not been posted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("posted_at")]
    public DateTimeOffset? PostedAt { get; init; }

    /// <summary>
    /// The current state of the <c>Balance Entry</c>.
    /// - <c>SUCCEEDED</c>: The balance entry has been successfully posted and affects the account balance.
    /// - <c>PENDING</c>: The balance entry is awaiting confirmation and has not yet affected the account balance.
    /// - <c>FAILED</c>: The balance entry failed and did not affect the account balance.
    /// - <c>RETURNED</c>: The balance entry was returned (e.g., due to an ACH return) and has been reversed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State2? State { get; init; }

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
    /// The date of the transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transaction_date")]
    public DateTimeOffset? TransactionDate { get; init; }

    /// <summary>
    /// The transaction type that caused a change to the <c>Balance</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type5? Type { get; init; }

    /// <summary>
    /// Wire transfer details, if applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wire_details")]
    public WireDetails? WireDetails { get; init; }

    /// <summary>
    /// An object containing link(s) relevant to the request. You can store these links for follow-up requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links3? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
