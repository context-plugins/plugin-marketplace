using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// A <c>Dispute</c> objected created for a chargeback or customer disputes.
/// </summary>
public record Dispute
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
    /// The next <c>action</c> required to move forward with the <c>Dispute</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("action")]
    public string? Action { get; init; }

    /// <summary>
    /// The total amount of the <c>Dispute</c> (in cents).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public int? Amount { get; init; }

    /// <summary>
    /// ID of the <c>Application</c> the resource was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    [MinLength(1)]
    public string? Application { get; init; }

    /// <summary>
    /// Details about the <c>Dispute</c> received by the processor. Any data from the processor can get included.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dispute_details")]
    public DisputeDetails? DisputeDetails { get; init; }

    /// <summary>
    /// The status of the uploaded evidence after it has been submitted to the issuing bank. This field reflects how the <c>Dispute</c> is moving forward following the <see href="/api/disputes/submitdisputeevidence">submission of dispute evidence</see>. For more information on challenging a <c>Dispute</c>, see <see href="/guides/after-the-payment/disputes/responding-to-disputes">Responding to Disputes</see>.
    /// <para>
    /// Possible values are:
    /// - <c>INQUIRY</c>: Updated to this value if <c>Dispute#state</c> is <c>INQUIRY</c> at the time of submission.
    /// - <c>CHARGEBACK</c>: Updated to this value if <c>Dispute#state</c> is <c>PENDING</c> at the time of submission.
    /// - <c>NONE</c>: No evidence has been uploaded or submitted yet.
    /// - <c>NOT_SUPPORTED</c>: The processor or dispute type (<c>Dispute#reason</c>) does not support evidence submission.
    /// - <c>UNKNOWN</c>: Occurs if evidence details couldn't be successfully processed or retrieved.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("evidence_submitted")]
    public EvidenceSubmitted? EvidenceSubmitted { get; init; }

    /// <summary>
    /// The ID of the seller's <c>Identity</c> resource. This is the <c>Identity</c> resource that was used to create the seller's <c>Merchant</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public string? Identity { get; init; }

    /// <summary>
    /// The ID of the seller's <c>Merchant</c> resource. This is the <c>Merchant</c> account the <c>Dispute</c> was filed against.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant")]
    public string? Merchant { get; init; }

    /// <summary>
    /// Additional dispute details. This field is typically <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// A timestamp of when the disputed <c>Transfer</c> was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("occurred_at")]
    public DateTimeOffset? OccurredAt { get; init; }

    /// <summary>
    /// The system-defined reason for the <c>Dispute</c>. Available values include:
    /// <list type="bullet">
    ///   <item><description><c>CLERICAL</c>: An error occurred while processing the sale, or the cardholder has an issue with the transaction and refuses the goods.</description></item>
    ///   <item><description><c>FRAUD</c>: The cardholder claims they didn't approve or authorize the transaction. <c>FRAUD</c> is the primary reason disputes get created.</description></item>
    ///   <item><description><c>INQUIRY</c>: The issuing bank requests more information to determine if a transaction was legitimate.</description></item>
    ///   <item><description><c>QUALITY</c>: The cardholder has issues with the quality of the goods or services received. Reasons can include receiving damaged goods or a service that doesn't match what's promised.</description></item>
    ///   <item><description><c>TECHNICAL</c>: A technical issued caused the transaction to process funds incorrectly.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public Reason? Reason { get; init; }

    /// <summary>
    /// A timestamp of when the <c>Merchant</c> must respond to the <c>Dispute</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("respond_by")]
    public DateTimeOffset? RespondBy { get; init; }

    /// <summary>
    /// Details the state of the <c>Dispute</c> and what action the <c>Merchant</c> needs to take. Possible values are:
    /// <list type="bullet">
    ///   <item><description><c>NEEDS_RESPONSE</c>: The <c>Merchant</c> needs to respond to the <c>Dispute</c> by the <c>Dispute#respond_by</c> timestamp. For details on how to respond to a <c>Dispute</c>, see <see href="/guides/after-the-payment/disputes/responding-to-disputes">Responding to Disputes</see>.</description></item>
    ///   <item><description><c>RESPONDED</c>: The issuing bank has received the evidence and actively reviewing it. No action needed from the <c>Merchant</c>.</description></item>
    ///   <item><description><c>ACCEPTED</c>: The <c>Merchant</c> has accepted the <c>Dispute</c>. When a <c>Dispute</c> is accepted, you concede that the <c>Dispute</c> is not worth challenging or representing. For details on how to accept a <c>Dispute</c>, see <see href="/guides/after-the-payment/disputes/accepting-disputes/">Accepting a Dispute</see>.</description></item>
    ///   <item><description><c>NO_RESPONSE_ALLOWED</c>: The final <c>Dispute#response_state</c> when a <c>Dispute</c> is either <c>WON</c> or <c>LOST</c>.</description></item>
    ///   <item><description><c>UNKNOWN</c>: Occurs when testing <c>Disputes</c> in the sandbox on the <c>DUMMY_V1</c> processor or in production on the <c>VANTIV_V1</c> processor.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("response_state")]
    public ResponseState? ResponseState { get; init; }

    /// <summary>
    /// The current overall state of the <c>Dispute</c>. Disputes are initially created with a <c>PENDING</c> state. The decision of the issuing bank is final for all parties. Possible values include:
    /// <para>
    /// - <c>INQUIRY</c>: The <c>Dispute</c> is being reviewed by the buyer's issuing bank. No changes can be made while in this state. If a <c>Dispute</c> reaches this state, the bank is requesting additional information from the seller to prove the transaction was legitimate.
    /// - <c>PENDING</c>: The default initial state of a <c>Dispute</c>. It also acts as a transitional state after an accept request is submitted. The state will eventually change based on the transaction type:
    ///   - For a dispute on a <b>sale</b>: Changes to <c>LOST</c> when accepted.
    ///   - For a dispute on a <b>refund</b>: Changes to <c>WON</c> when accepted.
    /// - <c>LOST</c>: The <c>Dispute</c> is lost, and the cardholder keeps the credit. No further changes can be made.
    /// - <c>WON</c>: The <c>Dispute</c> is won, the credit is reversed, and funds are returned to the <c>Merchant</c>. No further changes can be made.
    /// For more details, see <see href="/guides/after-the-payment/disputes/dispute-states">Dispute States</see>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State4? State { get; init; }

    /// <summary>
    /// ID of the <c>Transfer</c> resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transfer")]
    public string? Transfer { get; init; }

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
    /// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links8? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
