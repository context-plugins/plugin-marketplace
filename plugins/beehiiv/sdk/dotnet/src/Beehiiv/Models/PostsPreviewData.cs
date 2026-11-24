using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PostsPreviewData
{
    /// <summary>
    /// A URL to the post's preview in the beehiiv app, parameterized by the given audience simulation. Requires a beehiiv session with access to the publication.
    /// </summary>
    [JsonPropertyName("preview_url")]
    public required string PreviewUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
