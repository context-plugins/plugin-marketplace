using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record SectionableBlock13
{
    /// <summary>
    /// Discriminator value: paywall_break
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "paywall_break";

    /// <summary>
    /// The ID of the paywall.
    /// </summary>
    [JsonPropertyName("paywall_id")]
    public required string PaywallId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
