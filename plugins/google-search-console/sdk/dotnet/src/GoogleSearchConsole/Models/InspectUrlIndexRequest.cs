using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Models;

/// <summary>
/// Index inspection request.
/// </summary>
public record InspectUrlIndexRequest
{
    /// <summary>
    /// Required. The URL of the property as defined in Search Console. <b>Examples:</b> <c>http://www.example.com/</c> for a URL-prefix property, or <c>sc-domain:example.com</c> for a Domain property.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("siteUrl")]
    public string? SiteUrl { get; init; }

    /// <summary>
    /// Optional. An <see href="https://en.wikipedia.org/wiki/IETF_language_tag">IETF BCP-47</see> language code representing the requested language for translated issue messages, e.g. "en-US", "or "de-CH". Default value is "en-US".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("languageCode")]
    public string? LanguageCode { get; init; }

    /// <summary>
    /// Required. URL to inspect. Must be under the property specified in "site_url".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inspectionUrl")]
    public string? InspectionUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
