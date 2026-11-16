using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record NoFees
{
    /// <summary>
    /// Percentage-based fee incurred against the full amount of an eCheck (also called ACH payments). Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ach_basis_points")]
    public int? AchBasisPoints { get; init; }

    /// <summary>
    /// A fixed amount (in cents) that will be charged to the seller for receiving an ACH Credit Return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ach_credit_return_fixed_fee")]
    public int? AchCreditReturnFixedFee { get; init; }

    /// <summary>
    /// A fixed amount (in cents) that will be charged to the seller for receiving an ACH Debit Return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ach_debit_return_fixed_fee")]
    public int? AchDebitReturnFixedFee { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ach_fixed_fee")]
    public int? AchFixedFee { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each card-based <c>Transfer</c>. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("basis_points")]
    public int? BasisPoints { get; init; }

    /// <summary>
    /// Fee applied when a <c>Dispute</c> is created or updated to a <c>PENDING</c> state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dispute_fixed_fee")]
    public int? DisputeFixedFee { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual card-based <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fixed_fee")]
    public int? FixedFee { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
