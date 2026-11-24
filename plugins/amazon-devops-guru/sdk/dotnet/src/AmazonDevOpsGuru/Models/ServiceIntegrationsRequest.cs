using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record ServiceIntegrationsRequest
{
    [JsonPropertyName("ServiceIntegration")]
    public required UpdateServiceIntegrationConfig ServiceIntegration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
