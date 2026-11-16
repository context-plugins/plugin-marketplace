using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record SubmitDisputeEvidence
{
    /// <summary>
    /// Enter the amount in cents for the partial dispute you wish to rebut. Use this field only if you are rebutting part of the <c>Dispute</c>. The amount must be equal to or less than the disputed amount. If you use this field, provide details in the notes explaining the reason for the partial amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public int? Amount { get; init; }

    /// <summary>
    /// Include a note to explain the evidence files and the rebuttal of the <c>Dispute</c>.
    /// </summary>
    [JsonPropertyName("note")]
    public required string Note { get; init; }

    /// <summary>
    /// The ID of a <c>Transfer</c>. Use this field only if you are resolving an <c>INQUIRY</c> dispute with a proactive refund to the cardholder, or if a refund was made before the <c>Dispute</c> but the cardholder did not notice. The value should be the ID of the <c>Transfer</c> resource must be in state <c>SUCCEEDED</c> with type <c>REVERSAL</c>, or one of the <c>operation_key</c> values:
    /// - <c>UNREFERENCED_REFUND</c>
    /// - <c>CARD_NOT_PRESENT_UNREFERENCED_REFUND</c>
    /// - <c>CARD_PRESENT_UNREFERENCED_REFUND</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refund")]
    public string? Refund { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
