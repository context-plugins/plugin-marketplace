using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Cloro.Models;

public record GoogleProductRequest2
{
    /// <summary>
    /// The <c>productResultToken</c> from a Google Search shopping card or AI Overview inline product, or from a Google AI Mode shopping card or inline product. The token carries the query, locale and location of the request that issued it, so the request takes no other field.
    /// </summary>
    [JsonPropertyName("productResultToken")]
    [StringLength(512, MinimumLength = 1)]
    public required string ProductResultToken { get; init; }
}
