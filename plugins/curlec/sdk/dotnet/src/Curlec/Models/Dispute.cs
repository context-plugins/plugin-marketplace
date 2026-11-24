using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record Dispute
{
    /// <summary>
    /// Unique dispute identifier. Prefix: disp_
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity")]
    public EntityRazorpayDisputesApi? Entity { get; init; }

    /// <summary>
    /// The payment against which the dispute was raised (pay_*).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_id")]
    public string? PaymentId { get; init; }

    /// <summary>
    /// Disputed amount in currency subunits.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public int? Amount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    /// <summary>
    /// Amount deducted from your balance when dispute is lost.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount_deducted")]
    public int? AmountDeducted { get; init; }

    /// <summary>
    /// Code identifying the dispute reason.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason_code")]
    public string? ReasonCode { get; init; }

    /// <summary>
    /// Human-readable explanation of the dispute cause.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason_description")]
    public string? ReasonDescription { get; init; }

    /// <summary>
    /// Unix timestamp by which you must respond. Missing this forfeits the dispute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("respond_by")]
    public int? RespondBy { get; init; }

    /// <summary>
    /// open: action required. under_review: evidence submitted, awaiting bank decision. won: resolved in your favour. lost: resolved against you. closed: resolved without chargeback.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    /// <summary>
    /// Escalation stage of the dispute process.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phase")]
    public Phase? Phase { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public int? CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("evidence")]
    public DisputeEvidence? Evidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
