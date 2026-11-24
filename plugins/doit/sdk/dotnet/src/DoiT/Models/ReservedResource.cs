using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record ReservedResource
{
    [JsonPropertyName("amount")]
    public required string Amount { get; init; }

    [JsonPropertyName("resourceKind")]
    public required string ResourceKind { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
