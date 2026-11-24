using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1MiscInstagramTagsResponse
{
    /// <summary>
    /// Whether the user is discoverable via Instagram business_discovery (typically Business/Creator). Personal/private accounts can return false even if taggable in media payload.
    /// </summary>
    [JsonPropertyName("exists")]
    public required bool Exists { get; init; }

    /// <summary>
    /// User data if exists, null otherwise
    /// </summary>
    [JsonPropertyName("data")]
    public required DataBundleSocialMiscApi? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
