using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

/// <summary>
/// API key the request was authenticated with. <c>null</c> when authenticated
/// via session cookie (e.g. logged-in browser hitting the API).
/// </summary>
public record MeApiKey1
{
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    [JsonPropertyName("key_name")]
    public required string KeyName { get; init; }

    /// <summary>
    /// Dated API version the key is pinned to (see <c>Audioscrape-Version</c>).
    /// </summary>
    [JsonPropertyName("pinned_version")]
    public required string PinnedVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
