using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;
using GoogleSearchConsole.Models.Enums;

namespace GoogleSearchConsole.Models;

/// <summary>
/// Contains permission level information about a Search Console site. For more information, see <see href="https://support.google.com/webmasters/answer/2451999">Permissions in Search Console</see>.
/// </summary>
public record WmxSite
{
    /// <summary>
    /// The URL of the site.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("siteUrl")]
    public string? SiteUrl { get; init; }

    /// <summary>
    /// The user's permission level for the site.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("permissionLevel")]
    public PermissionLevel? PermissionLevel { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
