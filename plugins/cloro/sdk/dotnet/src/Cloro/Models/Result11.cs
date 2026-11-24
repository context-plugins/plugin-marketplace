using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Google News results data
/// </summary>
public record Result11
{
    /// <summary>
    /// News articles from Google News
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("newsResults")]
    public IReadOnlyList<NewsResult1>? NewsResults { get; init; }

    /// <summary>
    /// Raw HTML from Google News pages (if requested)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    public IReadOnlyList<string>? Html { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
