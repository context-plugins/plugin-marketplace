using System.Text.Json.Serialization;
using Ortto.Core.Models;

namespace Ortto.Models;

public record TagsGetRequest
{
    /// <summary>
    /// Optional search term to filter tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("q")]
    public string? Q { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
