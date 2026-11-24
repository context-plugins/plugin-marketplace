using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Complex filter structure for Wikipedia page searches that supports nested logical operations (AND, OR, NOT) and multiple filtering criteria.
/// </summary>
public record WikipediaSearchFilter
{
    /// <summary>
    /// Filter by specific Perigon page identifiers. Accepts either a single ID or an array of IDs. Returns only pages matching these IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageId")]
    public IReadOnlyList<string>? PageId { get; init; }

    /// <summary>
    /// Filter by specific section identifiers. Accepts either a single ID or an array of IDs. Returns only pages containing these sections.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sectionId")]
    public IReadOnlyList<string>? SectionId { get; init; }

    /// <summary>
    /// Filter by specific Wikipedia page identifiers. Accepts either a single ID or an array of IDs. Returns only pages matching these IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wikiPageId")]
    public IReadOnlyList<long>? WikiPageId { get; init; }

    /// <summary>
    /// Filter by specific Perigon page revision identifiers. Accepts either a single ID or an array of IDs. Returns only pages matching these IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wikiRevisionId")]
    public IReadOnlyList<long>? WikiRevisionId { get; init; }

    /// <summary>
    /// Filter by specific Wikipedia project codes. Returns only pages matching these projects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wikiCode")]
    public IReadOnlyList<string>? WikiCode { get; init; }

    /// <summary>
    /// Filter by specific Wikipedia namespaces. Returns only pages matching these namespaces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wikiNamespace")]
    public IReadOnlyList<long>? WikiNamespace { get; init; }

    /// <summary>
    /// Filter by specific Wikidata entity IDs. Returns only pages whose Wikidata entities match those ids.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wikidataId")]
    public IReadOnlyList<string>? WikidataId { get; init; }

    /// <summary>
    /// Filter by specific Wikidata entity IDs. Returns only pages whose Wikidata entities are instances of provided ids.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wikidataInstanceOfId")]
    public IReadOnlyList<string>? WikidataInstanceOfId { get; init; }

    /// <summary>
    /// Filter by specific Wikidata entity labels. Returns only pages whose Wikidata entities are instances of these labels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wikidataInstanceOfLabel")]
    public IReadOnlyList<string>? WikidataInstanceOfLabel { get; init; }

    /// <summary>
    /// Adds additional AND filter objects. These objects must be of the same type as the original filter object and will be combined with the existing filter using the AND logical operator.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AND")]
    public IReadOnlyList<WikipediaSearchFilter>? And { get; init; }

    /// <summary>
    /// Adds additional OR filter objects. These objects must be of the same type as the original filter object and will be combined with the existing filter using the OR logical operator.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OR")]
    public IReadOnlyList<WikipediaSearchFilter>? Or { get; init; }

    /// <summary>
    /// A filter object for logical NOT operations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NOT")]
    public IReadOnlyList<WikipediaSearchFilter>? Not { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
