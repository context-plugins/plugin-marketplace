using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Disbursement info.
/// </summary>
public record DisbursementInfo
{
    /// <summary>
    /// Set as <c>true</c> if the payment disbursement type can be voided
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isVoidable")]
    public bool? IsVoidable { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checkDisbursement")]
    public CheckDisbursement2? CheckDisbursement { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("achDisbursement")]
    public AchDisbursement2? AchDisbursement { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rppsDisbursement")]
    public RppsDisbursement2? RppsDisbursement { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("internationalDisbursement")]
    public InternationalDisbursement2? InternationalDisbursement { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vcardDisbursement")]
    public VcardDisbursement1? VcardDisbursement { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("walletDisbursement")]
    public WalletDisbursement2? WalletDisbursement { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
