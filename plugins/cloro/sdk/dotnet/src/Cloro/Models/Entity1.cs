using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record Entity1
{
    /// <summary>
    /// Entity type identifier
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Entity name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The product listing that ChatGPT attached to the entity, without <c>position</c>. Present only with <c>include.shopping: true</c>, and only when ChatGPT attached a listing. The listing of a gpt-6 product card is in <c>inlineProducts</c> instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product")]
    public ShoppingProduct2? Product { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
