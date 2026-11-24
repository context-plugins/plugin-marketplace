using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record ClassConnectionsApi
{
    /// <summary>
    /// Account type
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Product name.
    /// </summary>
    [JsonPropertyName("product")]
    public required string Product { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
