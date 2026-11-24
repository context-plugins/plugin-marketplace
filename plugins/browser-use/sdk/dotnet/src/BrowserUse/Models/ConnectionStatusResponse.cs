using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// Response for connection status check.
/// </summary>
public record ConnectionStatusResponse
{
    [JsonPropertyName("provider")]
    public required string Provider { get; init; }

    [JsonPropertyName("is_connected")]
    public required bool IsConnected { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
