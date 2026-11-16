using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Details about the <c>Dispute</c> received by the processor. Any data from the processor can get included.
/// </summary>
public record DisputeDetails
{
    /// <summary>
    /// The Acquirer Reference Number (ARN) is a unique identifier assigned to a card transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arn")]
    public string? Arn { get; init; }

    /// <summary>
    /// The case number the processor has given the <c>Dispute</c> in their internal database.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("case_id")]
    public string? CaseId { get; init; }

    /// <summary>
    /// A number used by the processor to identify the funds that are getting disputed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pin_debit_adjustment_number")]
    public string? PinDebitAdjustmentNumber { get; init; }

    /// <summary>
    /// A code used by the processor and card networks to identify why the <c>Dispute</c> got filed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason_code")]
    public string? ReasonCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
