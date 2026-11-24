using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record ServiceHealth
{
    /// <summary>
    /// The name of the Amazon Web Services service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ServiceName")]
    public ServiceName? ServiceName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Insight")]
    public ServiceInsightHealth? Insight { get; init; }

    /// <summary>
    /// Number of resources that DevOps Guru is monitoring in an analyzed Amazon Web Services service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AnalyzedResourceCount")]
    public int? AnalyzedResourceCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
