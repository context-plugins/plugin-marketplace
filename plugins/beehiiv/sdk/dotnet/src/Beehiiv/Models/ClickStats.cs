using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Details about specific URL's click stats from a post.
/// </summary>
public record ClickStats
{
    /// <summary>
    /// The URL the stats are for
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// The canonical URL with all query parameters and fragments removed. Derived by stripping everything after the '?' and '#' characters. Preserves the protocol, host (including casing), port, and path exactly as they appear in the original URL. Guaranteed to be present whenever url is present, enabling grouping of clicks by destination regardless of tracking parameters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("base_url")]
    public string? BaseUrl { get; init; }

    /// <summary>
    /// URL stats scoped only to email recipients. Not relevant for posts published only to web
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public PostClickStatsEmail? Email { get; init; }

    /// <summary>
    /// Stats scoped only to web views. Not relevant for posts published only to email
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("web")]
    public PostClickStatsWeb? Web { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_clicks")]
    public int? TotalClicks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_unique_clicks")]
    public int? TotalUniqueClicks { get; init; }

    /// <summary>
    /// The percentage of clicks on the URL compared to the total number of recipients and web views
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_click_through_rate")]
    public double? TotalClickThroughRate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
