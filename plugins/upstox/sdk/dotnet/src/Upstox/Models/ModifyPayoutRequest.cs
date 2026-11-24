using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Core.Validation.Attributes;

namespace Upstox.Models;

public record ModifyPayoutRequest
{
    /// <summary>
    /// Withdrawal amount in INR
    /// </summary>
    [JsonPropertyName("amount")]
    [Minimum(100.0)]
    public required double Amount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
