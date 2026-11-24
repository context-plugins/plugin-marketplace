using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1AutomationsCopyResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<ItemBundleSocialAutomationApi> Items { get; init; }

    [JsonPropertyName("total")]
    public required double Total { get; init; }

    /// <summary>
    /// Source flows not copied because the target organization has no access to their platform.
    /// </summary>
    [JsonPropertyName("skipped")]
    public required int Skipped { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
