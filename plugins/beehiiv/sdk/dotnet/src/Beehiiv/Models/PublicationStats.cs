using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.AnyOf;

namespace Beehiiv.Models;

/// <summary>
/// Optional list of stats for a publication. Retrievable by including an <c>expand</c> array in the publication request body. Add <c>"stats"</c> to the array to retrieve all, or add individual stats (prefaced with <c>stat_</c>) to only retrieve specific ones.
/// <para>
/// Examples:
/// {
///   "expand": ["stats"]
/// }
/// </para>
/// <para>
/// {
///   "expand": ["stat_active_subscriptions", "stat_average_click_rate"]
/// }
/// </para>
/// </summary>
public record PublicationStats
{
    /// <summary>
    /// Total number of active free and premium subscriptions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active_subscriptions")]
    public ActiveSubscriptionCount? ActiveSubscriptions { get; init; }

    /// <summary>
    /// Total number of active premium/paid subscriptions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active_premium_subscriptions")]
    public ActivePremiumSubscriptionCount? ActivePremiumSubscriptions { get; init; }

    /// <summary>
    /// Total number of active free subscriptions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active_free_subscriptions")]
    public ActiveFreeSubscriptionCount? ActiveFreeSubscriptions { get; init; }

    /// <summary>
    /// The publications historical average open rate
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("average_open_rate")]
    public AverageOpenRate? AverageOpenRate { get; init; }

    /// <summary>
    /// The publications historical average click through rate
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("average_click_rate")]
    public AverageClickRate? AverageClickRate { get; init; }

    /// <summary>
    /// Total number of emails sent
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_sent")]
    public TotalEmailsSent? TotalSent { get; init; }

    /// <summary>
    /// Total number of uniquely opened emails. Only counts the first open for each subscriber.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_unique_opened")]
    public TotalUniqueOpens? TotalUniqueOpened { get; init; }

    /// <summary>
    /// The total number of links clicked from emails.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_clicked")]
    public TotalClicks? TotalClicked { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
