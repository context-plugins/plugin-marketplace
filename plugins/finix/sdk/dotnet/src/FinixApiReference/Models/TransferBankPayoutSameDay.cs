using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record TransferBankPayoutSameDay
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
    /// Identifier of the <c>Payment Instrument</c> that will receive the payout.
    /// </summary>
    [JsonPropertyName("destination")]
    public required string Destination { get; init; }

    /// <summary>
    /// The type of disbursement to perform. Defaults to <c>GENERAL_PAYOUT</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funds_flow_type")]
    public FundsFlowType? FundsFlowType { get; init; }

    /// <summary>
    /// A key indicating the type of operation. Refer to the <see href="/guides/payouts/bank-payouts">Bank Payouts</see> guide for an explanation of "Next Day" versus "Same Day" ACH.
    /// </summary>
    [JsonPropertyName("operation_key")]
    public string OperationKey { get; } = "PUSH_TO_SAME_DAY_ACH";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
