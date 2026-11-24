using System.Text.Json.Serialization;
using Apibara.Core.Models;

namespace Apibara.Models;

/// <summary>
/// API usage and plan limit response.
/// </summary>
public record UsageResponse
{
    /// <summary>
    /// Usage information returned for the authenticated API key.
    /// </summary>
    [JsonPropertyName("data")]
    public required object Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
