using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models;

/// <summary>
/// Every error has this shape. Some codes add fields (for example <c>platform</c>, <c>url</c>, <c>max_length</c>, <c>connection_id</c>, <c>upgrade_url</c>, <c>required_fields</c>).
/// </summary>
public record ErrorError
{
    [JsonPropertyName("error")]
    public required Error1 Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
