using System;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record AccountBalanceData
{
    /// <summary>
    /// Unique identifier for the account
    /// </summary>
    [JsonPropertyName("accountId")]
    public required Guid AccountId { get; init; }

    /// <summary>
    /// Balance verification result
    /// </summary>
    [JsonPropertyName("balance")]
    public required Balance1 Balance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
