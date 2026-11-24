using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Wallet used to manage an account balance for a particular currency.
/// </summary>
public record GoogleCloudApigeeV1DeveloperBalanceWallet
{
    /// <summary>
    /// Output only. Time at which the developer last added credit to the account in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastCreditTime")]
    public string? LastCreditTime { get; init; }

    /// <summary>
    /// Current remaining balance of the developer for a particular currency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("balance")]
    public GoogleTypeMoney8? Balance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
