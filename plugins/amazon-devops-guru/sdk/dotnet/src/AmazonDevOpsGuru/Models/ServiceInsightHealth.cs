using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record ServiceInsightHealth
{
    /// <summary>
    /// The number of open proactive insights in the Amazon Web Services service
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OpenProactiveInsights")]
    public int? OpenProactiveInsights { get; init; }

    /// <summary>
    /// The number of open reactive insights in the Amazon Web Services service
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OpenReactiveInsights")]
    public int? OpenReactiveInsights { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
