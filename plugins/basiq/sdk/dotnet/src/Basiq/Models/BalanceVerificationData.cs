using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Required when type is BALANCE_VERIFICATION.
/// </summary>
public record BalanceVerificationData
{
    [JsonPropertyName("balance")]
    public required Balance3 Balance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
