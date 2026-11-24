using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record BuiltInIntentSortBy
{
    /// <summary>
    /// The attribute to use to sort the list of built-in intents.
    /// </summary>
    [JsonPropertyName("attribute")]
    public string Attribute { get; } = "IntentSignature";

    /// <summary>
    /// The order to sort the list. You can specify ascending or descending order.
    /// </summary>
    [JsonPropertyName("order")]
    public required OrderAmazonLexModelBuildingV2BuiltinsApi Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
