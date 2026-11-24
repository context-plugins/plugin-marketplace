using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record ApiKeyUsage
{
    [JsonPropertyName("key_id")]
    public required long KeyId { get; init; }

    /// <summary>
    /// Requests that authenticated with this key inside the window.
    /// </summary>
    [JsonPropertyName("requests")]
    public required long Requests { get; init; }

    /// <summary>
    /// Trailing window the count covers, in days.
    /// </summary>
    [JsonPropertyName("window_days")]
    public required long WindowDays { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
