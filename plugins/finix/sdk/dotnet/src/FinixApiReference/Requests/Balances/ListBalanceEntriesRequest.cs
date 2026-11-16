using System;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Requests.Balances;

/// <summary>
/// The inputs of the ListBalanceEntries operation.
/// </summary>
public sealed record ListBalanceEntriesRequest
{
    /// <summary>
    /// The ID of the <c>Balance</c>.
    /// </summary>
    public required string BalanceId { get; init; }

    /// <summary>
    /// Return every resource created after the cursor value.
    /// </summary>
    public string? AfterCursor { get; init; }

    /// <summary>
    /// Filter by an amount equal to the given value.
    /// </summary>
    public int? Amount { get; init; }

    /// <summary>
    /// Filter by an amount greater than.
    /// </summary>
    public int? AmountGt { get; init; }

    /// <summary>
    /// Filter by an amount greater than or equal.
    /// </summary>
    public int? AmountGte { get; init; }

    /// <summary>
    /// Filter by an amount less than.
    /// </summary>
    public int? AmountLt { get; init; }

    /// <summary>
    /// Filter by an amount less than or equal.
    /// </summary>
    public int? AmountLte { get; init; }

    /// <summary>
    /// Return every resource created before the cursor value.
    /// </summary>
    public string? BeforeCursor { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is after the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtGte { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is before the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtLte { get; init; }

    /// <summary>
    /// Return the <c>Balance Entry</c> triggered by the given <see href="/api/transfers">Transfer</see> or <see href="/api/balance-adjustments">Balance Adjustment</see> ID.
    /// </summary>
    public string? EntityId { get; init; }

    /// <summary>
    /// Filter <c>Balance Entries</c> by whether they were triggered by a <c>TRANSFER</c> or a <c>BALANCE_ADJUSTMENT</c>.
    /// </summary>
    public EntityType8? EntityType { get; init; }

    /// <summary>
    /// Retrieve a <c>Balance Entry</c> by its <c>id</c>.
    /// </summary>
    public string? Id { get; init; }

    /// <summary>
    /// The numbers of items to return.
    /// </summary>
    [Maximum(100)]
    public int? Limit { get; init; }

    /// <summary>
    /// Return the reversal <c>Balance Entry</c> for the given original <c>Balance Entry</c> ID. When a posted entry is reversed, a new entry with <c>state</c> set to <c>RETURNED</c> is created with its <c>parent_balance_entry_id</c> set to the original entry's ID.
    /// </summary>
    public string? ParentBalanceEntryId { get; init; }

    /// <summary>
    /// Filter <c>Balance Entries</c> posted and finalized on the <c>Balance</c> on or after the given date.
    /// </summary>
    public DateTimeOffset? PostedAtGte { get; init; }

    /// <summary>
    /// Filter <c>Balance Entries</c> posted and finalized on the <c>Balance</c> on or before the given date.
    /// </summary>
    public DateTimeOffset? PostedAtLte { get; init; }

    /// <summary>
    /// Filter by the current <c>state</c> of the <c>Balance Entry</c>:
    /// - <c>SUCCEEDED</c>: The <c>Balance Entry</c> has been successfully posted and affects the account balance.
    /// - <c>PENDING</c>: The <c>Balance Entry</c> is awaiting confirmation and has not yet affected the account balance.
    /// - <c>FAILED</c>: The <c>Balance Entry</c> failed and did not affect the account balance.
    /// - <c>RETURNED</c>: The <c>Balance Entry</c> was returned (e.g., due to an ACH return) and has been reversed.
    /// </summary>
    public State22? State { get; init; }

    /// <summary>
    /// Filter by the tag's key. For more information, see <see href="/api/section/tags">Tags</see>.
    /// </summary>
    public string? TagsKey { get; init; }

    /// <summary>
    /// Filter by the tag's value. For more information, see <see href="/api/section/tags">Tags</see>.
    /// </summary>
    public string? TagsValue { get; init; }

    /// <summary>
    /// Filter by the transaction type that caused a change to the <c>Balance</c>.
    /// </summary>
    public Type50? Type { get; init; }

    /// <summary>
    /// Filter where <c>updated_at</c> is after the given date.
    /// </summary>
    public DateTimeOffset? UpdatedAtGte { get; init; }

    /// <summary>
    /// Filter where <c>updated_at</c> is before the given date.
    /// </summary>
    public DateTimeOffset? UpdatedAtLte { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
