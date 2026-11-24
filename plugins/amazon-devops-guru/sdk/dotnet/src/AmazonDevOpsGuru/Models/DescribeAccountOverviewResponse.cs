using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record DescribeAccountOverviewResponse
{
    /// <summary>
    /// An integer that specifies the number of open reactive insights in your Amazon Web Services account that were created during the time range passed in.
    /// </summary>
    [JsonPropertyName("ReactiveInsights")]
    public required int ReactiveInsights { get; init; }

    /// <summary>
    /// An integer that specifies the number of open proactive insights in your Amazon Web Services account that were created during the time range passed in.
    /// </summary>
    [JsonPropertyName("ProactiveInsights")]
    public required int ProactiveInsights { get; init; }

    /// <summary>
    /// The Mean Time to Recover (MTTR) for all closed insights that were created during the time range passed in.
    /// </summary>
    [JsonPropertyName("MeanTimeToRecoverInMilliseconds")]
    public required int MeanTimeToRecoverInMilliseconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
