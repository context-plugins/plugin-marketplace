using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record Evidence
{
    /// <summary>
    /// The kind of evidence this reference points to.
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Identifier of the referenced evidence.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
