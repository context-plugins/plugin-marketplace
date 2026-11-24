using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1AutomationProviderSettingsResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<Item3BundleSocialAutomationApi> Items { get; init; }

    [JsonPropertyName("total")]
    public required double Total { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
