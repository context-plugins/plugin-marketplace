using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record BalanceInsightRequest
{
    /// <summary>
    /// Balance criteria for filtering accounts. Only 'min' is required, 'max' is optional.
    /// </summary>
    [JsonPropertyName("balance")]
    public required Balance2 Balance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
