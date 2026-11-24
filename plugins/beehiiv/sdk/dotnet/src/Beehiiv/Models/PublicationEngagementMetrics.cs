using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PublicationEngagementMetrics
{
    /// <summary>
    /// The starting date of the period for which the engagement metrics are reported based on the selected granularity.&lt;br&gt;&lt;br&gt; <c>day</c> granularity: The specific day.&lt;br&gt; <c>week</c> granularity: The Monday of the week.&lt;br&gt; <c>month</c> granularity: The first day of the month.
    /// </summary>
    [JsonPropertyName("date")]
    public required DateTimeOffset Date { get; init; }

    /// <summary>
    /// The total number of times emails were opened during the period.
    /// </summary>
    [JsonPropertyName("total_opens")]
    public required int TotalOpens { get; init; }

    /// <summary>
    /// The number of unique subscribers who opened emails during the period.
    /// </summary>
    [JsonPropertyName("unique_opens")]
    public required int UniqueOpens { get; init; }

    /// <summary>
    /// The total number of times links were clicked during the period.
    /// </summary>
    [JsonPropertyName("total_clicks")]
    public required int TotalClicks { get; init; }

    /// <summary>
    /// The total number of times links were clicked, during the period, as &lt;a href="https://www.beehiiv.com/support/article/28404633659159-introducing-verified-clicks-accurate-email-engagement-metrics?srsltid=AfmBOoregRzZ1N6bcwITVRA-Lo6NE06y6xNwb7WO85Gv0mrWMij-yFgb"&gt;verified by our system&lt;/a&gt;.
    /// </summary>
    [JsonPropertyName("total_verified_clicks")]
    public required int TotalVerifiedClicks { get; init; }

    /// <summary>
    /// The number of unique subscribers who clicked links during the period.
    /// </summary>
    [JsonPropertyName("unique_clicks")]
    public required int UniqueClicks { get; init; }

    /// <summary>
    /// The number of times links were clicked by unique subscribers, during the period, as &lt;a href="https://www.beehiiv.com/support/article/28404633659159-introducing-verified-clicks-accurate-email-engagement-metrics?srsltid=AfmBOoregRzZ1N6bcwITVRA-Lo6NE06y6xNwb7WO85Gv0mrWMij-yFgb"&gt;verified by our system&lt;/a&gt;.
    /// </summary>
    [JsonPropertyName("unique_verified_clicks")]
    public required int UniqueVerifiedClicks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
