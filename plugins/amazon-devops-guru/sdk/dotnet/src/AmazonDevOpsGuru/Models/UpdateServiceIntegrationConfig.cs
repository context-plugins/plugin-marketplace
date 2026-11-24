using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record UpdateServiceIntegrationConfig
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OpsCenter")]
    public OpsCenterIntegrationConfig? OpsCenter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LogsAnomalyDetection")]
    public LogsAnomalyDetectionIntegrationConfig? LogsAnomalyDetection { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KMSServerSideEncryption")]
    public KmsServerSideEncryptionIntegrationConfig? KmsServerSideEncryption { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
