using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record NewsPagination
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<RichNewsArticle> Results { get; init; }

    /// <summary>
    /// Opaque cursor for the next page. Pass it back as <c>?cursor=</c> with the same <c>sort</c> mode. Default (<c>sort=published</c>) feed: the next older page, <c>null</c> when the end of the feed has been reached. Delta mode (<c>sort=ingested</c>): always non-null — it is your polling position; empty <c>results</c> means caught up, keep the cursor and poll again later.
    /// </summary>
    [JsonPropertyName("next_cursor")]
    public required string? NextCursor { get; init; }

    /// <summary>
    /// Crypto-collider hint, set only when <c>symbol</c> named a string a stock/ETF owns while an active cryptocurrency answers to the same base (crypto is addressed as <c>&lt;SYM&gt;-USD</c>, so <c>BTC</c> is the Grayscale ETF and <c>BTC-USD</c> the coin). One sentence naming the coin ticker to request; <c>null</c> for every other query. The page itself still serves the equity's feed — the string keeps its equity meaning.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("symbol_note")]
    public string? SymbolNote { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
