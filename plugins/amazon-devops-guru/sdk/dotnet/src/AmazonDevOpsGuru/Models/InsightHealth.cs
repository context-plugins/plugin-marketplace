using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record InsightHealth
{
    /// <summary>
    /// The number of open proactive insights.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OpenProactiveInsights")]
    public int? OpenProactiveInsights { get; init; }

    /// <summary>
    /// The number of open reactive insights.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OpenReactiveInsights")]
    public int? OpenReactiveInsights { get; init; }

    /// <summary>
    /// The Meant Time to Recover (MTTR) for the insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MeanTimeToRecoverInMilliseconds")]
    public int? MeanTimeToRecoverInMilliseconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
