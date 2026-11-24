using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PostsAggregateStatsResponseStats
{
    /// <summary>
    /// Optional list of stats for a post. Retrievable by including <c>expand: [stats]</c> in the post request body. &lt;br&gt;&lt;br&gt; <b>Note:</b> If a timeout occurs while aggregating stats, subsequent requests may return consolidated click metrics rather than individual raw click metrics.
    /// </summary>
    [JsonPropertyName("stats")]
    public required PostStats Stats { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
