using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PostCreate
{
    /// <summary>
    /// The prefixed post id
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// A stable URL to the post's email preview in the beehiiv app. Renders the current post content on every visit. Requires a beehiiv session with access to the publication. The same URL is returned on every create, update, or show. Supports optional query parameters to preview as a specific audience: <c>platform</c> (<c>email</c> default, or <c>web</c>), <c>subscriber_type</c> (<c>free</c> default, or <c>premium</c> - requires <c>tier_ids[]</c>), <c>tier_ids[]</c> (one or more tier ids, only used when <c>subscriber_type=premium</c>), and <c>subscriber_id</c> (renders using that subscriber's real tier memberships and takes precedence over <c>subscriber_type</c>/<c>tier_ids[]</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preview_url")]
    public string? PreviewUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
