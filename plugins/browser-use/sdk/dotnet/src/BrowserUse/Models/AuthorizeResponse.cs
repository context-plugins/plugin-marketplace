using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// Response with OAuth redirect URL.
/// </summary>
public record AuthorizeResponse
{
    [JsonPropertyName("redirect_url")]
    public required string RedirectUrl { get; init; }

    [JsonPropertyName("provider")]
    public required string Provider { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
