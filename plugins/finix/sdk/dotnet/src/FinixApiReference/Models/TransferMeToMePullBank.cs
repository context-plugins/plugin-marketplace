using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record TransferMeToMePullBank
{
    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonPropertyName("amount")]
    public required long Amount { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

    /// <summary>
    /// The type of disbursement to perform. Defaults to <c>GENERAL_PAYOUT</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funds_flow_type")]
    public FundsFlowType? FundsFlowType { get; init; }

    /// <summary>
    /// A key indicating that the operation type should be an ACH pull for a <c>ME_TO_ME</c> transaction.
    /// </summary>
    [JsonPropertyName("operation_key")]
    public string OperationKey { get; } = "PULL_FROM_ACH";

    /// <summary>
    /// Identifier of the <c>Payment Instrument</c> to pull funds from.
    /// </summary>
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
