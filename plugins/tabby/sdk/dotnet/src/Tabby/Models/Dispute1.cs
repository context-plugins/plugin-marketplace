using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record Dispute1
{
    [JsonPropertyName("dispute")]
    public required Dispute Dispute { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
