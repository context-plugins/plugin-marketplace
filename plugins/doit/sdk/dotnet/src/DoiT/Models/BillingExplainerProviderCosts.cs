using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record BillingExplainerProviderCosts
{
    [JsonPropertyName("doit")]
    public required IReadOnlyDictionary<string, BillingExplainerMoney> Doit { get; init; }

    [JsonPropertyName("aws")]
    public required IReadOnlyDictionary<string, BillingExplainerMoney> Aws { get; init; }
}
