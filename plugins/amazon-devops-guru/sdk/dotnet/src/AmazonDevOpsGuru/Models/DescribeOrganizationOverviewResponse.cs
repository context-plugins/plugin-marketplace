using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record DescribeOrganizationOverviewResponse
{
    /// <summary>
    /// An integer that specifies the number of open reactive insights in your Amazon Web Services account.
    /// </summary>
    [JsonPropertyName("ReactiveInsights")]
    public required int ReactiveInsights { get; init; }

    /// <summary>
    /// An integer that specifies the number of open proactive insights in your Amazon Web Services account.
    /// </summary>
    [JsonPropertyName("ProactiveInsights")]
    public required int ProactiveInsights { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
