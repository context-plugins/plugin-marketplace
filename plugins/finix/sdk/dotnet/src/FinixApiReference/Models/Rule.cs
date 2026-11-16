using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// A rule that sets limits on transactions.
/// </summary>
public record Rule
{
    /// <summary>
    /// A limit on the number of transactions.
    /// </summary>
    [JsonPropertyName("count_limit")]
    public required int CountLimit { get; init; }

    /// <summary>
    /// A limit on the volume of transactions.
    /// </summary>
    [JsonPropertyName("volume_limit")]
    public required int VolumeLimit { get; init; }

    /// <summary>
    /// Whether the rule is enabled.
    /// </summary>
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    /// <summary>
    /// The day of the week the rule applies to. For DAILY rules, only <c>ALL</c> is supported (i.e., the rule applies to all days).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day")]
    public Day? Day { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
