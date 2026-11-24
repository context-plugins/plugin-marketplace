using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Models.Enums;

namespace Cloro.Models;

public record AiModeMonitorRequest
{
    /// <summary>
    /// The prompt to send to AI Mode
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt")]
    [StringLength(10000, MinimumLength = 1)]
    public string? Prompt { get; init; }

    /// <summary>
    /// Country/region code for localized response, using ISO 3166-1 alpha-2 country codes.
    /// </summary>
    [JsonPropertyName("country")]
    public required CountryCode2 Country { get; init; }

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
    /// Google canonical location name for geo-targeted results, in comma-separated format: 'City,Region,Country' (see https://developers.google.com/google-ads/api/reference/data/geotargets for all ~100,000 supported locations). Use alongside 'country' for city-level precision. Mutually exclusive with 'uule' — provide one or the other, not both. When both <c>location</c> and <c>uule</c> are omitted, cloro pins results to the country's canonical location (e.g. <c>Portugal</c> for <c>PT</c>) where it has one; otherwise Google geolocates from the proxy's exit IP.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// Pre-encoded Google UULE string for precise geo-targeting. Use this when you have a pre-built UULE value instead of a location name. Mutually exclusive with 'location' — provide one or the other, not both.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uule")]
    public string? Uule { get; init; }

    /// <summary>
    /// Device type for search results
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public Device1? Device { get; init; } = Device1.Desktop;

    /// <summary>
    /// Optional flags for including additional response formats
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public Include6? Include { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
