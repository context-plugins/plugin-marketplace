using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record PortfolioAddItemRequest
{
    /// <summary>
    /// The item to add to the portfolio.
    /// </summary>
    [JsonPropertyName("item")]
    public required string Item { get; init; }

    /// <summary>
    /// An id of an item in this portfolio. The new item will be added before the one specified here. <c>insert_before</c> and <c>insert_after</c> parameters cannot both be specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insert_before")]
    public string? InsertBefore { get; init; }

    /// <summary>
    /// An id of an item in this portfolio. The new item will be added after the one specified here. <c>insert_before</c> and <c>insert_after</c> parameters cannot both be specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insert_after")]
    public string? InsertAfter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
