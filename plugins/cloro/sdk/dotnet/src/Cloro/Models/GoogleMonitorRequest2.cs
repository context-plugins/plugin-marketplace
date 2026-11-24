using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;
using Cloro.Models.Enums;

namespace Cloro.Models;

public record GoogleMonitorRequest2
{
    /// <summary>
    /// The search query to execute on Google. Required unless you supply 'url' instead — the two are mutually exclusive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("query")]
    [StringLength(10000, MinimumLength = 1)]
    public string? Query { get; init; }

    /// <summary>
    /// A complete Google web search URL to run instead of building the request from 'query' and the targeting fields. Must be an absolute http(s) URL on a Google web search host (google.com, google.co.uk, www.google.de, ...), with the path '/search' and a non-empty 'q'. Mutually exclusive with 'query', 'location', 'uule' and 'pages' — the URL owns those values. cloro applies a fixed set of query parameters — 'q', 'gl', 'hl', 'uule', 'num' (read as result depth), 'start', 'tbs' and 'safe' — and drops anything else. URLs carrying 'tbm' are rejected, because they target a Google vertical with its own endpoint and pricing (use POST /v1/monitor/google/news for tbm=nws).
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2 country code for localized search results. See <see href="/api-reference/endpoint/countries">List of countries</see> for the codes each provider supports. Required in the standard request shape unless you send <c>gl</c>. When you supply 'url' instead, country is derived from the URL's 'gl' — pass it explicitly to override that, or when the URL has no 'gl'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public CountryCode8? Country { get; init; }

    /// <summary>
    /// Alternative to <c>country</c>, using Google's own parameter name for the result geography. Same ISO 3166-1 alpha-2 codes, accepted in either case (<c>us</c> or <c>US</c>), and must be a country the endpoint supports — see <c>GET /v1/countries</c>. Provide <c>country</c> or <c>gl</c>; sending both with different values is a <c>400</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gl")]
    public string? Gl { get; init; }

    /// <summary>
    /// Interface language, as Google's own <c>hl</c> parameter (e.g. <c>en</c>, <c>de</c>, <c>pt-BR</c>). Free-form and case-insensitive — Google owns the list of codes. Overrides the language cloro derives from the country, so the interface language and the result geography can differ.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hl")]
    public string? Hl { get; init; }

    /// <summary>
    /// Google canonical location name for geo-targeted results, in comma-separated format: 'City,Region,Country' (see https://developers.google.com/google-ads/api/reference/data/geotargets for all ~100,000 supported locations). Use alongside 'country' for city-level precision. Mutually exclusive with 'uule' — provide one or the other, not both. Cannot be combined with 'url'. When both <c>location</c> and <c>uule</c> are omitted, cloro pins results to the country's canonical location (e.g. <c>Portugal</c> for <c>PT</c>) where it has one; otherwise Google geolocates from the proxy's exit IP.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// Pre-encoded Google UULE string for precise geo-targeting. Use this when you have a pre-built UULE value instead of a location name. Mutually exclusive with 'location' — provide one or the other, not both. Cannot be combined with 'url'; put 'uule' in the URL's query string instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uule")]
    public string? Uule { get; init; }

    /// <summary>
    /// Device the search is run from. 'desktop' returns the desktop SERP; 'ios' (Safari on iPhone), 'android' (Chrome on Android) and 'mobile' (alias for 'android') all return the mobile SERP.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public Device2? Device { get; init; } = Device2.Desktop;

    /// <summary>
    /// Number of search results pages to scrape (1-10). Paid add-on: +2 credits per page after the first (<see href="/guides/providers#google-search-multi-page-pricing">pricing</see>). Cannot be combined with 'url' — in that shape, depth comes from the URL's 'num' (rounded up to whole pages of 10, capped at 10 pages).
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
    public Include7? Include { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
