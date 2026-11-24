using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record BuiltInSlotTypeSortBy
{
    /// <summary>
    /// The attribute to use to sort the list of built-in intents.
    /// </summary>
    [JsonPropertyName("attribute")]
    public string Attribute { get; } = "SlotTypeSignature";

    /// <summary>
    /// The order to sort the list. You can choose ascending or descending.
    /// </summary>
    [JsonPropertyName("order")]
    public required Order1AmazonLexModelBuildingV2BuiltinsApi Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
