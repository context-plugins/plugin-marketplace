using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record SlotTypeSummary
{
    /// <summary>
    /// The unique identifier assigned to the slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotTypeId")]
    public string? SlotTypeId { get; init; }

    /// <summary>
    /// The name of the slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotTypeName")]
    public string? SlotTypeName { get; init; }

    /// <summary>
    /// The description of the slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// If the slot type is derived from a built-on slot type, the name of the parent slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentSlotTypeSignature")]
    public string? ParentSlotTypeSignature { get; init; }

    /// <summary>
    /// A timestamp of the date and time that the slot type was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDateTime")]
    public DateTimeOffset? LastUpdatedDateTime { get; init; }

    /// <summary>
    /// Indicates the type of the slot type. Custom - A slot type that you created using custom values. For more information, see Creating custom slot types. Extended - A slot type created by extending the AMAZON.AlphaNumeric built-in slot type. For more information, see AMAZON.AlphaNumeric . ExternalGrammar - A slot type using a custom GRXML grammar to define values. For more information, see Using a custom grammar slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotTypeCategory")]
    public SlotTypeCategory? SlotTypeCategory { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
