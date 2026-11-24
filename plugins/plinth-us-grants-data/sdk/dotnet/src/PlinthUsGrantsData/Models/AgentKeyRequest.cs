using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models;

public record AgentKeyRequest
{
    /// <summary>
    /// What you are evaluating. Recorded, never verified, never gates — but required.
    /// </summary>
    [JsonPropertyName("purpose")]
    [MinLength(10)]
    public required string Purpose { get; init; }

    /// <summary>
    /// Who or what is calling: an agent name, product or host. Recorded, unverified, required.
    /// </summary>
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    /// <summary>
    /// Optional. A URL or address we can reach you at.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact")]
    public string? Contact { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
