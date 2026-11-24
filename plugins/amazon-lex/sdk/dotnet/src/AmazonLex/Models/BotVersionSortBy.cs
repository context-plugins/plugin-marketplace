using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record BotVersionSortBy
{
    /// <summary>
    /// The attribute to use to sort the list of versions.
    /// </summary>
    [JsonPropertyName("attribute")]
    public string Attribute { get; } = "BotVersion";

    /// <summary>
    /// The order to sort the list. You can specify ascending or descending order.
    /// </summary>
    [JsonPropertyName("order")]
    public required Order9 Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
