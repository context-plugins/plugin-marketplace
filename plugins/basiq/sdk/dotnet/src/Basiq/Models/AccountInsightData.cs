using System;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record AccountInsightData
{
    /// <summary>
    /// Unique identifier for the account
    /// </summary>
    [JsonPropertyName("accountId")]
    public required Guid AccountId { get; init; }

    [JsonPropertyName("accountNumber")]
    public required AccountNumberMatch AccountNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountType")]
    public AccountTypeMatch? AccountType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
