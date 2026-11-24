using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Models;

/// <summary>
/// List of sites with access level information.
/// </summary>
public record SitesListResponse
{
    /// <summary>
    /// Contains permission level information about a Search Console site. For more information, see <see href="https://support.google.com/webmasters/answer/2451999">Permissions in Search Console</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("siteEntry")]
    public IReadOnlyList<WmxSite>? SiteEntry { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
