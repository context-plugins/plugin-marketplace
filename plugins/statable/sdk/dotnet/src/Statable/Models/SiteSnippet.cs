using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record SiteSnippet
{
    [JsonPropertyName("site_id")]
    public required long SiteId { get; init; }

    [JsonPropertyName("script_url")]
    public required string ScriptUrl { get; init; }

    /// <summary>
    /// The tag to paste, ready as it stands — install it verbatim rather than rebuilding it from <c>script_url</c>. A hobby site's tag carries a <c>data-id</c> attribute as well: its script is a <c>/t/</c> bundle addressed by hash, and that attribute is the only place the counter inside it can read the site id. A tag for a paid site needs no attributes.
    /// </summary>
    [JsonPropertyName("snippet")]
    public required string Snippet { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
