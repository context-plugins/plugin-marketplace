using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record RelatedSearch
{
    /// <summary>
    /// Related search query
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("query")]
    public string? Query { get; init; }

    /// <summary>
    /// Google search URL for the related query
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link")]
    public string? Link { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
