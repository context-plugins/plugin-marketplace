using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// URL stats scoped only to email recipients. Not relevant for posts published only to web
/// </summary>
public record PostClickStatsEmail
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clicks")]
    public int? Clicks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unique_clicks")]
    public int? UniqueClicks { get; init; }

    /// <summary>
    /// Total number of verified human email clicks on this URL. Verified clicks have passed bot detection and are confirmed to be from real subscribers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verified_clicks")]
    public int? VerifiedClicks { get; init; }

    /// <summary>
    /// Unique number of verified human email clicks on this URL. Only counts the first verified click per subscriber.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unique_verified_clicks")]
    public int? UniqueVerifiedClicks { get; init; }

    /// <summary>
    /// The percentage of email clicks on the URL compared to the total number of recipients
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("click_through_rate")]
    public double? ClickThroughRate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
