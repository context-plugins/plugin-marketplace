using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

/// <summary>
/// The complimentary access object.
/// </summary>
public record ComplimentaryAccess
{
    /// <summary>
    /// The prefixed ID of the complimentary access object.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The duration of the gift. Null when time_unit is "forever".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duration")]
    public int? Duration { get; init; }

    /// <summary>
    /// The unit of time for the gift duration.
    /// </summary>
    [JsonPropertyName("time_unit")]
    public required ComplimentaryAccessTimeUnit2 TimeUnit { get; init; }

    /// <summary>
    /// A human-readable description of the gift (e.g., "3 Months Gift", "Lifetime Gift").
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// The prefixed ID of the associated tier. Always present.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tier_id")]
    public string? TierId { get; init; }

    /// <summary>
    /// The full tier object. Present when <c>expand: [tier]</c> is requested. Returned alongside <c>tier_id</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tier")]
    public Tier2? Tier { get; init; }

    /// <summary>
    /// Stats for this complimentary access. Retrievable by including <c>expand: [stats]</c> in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats")]
    public ComplimentaryAccessStats2? Stats { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
