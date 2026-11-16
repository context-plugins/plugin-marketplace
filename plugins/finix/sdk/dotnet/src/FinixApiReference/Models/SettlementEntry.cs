using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// An entry is an object that describes an item inside of a <c>Settlement</c>.
/// <para>
/// The following entity types can be represented by a <c>Settlement Entry</c>: Transfers, custom Fees, and Split Transfers.
/// </para>
/// </summary>
public record SettlementEntry
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
    /// The amount of the <c>Settlement Entry</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// The ID of the related entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity_id")]
    public string? EntityId { get; init; }

    /// <summary>
    /// An object containing additional details about the entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity_details")]
    public EntityDetails1? EntityDetails { get; init; }

    /// <summary>
    /// The type of the related entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity_type")]
    public EntityType2? EntityType { get; init; }

    /// <summary>
    /// The ID of the original parent resource where the transaction occurred. This is only populated when <c>sub_type</c> is <c>FEE</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_entity_id")]
    public string? ParentEntityId { get; init; }

    /// <summary>
    /// The type of the original parent resource where the transaction occurred. This is only populated when <c>sub_type</c> is <c>FEE</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_entity_type")]
    public ParentEntityType? ParentEntityType { get; init; }

    /// <summary>
    /// The subtype of the <c>Settlement Entry</c>.
    /// - <c>DISPUTE_MERCHANT_DEBIT</c>: A <c>Settlement Entry</c> for a <see href="/api/split-transfers">Split Transfer</see> created when a <see href="/api/disputes">Dispute</see> pulls funds from a merchant proportionally. Only applies when <c>entity_type</c> is <c>SPLIT_TRANSFER</c>.
    /// - <c>DISPUTE_MERCHANT_CREDIT</c>: A <c>Settlement Entry</c> for a <c>Split Transfer</c> created when a <c>Dispute</c> is ruled in favor of the <see href="/api/merchants">Merchant</see> and funds are returned proportionally. Only applies when <c>entity_type</c> is <c>SPLIT_TRANSFER</c>.
    /// - <c>REFUND_MERCHANT_DEBIT_ADJUSTMENT</c>: A <c>Settlement Entry</c> created to debit the refund amount from the merchant's settlement when a <see href="/guides/after-the-payment/refunds/pending-refunds">held refund</see> can't be covered. <c>parent_entity_id</c> contains the ID of the held refund.
    /// - <c>REFUND_MERCHANT_CREDIT_ADJUSTMENT</c>: A <c>Settlement Entry</c> created to credit the refund amount back when a <see href="/guides/after-the-payment/refunds/pending-refunds">held refund</see> is submitted or expires. <c>parent_entity_id</c> contains the ID of the held refund.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subtype")]
    public Subtype1? Subtype { get; init; }

    /// <summary>
    /// The timestamp of when the <c>Settlement Entry</c> is ready to be settled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ready_to_settle_at")]
    public DateTimeOffset? ReadyToSettleAt { get; init; }

    /// <summary>
    /// Indicates whether funds should be moved for this <c>Settlement Entry</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("should_fund")]
    public bool? ShouldFund { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
