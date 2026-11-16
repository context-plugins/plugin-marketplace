using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Schema for a <c>Transfer Attempt</c> originating from a <c>Payment Link</c>.
/// </summary>
public record TransferAttemptPaymentLink
{
    /// <summary>
    /// The ID of the <c>Transfer Attempt</c> resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
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
    /// Additional charges will be incurred by the buyer.
    /// <para>
    /// The following rules apply:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>The <c>Merchant</c> must be enabled to charge these surcharges by setting the appropriate flags for each applicable surcharge to <c>true</c> using the PUT <c>/merchants</c> endpoint.</description></item>
    ///   <item><description>Only _one_ of the following charges can be applied during creation.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_buyer_charges")]
    public AdditionalBuyerCharges? AdditionalBuyerCharges { get; init; }

    /// <summary>
    /// Details the <c>amount</c> that was requested to get debited from the <c>source</c> when the transaction was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount_requested")]
    public int? AmountRequested { get; init; }

    /// <summary>
    /// The <c>Application</c> associated with the <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application_id")]
    public string? ApplicationId { get; init; }

    /// <summary>
    /// The <c>Authorization</c> associated with the <c>Transfer Attempt</c>, if applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorization_id")]
    public string? AuthorizationId { get; init; }

    /// <summary>
    /// Object containing details about the buyer. This object is only used for <c>SINGLE_USE</c> payment links.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buyer_details")]
    public BuyerDetails1? BuyerDetails { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// The <c>Payment Link</c> that initiated the <c>Transfer Attempt</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity_id")]
    public string? EntityId { get; init; }

    /// <summary>
    /// The type of entity that initiated the <c>Transfer Attempt</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity_type")]
    public EntityType5? EntityType { get; init; }

    /// <summary>
    /// The code of the failure so the decline can be handled programmatically. For more info on how to handle the failure, see <see href="/additional-resources/developers/implementation-and-testing/failure-codes">Failure Codes</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure_code")]
    public string? FailureCode { get; init; }

    /// <summary>
    /// A human-readable description of why the transaction was declined. This will also include a suggestion on how to complete the payment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure_message")]
    public string? FailureMessage { get; init; }

    /// <summary>
    /// Whether the <c>Transfer Attempt</c> was created from an <c>Authorization</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_authorization")]
    public bool? IsAuthorization { get; init; }

    /// <summary>
    /// The ID of the <c>Merchant</c> resource associated with the <c>Payment Link</c> that initiated the <c>Transfer Attempt</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_id")]
    public string? MerchantId { get; init; }

    /// <summary>
    /// The URL of the hosted microdeposit verification page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("microdeposit_verification_url")]
    public string? MicrodepositVerificationUrl { get; init; }

    /// <summary>
    /// Details the operation that's performed in the transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operation_key")]
    public OperationKey? OperationKey { get; init; }

    /// <summary>
    /// Whether the <c>Payment Link</c> associated with the <c>Transfer Attempt</c> is single-use or recurring.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_frequency")]
    public PaymentFrequency? PaymentFrequency { get; init; } = PaymentFrequency.OneTime;

    /// <summary>
    /// The <c>Payment Instrument</c> to be debited upon success of the <c>Transfer Attempt</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_instrument_id")]
    public string? PaymentInstrumentId { get; init; }

    /// <summary>
    /// The reason the <c>Transfer Attempt</c> is in a <c>PENDING</c> state. Returns <c>null</c> when not applicable.
    /// <list type="bullet">
    ///   <item><description><c>MICRODEPOSIT_VERIFICATION_REQUIRED</c>: The Bank account is pending microdeposit verification.</description></item>
    ///   <item><description><c>TRANSFER_PENDING</c>: The underlying transfer is currently in a state of Pending.</description></item>
    ///   <item><description><c>RECIPIENT_VERIFICATION_REQUIRED</c>: The recipient for the transfer is being verified.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pending_code")]
    public TransferAttemptPendingCode? PendingCode { get; init; }

    /// <summary>
    /// A human-readable description of why the <c>Transfer Attempt</c> is in a <c>PENDING</c> state. Returns <c>null</c> when not applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pending_message")]
    public string? PendingMessage { get; init; }

    /// <summary>
    /// A list of requested delivery methods. Each method specifies
    /// the type of delivery and the destination(s) where the receipt should be sent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receipt_requested_delivery_methods")]
    public IReadOnlyList<ReceiptRequestedDeliveryMethod>? ReceiptRequestedDeliveryMethods { get; init; }

    /// <summary>
    /// The state of the <c>Transfer Attempt</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State14? State { get; init; }

    /// <summary>
    /// The description of the <c>Merchant</c> that appears on the buyer's bank or card statement.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statement_descriptor")]
    [MaxLength(20)]
    public string? StatementDescriptor { get; init; }

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
    /// Details of the recipient of the payout. Returns <c>null</c> for payment link transfer attempts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipient_details")]
    public RecipientDetails1? RecipientDetails { get; init; }

    /// <summary>
    /// The <c>Merchant</c> resource linked to the recipient.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipient_merchant_id")]
    public string? RecipientMerchantId { get; init; }

    /// <summary>
    /// The <c>Transfer</c> associated with the <c>Transfer Attempt</c>. Can be <c>null</c> when <c>Transfer Attempt</c> is in <c>PENDING</c> status if the corresponding <c>Transfer</c> has not been created yet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transfer_id")]
    public string? TransferId { get; init; }

    /// <summary>
    /// Type of <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type36? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
