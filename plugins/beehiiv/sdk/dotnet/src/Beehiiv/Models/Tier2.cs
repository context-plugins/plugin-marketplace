using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

/// <summary>
/// The full tier object. Present when <c>expand: [tier]</c> is requested. Returned alongside <c>tier_id</c>.
/// </summary>
public record Tier2
{
    /// <summary>
    /// The prefixed ID of the tier.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Returns whether or not the tier has any active prices.
    /// </summary>
    [JsonPropertyName("status")]
    public required TierStatus Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; } = "Super engaged readers";

    /// <summary>
    /// Optional list of stats for a tier. Retrievable by including <c>expand: [stats]</c> in the tier request body.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats")]
    public TierStats? Stats { get; init; }

    /// <summary>
    /// Optional list of prices for a tier. Retrievable by including <c>expand: [prices]</c> in the tier request body.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prices")]
    public IReadOnlyList<TierPrice>? Prices { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
