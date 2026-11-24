using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record Settlements
{
    /// <summary>
    /// Bank account number for settlements.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_number")]
    public string? AccountNumber { get; init; }

    /// <summary>
    /// IFSC code of the settlement bank.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ifsc_code")]
    public string? IfscCode { get; init; }

    /// <summary>
    /// Account holder name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("beneficiary_name")]
    public string? BeneficiaryName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
