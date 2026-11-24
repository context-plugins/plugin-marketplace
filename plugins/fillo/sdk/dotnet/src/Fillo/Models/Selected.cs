using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

/// <summary>
/// The account id this project uses for each provider, or null.
/// </summary>
public record Selected
{
    [JsonPropertyName("notion")]
    public required string? Notion { get; init; }

    [JsonPropertyName("slack")]
    public required string? Slack { get; init; }

    [JsonPropertyName("hubspot")]
    public required string? Hubspot { get; init; }

    [JsonPropertyName("discord")]
    public required string? Discord { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
