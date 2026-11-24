using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Core.Validation;
using PlinthUsGrantsData.Core.Validation.Attributes;
using PlinthUsGrantsData.Models.Enums;

namespace PlinthUsGrantsData.Models;

public record Result1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ein")]
    public string? Ein { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Human-readable kind: Grantmaking foundation or Nonprofit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public Kind? Kind { get; init; }

    /// <summary>
    /// Two-letter postal code as filed: a US state, or a province or territory when <c>country</c> is <c>CA</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// The SAME value as <c>state</c>, under the name the first consumers of this endpoint used. Kept because it is in live clients; prefer <c>state</c> in new code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// NTEE major-group label. Null wherever the BMF carries no NTEE code, which is common — parse permissively.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cause")]
    public string? Cause { get; init; }

    /// <summary>
    /// URL slug for the organization's page. Null for organizations without a curated page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public string? Slug { get; init; }

    /// <summary>
    /// Site-relative path to that page. <c>url</c> is the same target, absolute; prefer it outside this domain.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("href")]
    public string? Href { get; init; }

    /// <summary>
    /// The register the row came from. Present on every row, so no result is currency-ambiguous.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public Country? Country { get; init; }

    /// <summary>
    /// The currency <c>revenue</c> is in — the filing's own. Nothing in this dataset is converted, so figures from the two registers are never comparable and never additive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// Total revenue from the latest filing held, in the currency named by <c>currency</c>. Here to disambiguate similarly-named organizations, and it gently weights the ranking; not a financial figure to cite — use /essentials or /premier for that.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenue")]
    public int? Revenue { get; init; }

    /// <summary>
    /// Match strength; results are already ordered by it. Null on an exact-EIN lookup, which has no relevance score.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("score")]
    public double? Score { get; init; }

    /// <summary>
    /// Absolute canonical URL of the organization's page — stable, and citable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public string? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
