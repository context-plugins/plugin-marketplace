using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation.Attributes;
using Cloro.Models.Enums;

namespace Cloro.Models;

public record GoogleNewsMonitorRequest1
{
    /// <summary>
    /// The search query to execute on Google News
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("query")]
    [StringLength(10000, MinimumLength = 1)]
    public string? Query { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2 country code for localized news results. See <see href="/api-reference/endpoint/countries">List of countries</see> for the codes each provider supports.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public CountryCode1? Country { get; init; }

    /// <summary>
    /// Alternative to <c>country</c>, using Google's own parameter name for the result geography. Same ISO 3166-1 alpha-2 codes, accepted in either case (<c>us</c> or <c>US</c>), and must be a country the endpoint supports — see <c>GET /v1/countries</c>. Provide <c>country</c> or <c>gl</c>; sending both with different values is a <c>400</c>.
    /// </summary>
    [JsonPropertyName("gl")]
    public required string Gl { get; init; }

    /// <summary>
    /// Interface language, as Google's own <c>hl</c> parameter (e.g. <c>en</c>, <c>de</c>, <c>pt-BR</c>). Free-form and case-insensitive — Google owns the list of codes. Overrides the language cloro derives from the country, so the interface language and the result geography can differ.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hl")]
    public string? Hl { get; init; }

    /// <summary>
    /// Device the search is run from. 'desktop' returns the desktop news SERP; 'ios' (Safari on iPhone), 'android' (Chrome on Android) and 'mobile' (alias for 'android') all return the mobile news SERP.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public Device? Device { get; init; } = Device.Desktop;

    /// <summary>
    /// Number of news results pages to scrape (1-10). Paid add-on: +2 credits per page after the first (<see href="/guides/providers#google-search-multi-page-pricing">pricing</see>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pages")]
    [Minimum(1)]
    [Maximum(10)]
    public int? Pages { get; init; } = 1;

    /// <summary>
    /// Optional flags for including additional response data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public Include1? Include { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
