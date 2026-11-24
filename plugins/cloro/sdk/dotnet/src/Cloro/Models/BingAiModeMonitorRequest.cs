using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Cloro.Models.Enums;

namespace Cloro.Models;

public record BingAiModeMonitorRequest
{
    /// <summary>
    /// The prompt to send to Bing AI Mode. Bing puts the prompt in the page URL, so the limit is 3,500 characters after URL encoding. A letter, digit or space counts as 1, most punctuation as 3, an accented or Cyrillic letter as 6, and a Chinese, Japanese or Korean character as 9. Thus a CJK prompt can have a maximum of 388 characters. A longer prompt returns a 400 error: "Prompt is too long (max 3,500 characters, fewer for non-Latin scripts)".
    /// </summary>
    [JsonPropertyName("prompt")]
    [StringLength(3500, MinimumLength = 1)]
    public required string Prompt { get; init; }

    /// <summary>
    /// Country/region code for localized response, using ISO 3166-1 alpha-2 country codes. Bing AI Mode accepts all countries except KR and RU. <c>GET /v1/countries?model=bing_aimode</c> returns the list.
    /// </summary>
    [JsonPropertyName("country")]
    public required CountryCode13 Country { get; init; }

    /// <summary>
    /// State code for sub-country geo-targeting (e.g., "CA"). Only valid with country "US". Paid add-on: +2 credits, on top of the base cost and any other add-on (<see href="/guides/providers#state-level-targeting">pricing</see>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public StateParameter? State { get; init; }

    /// <summary>
    /// Optional flags for including additional response formats
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public Include12? Include { get; init; }
}
