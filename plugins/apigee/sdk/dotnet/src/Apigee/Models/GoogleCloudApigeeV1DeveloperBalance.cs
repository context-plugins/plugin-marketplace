using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Account balance for the developer.
/// </summary>
public record GoogleCloudApigeeV1DeveloperBalance
{
    /// <summary>
    /// Output only. List of all wallets. Each individual wallet stores the account balance for a particular currency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wallets")]
    public IReadOnlyList<GoogleCloudApigeeV1DeveloperBalanceWallet>? Wallets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
