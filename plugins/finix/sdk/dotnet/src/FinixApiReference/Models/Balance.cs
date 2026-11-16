using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Represents funds in different stages of finality.
/// <para>
/// A <c>Balance</c> separates settled funds, usable funds, and in-flight
/// transactions to ensure safe payouts and accurate accounting.
/// </para>
/// <para>
/// - <c>posted_amount</c> reflects only finalized transactions.
/// - <c>available_amount</c> indicates what can be safely used or withdrawn
///   at the current moment.
/// - <c>pending_amount</c> shows the projected balance after all pending
///   transactions complete.
/// </para>
/// </summary>
public record Balance
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
    /// The amount of funds that are currently safe to use or withdraw.
    /// <para>
    /// This balance reflects settled funds minus any initiated outflows
    /// (such as payouts) that reduce availability immediately, even if
    /// they have not yet fully posted.
    /// </para>
    /// <para>
    /// Funds from incoming transactions (such as top-ups) are not included
    /// until they are finalized.
    /// </para>
    /// <para>
    /// *Example*:
    /// </para>
    /// <para>
    /// &gt; If the posted balance is $1,000, a $500 payout is initiated, and a
    ///   $600 top-up is pending, the <c>available_amount</c> is $500.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available_amount")]
    public int? AvailableAmount { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// The ID of the resource (e.g., an <see href="#Application"><c>Application</c></see>) that the <c>Balance</c> is linked to.
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
    /// The projected balance after all in-flight transactions are finalized.
    /// <para>
    /// This amount includes the posted balance adjusted by pending incoming
    /// and outgoing transactions, regardless of whether those funds are
    /// currently available for use.
    /// </para>
    /// <para>
    /// *Example*:
    /// </para>
    /// <para>
    /// &gt; If the posted balance is $1,000, a $500 payout is pending, and a
    ///   $600 top-up is pending, the <c>pending_amount</c> is $1,100.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pending_amount")]
    public int? PendingAmount { get; init; }

    /// <summary>
    /// The total balance derived only from finalized, settled transactions.
    /// <para>
    /// This amount represents the authoritative ledger balance and does not
    /// include any pending incoming or outgoing transactions.
    /// </para>
    /// <para>
    /// *Example*:
    /// </para>
    /// <para>
    /// &gt; If $1,000 has fully settled and no transactions have posted since,
    ///   the <c>posted_amount</c> is $1,000, even if payouts or top-ups are
    ///   currently in progress.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("posted_amount")]
    public int? PostedAmount { get; init; }

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
    /// The type of transactions stored/ledgered on the <c>Balance</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type4? Type { get; init; }

    /// <summary>
    /// An object containing link(s) relevant to the request. You can store these links for follow-up requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links2? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
