using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record CostEstimationRequest
{
    [JsonPropertyName("ResourceCollection")]
    public required CostEstimationResourceCollectionFilter ResourceCollection { get; init; }

    /// <summary>
    /// The idempotency token used to identify each cost estimate request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientToken")]
    public string? ClientToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
