using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record SlotSortBy
{
    /// <summary>
    /// The attribute to use to sort the list.
    /// </summary>
    [JsonPropertyName("attribute")]
    public required Attribute4 Attribute { get; init; }

    /// <summary>
    /// The order to sort the list. You can choose ascending or descending.
    /// </summary>
    [JsonPropertyName("order")]
    public required Order7 Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
