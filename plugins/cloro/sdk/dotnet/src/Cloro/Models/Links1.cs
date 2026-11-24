using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Action links rendered on the place, typically on business/service-style packs (plumbers, salons, …) and absent on restaurant packs whose places are plain buttons. Each key is present only when Google rendered that button.
/// </summary>
public record Links1
{
    /// <summary>
    /// The business's own website URL. When the card has no website button, it comes from the place data in the page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website")]
    public string? Website { get; init; }

    /// <summary>
    /// Absolute Google Maps directions URL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directions")]
    public string? Directions { get; init; }

    /// <summary>
    /// Google's <c>/goto</c> redirect for this link, in the absolute form <c>POST /v1/monitor/google/goto</c> accepts. Present only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to, or is empty, missing or a <c>google.com/goto</c> URL when the link is not resolved yet. In that case, resolve this value with <c>POST /v1/monitor/google/goto</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirectLink")]
    public string? RedirectLink { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
