using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Core.Validation.Attributes;

namespace Upstox.Models;

public record InitiatePayoutRequest
{
    /// <summary>
    /// Withdrawal mode. NEFT or IMPS
    /// </summary>
    [JsonPropertyName("mode")]
    [MinLength(1)]
    [RegularExpression("^(NEFT|IMPS)$")]
    public required string Mode { get; init; }

    /// <summary>
    /// Withdrawal amount in INR
    /// </summary>
    [JsonPropertyName("amount")]
    [Minimum(100.0)]
    public required double Amount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
