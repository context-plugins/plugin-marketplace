using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record ListInsightsAnyStatusFilter
{
    /// <summary>
    /// Use to filter for either REACTIVE or PROACTIVE insights.
    /// </summary>
    [JsonPropertyName("Type")]
    public required TypeAmazonDevOpsGuruInsightsApi Type { get; init; }

    [JsonPropertyName("StartTimeRange")]
    public required StartTimeRange StartTimeRange { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
