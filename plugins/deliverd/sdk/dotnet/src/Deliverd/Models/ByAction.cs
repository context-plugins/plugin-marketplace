using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ByAction
{
    [JsonPropertyName("actionId")]
    public required string ActionId { get; init; }

    [JsonPropertyName("changed")]
    public required int Changed { get; init; }

    [JsonPropertyName("loosened")]
    public required int Loosened { get; init; }

    [JsonPropertyName("tightened")]
    public required int Tightened { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
