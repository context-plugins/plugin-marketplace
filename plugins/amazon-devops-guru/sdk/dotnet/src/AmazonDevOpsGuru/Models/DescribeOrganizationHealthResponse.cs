using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record DescribeOrganizationHealthResponse
{
    /// <summary>
    /// An integer that specifies the number of open reactive insights in your Amazon Web Services account.
    /// </summary>
    [JsonPropertyName("OpenReactiveInsights")]
    public required int OpenReactiveInsights { get; init; }

    /// <summary>
    /// An integer that specifies the number of open proactive insights in your Amazon Web Services account.
    /// </summary>
    [JsonPropertyName("OpenProactiveInsights")]
    public required int OpenProactiveInsights { get; init; }

    /// <summary>
    /// An integer that specifies the number of metrics that have been analyzed in your organization.
    /// </summary>
    [JsonPropertyName("MetricsAnalyzed")]
    public required int MetricsAnalyzed { get; init; }

    /// <summary>
    /// The number of Amazon DevOps Guru resource analysis hours billed to the current Amazon Web Services account in the last hour.
    /// </summary>
    [JsonPropertyName("ResourceHours")]
    public required int ResourceHours { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
