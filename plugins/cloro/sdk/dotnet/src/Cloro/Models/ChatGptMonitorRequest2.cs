using System.Text.Json.Serialization;
using Cloro.Models.AnyOf;
using Cloro.Models.Enums;

namespace Cloro.Models;

public record ChatGptMonitorRequest2
{
    /// <summary>
    /// The prompt to send to ChatGPT, or an array of up to 5 prompts for a multi-turn conversation. With an array, ChatGPT answers the prompts in order, in the same conversation, and <c>result</c> is an array with one response for each prompt. Each prompt after the first costs +1 credit (<see href="/guides/providers#chatgpt-additional-features">pricing</see>).
    /// </summary>
    [JsonPropertyName("prompt")]
    public required Prompt Prompt { get; init; }

    /// <summary>
    /// Country/region code for localized response, using ISO 3166-1 alpha-2 country codes.
    /// </summary>
    [JsonPropertyName("country")]
    public required CountryCode2 Country { get; init; }

    /// <summary>
    /// Optional flags for including additional response formats
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public Include8? Include { get; init; }

    /// <summary>
    /// Serve ChatGPT's legacy desktop interface instead of the default mobile-web one. The legacy interface streams the answer as an event stream, so <c>result.model</c>, <c>result.searchQueries</c> and <c>result.mapSearchQueries</c> are populated. ChatGPT shows ads far more often on this interface. Best-effort and temporary: OpenAI controls which interface it serves and can retire the legacy one at any time, so a request can still come back in the mobile-web shape. Handle both. Defaults to false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("legacy")]
    public bool? Legacy { get; init; } = false;

    /// <summary>
    /// Do not force ChatGPT's web search. cloro returns the answer ChatGPT gives on its own, which uses web search only when ChatGPT decides to, so <c>result.sources</c>, <c>result.citationPills</c> and <c>result.searchQueries</c> are often empty. Defaults to false: web search is forced on every request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disableWebSearch")]
    public bool? DisableWebSearch { get; init; } = false;

    /// <summary>
    /// State code for sub-country geo-targeting (e.g., "CA"). Only valid with country "US". Paid add-on: +2 credits, on top of the base cost and any other add-on (<see href="/guides/providers#state-level-targeting">pricing</see>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public StateParameter? State { get; init; }
}
