using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Stats scoped only to web views. Not relevant for posts published only to email
/// </summary>
public record PostClickStatsWeb
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clicks")]
    public int? Clicks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unique_clicks")]
    public int? UniqueClicks { get; init; }

    /// <summary>
    /// The percentage of clicks on the URL compared to the total number of web views
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("click_through_rate")]
    public double? ClickThroughRate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
