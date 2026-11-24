using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record SegmentStats
{
    /// <summary>
    /// The average open rate of the subscribers in the segment.
    /// </summary>
    [JsonPropertyName("open_rate")]
    public required double OpenRate { get; init; }

    /// <summary>
    /// The total number of emails sent to the subscribers in the segment.
    /// </summary>
    [JsonPropertyName("total_sent")]
    public required int TotalSent { get; init; }

    /// <summary>
    /// The percentage of subscribers in this segment who are premium in any tier.
    /// </summary>
    [JsonPropertyName("percentage_premium_subscribers")]
    public required double PercentagePremiumSubscribers { get; init; }

    /// <summary>
    /// The percentage of subscribers in this segment who have referred at least one other subscriber.
    /// </summary>
    [JsonPropertyName("percentage_subscribers_with_referrals")]
    public required double PercentageSubscribersWithReferrals { get; init; }

    /// <summary>
    /// The total number of unique emails clicked by subscribers in the segment.
    /// </summary>
    [JsonPropertyName("unique_emails_clicked")]
    public required int UniqueEmailsClicked { get; init; }

    /// <summary>
    /// The total number of emails delivered to subscribers in the segment.
    /// </summary>
    [JsonPropertyName("total_delivered")]
    public required int TotalDelivered { get; init; }

    /// <summary>
    /// The total number of referrals from subscribers in the segment.
    /// </summary>
    [JsonPropertyName("total_referrals")]
    public required int TotalReferrals { get; init; }

    /// <summary>
    /// The percentage of subscribers in this segment who have unsubscribed.
    /// </summary>
    [JsonPropertyName("unsubscribed_rate")]
    public required double UnsubscribedRate { get; init; }

    /// <summary>
    /// The total number of subscribers in the segment.
    /// </summary>
    [JsonPropertyName("total_subscribers")]
    public required int TotalSubscribers { get; init; }

    /// <summary>
    /// The average clickthrough rate of the subscribers in the segment.
    /// </summary>
    [JsonPropertyName("clickthrough_rate")]
    public required double ClickthroughRate { get; init; }

    /// <summary>
    /// The total number of subscribers in the segment who are unsubscribed.
    /// </summary>
    [JsonPropertyName("unsubscribed_count")]
    public required int UnsubscribedCount { get; init; }

    /// <summary>
    /// The total number of unique emails opened by subscribers in the segment.
    /// </summary>
    [JsonPropertyName("unique_emails_opened")]
    public required int UniqueEmailsOpened { get; init; }

    /// <summary>
    /// The total number of premium subscribers in the segment.
    /// </summary>
    [JsonPropertyName("premium_subscribers")]
    public required int PremiumSubscribers { get; init; }

    /// <summary>
    /// The average number of referrals per subscriber in the segment.
    /// </summary>
    [JsonPropertyName("average_referrals_per_subscriber")]
    public required double AverageReferralsPerSubscriber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
