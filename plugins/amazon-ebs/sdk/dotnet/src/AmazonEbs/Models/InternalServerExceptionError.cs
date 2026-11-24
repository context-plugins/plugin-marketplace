using System.Text.Json.Serialization;
using AmazonEbs.Core.Models;

namespace AmazonEbs.Models;

public record InternalServerExceptionError
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
