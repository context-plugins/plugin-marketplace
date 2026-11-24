using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record Result8
{
    /// <summary>
    /// One entry: the product panel of the card that issued the token. Same shape as Google Search and AI Mode <c>productResults</c>. Only <c>title</c> is always present.
    /// </summary>
    [JsonPropertyName("productResults")]
    public required IReadOnlyList<ProductResult2> ProductResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
