using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

/// <summary>
/// Response for a single integration.
/// </summary>
public record IntegrationResponse
{
    [JsonPropertyName("provider")]
    public required string Provider { get; init; }

    [JsonPropertyName("display_name")]
    public required string DisplayName { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonPropertyName("icon_url")]
    public required IconUrl IconUrl { get; init; }

    [JsonPropertyName("category")]
    public required string Category { get; init; }

    [JsonPropertyName("is_connected")]
    public required bool IsConnected { get; init; }

    [JsonPropertyName("auth_type")]
    public required string AuthType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_popular")]
    public bool? IsPopular { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
