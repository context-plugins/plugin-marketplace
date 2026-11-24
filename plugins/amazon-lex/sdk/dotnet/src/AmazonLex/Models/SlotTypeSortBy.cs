using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record SlotTypeSortBy
{
    /// <summary>
    /// The attribute to use to sort the list of slot types.
    /// </summary>
    [JsonPropertyName("attribute")]
    public required Attribute3 Attribute { get; init; }

    /// <summary>
    /// The order to sort the list. You can say ascending or descending.
    /// </summary>
    [JsonPropertyName("order")]
    public required Order13 Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
