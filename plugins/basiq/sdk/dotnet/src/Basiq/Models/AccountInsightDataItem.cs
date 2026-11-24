using System;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record AccountInsightDataItem
{
    /// <summary>
    /// The account identifier being verified
    /// </summary>
    [JsonPropertyName("accountId")]
    public required Guid AccountId { get; init; }

    /// <summary>
    /// Account number verification result
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountNumber")]
    public VerificationResult4? AccountNumber { get; init; }

    /// <summary>
    /// Account type verification result
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountType")]
    public VerificationResult1? AccountType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
