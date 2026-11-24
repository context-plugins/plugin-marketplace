using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record StreamingOption
{
    /// <summary>
    /// Streaming platform name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform")]
    public string? Platform { get; init; }

    /// <summary>
    /// Link to the content on the platform
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link")]
    public string? Link { get; init; }

    /// <summary>
    /// Google's <c>/goto</c> redirect for this link, in the absolute form <c>POST /v1/monitor/google/goto</c> accepts. Present only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirectLink")]
    public string? RedirectLink { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
