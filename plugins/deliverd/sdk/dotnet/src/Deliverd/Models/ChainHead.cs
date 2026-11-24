using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

/// <summary>
/// The audit chain head the pack recorded when it was taken.
/// </summary>
public record ChainHead
{
    [JsonPropertyName("seq")]
    public required int Seq { get; init; }

    [JsonPropertyName("hash")]
    public required string Hash { get; init; }

    [JsonPropertyName("at")]
    public required string At { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
