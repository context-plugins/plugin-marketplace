using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record DisputeEvidence
{
    /// <summary>
    /// Contested amount in currency subunits.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public int? Amount { get; init; }

    /// <summary>
    /// Your explanation of why the dispute should be resolved in your favour. Max 1000 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public string? Summary { get; init; }

    /// <summary>
    /// Document IDs proving product shipment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shipping_proof")]
    public IReadOnlyList<string>? ShippingProof { get; init; }

    /// <summary>
    /// Order confirmation document IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billing_proof")]
    public IReadOnlyList<string>? BillingProof { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cancellation_proof")]
    public IReadOnlyList<string>? CancellationProof { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer_communication")]
    public IReadOnlyList<string>? CustomerCommunication { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proof_of_service")]
    public IReadOnlyList<string>? ProofOfService { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("explanation_letter")]
    public IReadOnlyList<string>? ExplanationLetter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refund_confirmation")]
    public IReadOnlyList<string>? RefundConfirmation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("access_activity_log")]
    public IReadOnlyList<string>? AccessActivityLog { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refund_cancellation_policy")]
    public IReadOnlyList<string>? RefundCancellationPolicy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("term_and_conditions")]
    public IReadOnlyList<string>? TermAndConditions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("others")]
    public IReadOnlyList<object>? Others { get; init; }

    /// <summary>
    /// Unix timestamp of last evidence submission. Null for drafts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("submitted_at")]
    public int? SubmittedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
