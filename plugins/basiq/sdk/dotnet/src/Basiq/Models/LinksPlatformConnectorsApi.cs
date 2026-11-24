using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// institution logo resource links
/// </summary>
public record LinksPlatformConnectorsApi
{
    /// <summary>
    /// URL to full size logo
    /// </summary>
    [JsonPropertyName("full")]
    public required string Full { get; init; }

    /// <summary>
    /// Square formatted logo URL
    /// </summary>
    [JsonPropertyName("square")]
    public required string Square { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
