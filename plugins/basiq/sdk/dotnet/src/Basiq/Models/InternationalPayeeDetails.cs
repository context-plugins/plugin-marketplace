using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Details specific to international payees.
/// </summary>
public record InternationalPayeeDetails
{
    /// <summary>
    /// Details about the beneficiary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("beneficiaryDetails")]
    public BeneficiaryDetails? BeneficiaryDetails { get; init; }

    /// <summary>
    /// Details about the beneficiary's bank.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bankDetails")]
    public BankDetails? BankDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
