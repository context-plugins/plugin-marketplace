using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Models.Enums;

namespace Tabby.Models;

public record DisputeNoHistory
{
    /// <summary>
    /// ID of the dispute.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// Array of links to images which were uploaded by customer.
    /// </summary>
    [JsonPropertyName("attachments")]
    public required IReadOnlyList<string>? Attachments { get; init; }

    /// <summary>
    /// ID of the payment.
    /// </summary>
    [JsonPropertyName("payment_id")]
    public required Guid PaymentId { get; init; }

    /// <summary>
    /// Total disputed amount.
    /// </summary>
    [JsonPropertyName("amount")]
    public required string Amount { get; init; }

    /// <summary>
    /// The currency of the dispute. It's always equal to the currency of the payment.
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency1 Currency { get; init; }

    /// <summary>
    /// Date and time the Dispute was created, in UTC, and displayed in ISO 8601 datetime format.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// Date and time of the expiration of the Dispute, in UTC, and displayed in ISO 8601 datetime format.
    /// </summary>
    [JsonPropertyName("expired_at")]
    public required string ExpiredAt { get; init; }

    /// <summary>
    /// The current status of the dispute:
    ///   - <c>new</c> - dispute pending merchant approval for refund or initiate a challenge
    ///   - <c>declined</c> - dispute was declined by Tabby support
    ///   - <c>cancelled</c> - dispute was canceled by customer
    ///   - <c>refunded</c> - dispute was approved or the order was refunded via Payments API
    ///   - <c>in_progress</c> - merchant challenged dispute and need a response from Tabby support
    ///   - <c>evidence_merchant</c> - waiting for evidence from the merchant
    ///   - <c>evidence_customer</c> - waiting for evidence from the customer
    /// </summary>
    [JsonPropertyName("status")]
    public required DisputeStatus Status { get; init; }

    /// <summary>
    /// Cause of the dispute was created (selected by customer). There are only four reasons:
    ///   - <c>unreceived_refund</c> - a refund not received
    ///   - <c>identity_theft</c> - I did not place this order (also known as identity theft)
    ///   - <c>product_issue</c> - there was a problem with the product
    ///   - <c>not_delivered</c> - the order was not delivered
    /// </summary>
    [JsonPropertyName("reason")]
    public required DisputeReason Reason { get; init; }

    /// <summary>
    /// How many days left before dispute will be automatically approved.
    /// </summary>
    [JsonPropertyName("days_left")]
    public required int DaysLeft { get; init; }

    [JsonPropertyName("items")]
    public required IReadOnlyList<DisputeOrderItem> Items { get; init; }

    /// <summary>
    /// Merchant-assigned order number.
    /// </summary>
    [JsonPropertyName("order_number")]
    public required string OrderNumber { get; init; }

    /// <summary>
    /// The customer additional comments on the causes of the dispute.
    /// </summary>
    [JsonPropertyName("comment")]
    public required string Comment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
