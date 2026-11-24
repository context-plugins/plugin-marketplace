using System.Text.Json.Serialization;

namespace Cloro.Models;

/// <summary>
/// Optional flags for including additional response formats
/// </summary>
public record Include6
{
    /// <summary>
    /// Include a URL to the full HTML of the response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    public bool? Html { get; init; } = false;

    /// <summary>
    /// Include markdown-formatted response in the result
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public bool? Markdown { get; init; } = false;

    /// <summary>
    /// Fetch merchant offers for the product clusters in the response and return them as 'result.productResults'. Clusters are deduplicated across shopping cards and inline products, and expansion covers at most 6 per scrape. Paid add-on: +1 credit per cluster returned, up to +6 (<see href="/guides/providers#ai-mode-additional-features">pricing</see>). Off by default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expandProducts")]
    public bool? ExpandProducts { get; init; } = false;

    /// <summary>
    /// Ignored since 8th September 2026. Every redirect link now ships as <c>redirectLink</c> beside its destination, so both are returned without this flag. Requests still sending it behave as if it were absent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("googleGoto")]
    public bool? GoogleGoto { get; init; } = false;
}
