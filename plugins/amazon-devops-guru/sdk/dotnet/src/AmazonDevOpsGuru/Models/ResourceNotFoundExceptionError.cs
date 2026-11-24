using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record ResourceNotFoundExceptionError
{
    [JsonPropertyName("Message")]
    public required string Message { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services resource that could not be found.
    /// </summary>
    [JsonPropertyName("ResourceId")]
    public required string ResourceId { get; init; }

    /// <summary>
    /// The type of the Amazon Web Services resource that could not be found.
    /// </summary>
    [JsonPropertyName("ResourceType")]
    public required string ResourceType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
