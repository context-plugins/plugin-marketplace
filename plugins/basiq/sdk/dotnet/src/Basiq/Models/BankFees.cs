using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Average monthly amount for given class for defined period
/// </summary>
public record BankFees
{
    /// <summary>
    /// Average amount monthly
    /// </summary>
    [JsonPropertyName("avgMonthly")]
    public required string AvgMonthly { get; init; }

    [JsonPropertyName("changeHistory")]
    public required IReadOnlyList<ChangeHistory> ChangeHistory { get; init; }

    /// <summary>
    /// Summary period "monthly"
    /// </summary>
    [JsonPropertyName("summary")]
    public required string Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
