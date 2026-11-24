using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record LogsAnomalyDetectionIntegration
{
    /// <summary>
    /// Specifies if DevOps Guru is configured to perform log anomaly detection on CloudWatch log groups.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OptInStatus")]
    public OptInStatus1? OptInStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
