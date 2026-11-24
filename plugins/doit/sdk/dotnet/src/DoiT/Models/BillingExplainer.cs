using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record BillingExplainer
{
    [JsonPropertyName("summary")]
    public required BillingExplainerSummary Summary { get; init; }

    [JsonPropertyName("service")]
    public required IReadOnlyDictionary<string, BillingExplainerProviderCosts> Service { get; init; }

    [JsonPropertyName("account")]
    public required IReadOnlyDictionary<string, BillingExplainerProviderCosts> Account { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
