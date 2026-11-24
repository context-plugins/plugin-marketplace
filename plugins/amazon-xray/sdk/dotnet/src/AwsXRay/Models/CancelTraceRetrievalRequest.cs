using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record CancelTraceRetrievalRequest
{
    /// <summary>
    /// Retrieval token.
    /// </summary>
    [JsonPropertyName("RetrievalToken")]
    public required string RetrievalToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
