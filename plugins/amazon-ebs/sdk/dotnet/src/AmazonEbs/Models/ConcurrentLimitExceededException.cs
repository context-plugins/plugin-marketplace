using System.Text.Json.Serialization;
using AmazonEbs.Core.Models;

namespace AmazonEbs.Models;

public record ConcurrentLimitExceededException
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
