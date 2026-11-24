using System;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record BalanceInsightDataItem
{
    /// <summary>
    /// The account identifier being verified
    /// </summary>
    [JsonPropertyName("accountId")]
    public required Guid AccountId { get; init; }

    /// <summary>
    /// Balance verification result
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("balance")]
    public Balance? Balance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
