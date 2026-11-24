using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record AmazonCodeGuruProfilerIntegration
{
    /// <summary>
    /// The status of the CodeGuru Profiler integration. Specifies if DevOps Guru is enabled to consume recommendations that are generated from Amazon CodeGuru Profiler.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public StatusAmazonDevOpsGuruEventSourcesApi? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
