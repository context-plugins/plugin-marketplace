using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Google search results data
/// </summary>
public record Result9
{
    /// <summary>
    /// Organic search results from Google
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organicResults")]
    public IReadOnlyList<OrganicResult1>? OrganicResults { get; init; }

    /// <summary>
    /// People Also Ask questions from Google
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("peopleAlsoAsk")]
    public IReadOnlyList<PeopleAlsoAsk1>? PeopleAlsoAsk { get; init; }

    /// <summary>
    /// Cards from Google's "What people are saying" / "Trending posts and discussions" SERP module. The field is omitted from <c>result</c> when no such module appears on the SERP, so clients should treat it as optional rather than expecting an empty array.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("peopleAreSaying")]
    public IReadOnlyList<PeopleAreSaying1>? PeopleAreSaying { get; init; }

    /// <summary>
    /// Cards from Google's Recipes carousel, on desktop and mobile. Only the cards in the page as first loaded are returned. The field is omitted from <c>result</c> when no Recipes carousel appears on the SERP, so clients should treat it as optional rather than expecting an empty array.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipes")]
    public IReadOnlyList<Recipe>? Recipes { get; init; }

    /// <summary>
    /// Places from Google's local pack (the map-backed "3-pack" of local businesses on local-intent queries, e.g. "best pizza in new york city"). The field is omitted from <c>result</c> when no local pack appears on the SERP, so clients should treat it as optional rather than expecting an empty array. Returned on desktop and mobile. Google's separate hotels/travel pack is not surfaced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localResults")]
    public IReadOnlyList<LocalResult1>? LocalResults { get; init; }

    /// <summary>
    /// Absolute URL of the local pack's "More places" / "More businesses" control — Google's expanded Local Finder for the query. Returned only alongside <c>localResults</c> when the SERP renders the control.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localResultsMoreLink")]
    public string? LocalResultsMoreLink { get; init; }

    /// <summary>
    /// Related search suggestions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("relatedSearches")]
    public IReadOnlyList<RelatedSearch>? RelatedSearches { get; init; }

    /// <summary>
    /// Sponsored ad results from Google search, including text ads (<c>type: RESULT</c>) and shopping-style sponsored cards (<c>type: SHOPPING_CARD</c>) from the right-hand-side and top-of-page carousels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ads")]
    public IReadOnlyList<Ads3>? Ads { get; init; }

    /// <summary>
    /// Google AI Overview data (if requested). Omitted when Google shows no AI Overview for the query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aioverview")]
    public Aioverview2? Aioverview { get; init; }

    /// <summary>
    /// Shopping product cards extracted from the SERP's organic shopping grids ("Popular products" / "More products"). The field is omitted from <c>result</c> when no shopping section is present, so clients should treat it as optional rather than expecting an empty array. Cards carry no product URL: they open a Google-side overlay rather than an external page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shoppingCards")]
    public IReadOnlyList<ShoppingCard6>? ShoppingCards { get; init; }

    /// <summary>
    /// Google's Knowledge Graph panel for the queried entity. Omitted from <c>result</c> when no Knowledge Graph panel appears on the SERP — treat it as optional rather than expecting null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("knowledgeGraph")]
    public KnowledgeGraph1? KnowledgeGraph { get; init; }

    /// <summary>
    /// Merchant offers from the right-rail product panel. At most one entry, present only when Google shows the panel; no request flag needed. See <see href="/api-reference/endpoint/google/product-results">product results</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productResults")]
    public IReadOnlyList<ProductResult2>? ProductResults { get; init; }

    /// <summary>
    /// Raw HTML from Google search page (if requested)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    public IReadOnlyList<string>? Html { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
