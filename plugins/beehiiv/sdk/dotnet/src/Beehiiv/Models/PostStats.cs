using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Optional list of stats for a post. Retrievable by including <c>expand: [stats]</c> in the post request body. &lt;br&gt;&lt;br&gt; <b>Note:</b> If a timeout occurs while aggregating stats, subsequent requests may return consolidated click metrics rather than individual raw click metrics.
/// </summary>
public record PostStats
{
    /// <summary>
    /// Stats scoped only to email recipients. Not relevant for posts published only to web
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public PostStatsEmail? Email { get; init; }

    /// <summary>
    /// Stats scoped only to web views. Not relevant for posts published only to email
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("web")]
    public PostStatsWeb? Web { get; init; }

    /// <summary>
    /// An array of click statistics for each URL in the post
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clicks")]
    public IReadOnlyList<ClickStats>? Clicks { get; init; }

    /// <summary>
    /// Total number of free-to-premium upgrades attributed to this post. Only populated when the publication has a paid subscription tier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upgrades")]
    public int? Upgrades { get; init; } = 0;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
