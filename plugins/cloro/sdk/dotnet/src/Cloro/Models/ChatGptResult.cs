using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

/// <summary>
/// ChatGPT's response to one prompt
/// </summary>
public record ChatGptResult
{
    /// <summary>
    /// ChatGPT's response text
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    /// <summary>
    /// Array of sources referenced in the response. Returns empty array when no sources are available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sources")]
    public IReadOnlyList<Source12>? Sources { get; init; }

    /// <summary>
    /// A URL to the full HTML of the response (included when include.html is true)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    [Format(FormatKind.Uri)]
    public string? Html { get; init; }

    /// <summary>
    /// ChatGPT's response formatted in Markdown (included when include.markdown is true)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public string? Markdown { get; init; }

    /// <summary>
    /// Array of streaming events returned by ChatGPT (included when include.rawResponse is true). With <c>include.shopping</c> on as well, it includes the <c>product_update</c> events fetched for each inline product and shopping-card product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawResponse")]
    public IReadOnlyList<RawResponse>? RawResponse { get; init; }

    /// <summary>
    /// Array of query fan-out ChatGPT used to generate the response (included when include.searchQueries is true)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchQueries")]
    public IReadOnlyList<string>? SearchQueries { get; init; }

    /// <summary>
    /// Queries ChatGPT sent to its maps tool to build the <c>map</c> entries, deduplicated in first-seen order (included when include.searchQueries is true). Distinct from <c>searchQueries</c>, the web-search fan-out. Empty on responses served through OpenAI's mobile-web format; see <c>legacy</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapSearchQueries")]
    public IReadOnlyList<string>? MapSearchQueries { get; init; }

    /// <summary>
    /// The ChatGPT model used to generate the response. Empty on responses served through OpenAI's mobile-web format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public string? Model { get; init; }

    /// <summary>
    /// Array of shopping/product cards extracted from the response. The field is omitted entirely from <c>result</c> when <c>include.shopping</c> is <c>false</c> or unset — clients should treat it as optional rather than expecting an empty array.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shoppingCards")]
    public IReadOnlyList<ShoppingCard5>? ShoppingCards { get; init; }

    /// <summary>
    /// Array of inline products with pricing and offers. The field is omitted entirely from <c>result</c> when <c>include.shopping</c> is <c>false</c> or unset — clients should treat it as optional rather than expecting an empty array.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inlineProducts")]
    public IReadOnlyList<InlineProduct2>? InlineProducts { get; init; }

    /// <summary>
    /// Array of entities extracted from the response (when available)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entities")]
    public IReadOnlyList<Entity1>? Entities { get; init; }

    /// <summary>
    /// Array of business/place map entries extracted from the response (when available). Items come from ChatGPT's enriched providers (Yelp, Google Business) and use camelCase field names. The full field set is documented at /api-reference/endpoint/chatgpt/map; only the most commonly populated fields are listed here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("map")]
    public IReadOnlyList<Map1>? Map { get; init; }

    /// <summary>
    /// Array of inline citation pills extracted from the response (when available). These are citations that appear inline within the text. Each entry is one (pill, source) pair; group by <c>citationPillId</c> to recover pill-level structure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("citationPills")]
    public IReadOnlyList<CitationPill5>? CitationPills { get; init; }

    /// <summary>
    /// Array of ads served in the ChatGPT response (included when include.ads is true). OpenAI serves candidate ads but the interface renders at most one; use <c>rendered</c> to identify which were actually shown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ads")]
    public IReadOnlyList<Ads2>? Ads { get; init; }

    /// <summary>
    /// The form that ChatGPT shows at the end of an answer to refine the prompt: questions with options, and a button that sends a follow-up prompt. <c>null</c> when the answer has no form. The form is not part of <c>text</c> or <c>markdown</c>. Schema at /api-reference/endpoint/chatgpt/follow-up-form.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("followUpForm")]
    public FollowUpForm? FollowUpForm { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
