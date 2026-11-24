using System.Collections.Generic;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

public record AgentCardWalletListResponse
{
    [JsonPropertyName("wallets")]
    public required IReadOnlyList<AgentCardWalletSummary> Wallets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
