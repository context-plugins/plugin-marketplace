using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CreateSlotTypeRequest
{
    /// <summary>
    /// The name for the slot. A slot type name must be unique within the intent.
    /// </summary>
    [JsonPropertyName("slotTypeName")]
    public required string SlotTypeName { get; init; }

    /// <summary>
    /// A description of the slot type. Use the description to help identify the slot type in lists.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// A list of SlotTypeValue objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for a slot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotTypeValues")]
    public IReadOnlyList<SlotTypeValue>? SlotTypeValues { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("valueSelectionSetting")]
    public SlotValueSelectionSetting? ValueSelectionSetting { get; init; }

    /// <summary>
    /// The built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent slot type. Only AMAZON.AlphaNumeric is supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentSlotTypeSignature")]
    public string? ParentSlotTypeSignature { get; init; }

    /// <summary>
    /// The identifier of the bot associated with this slot type.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The identifier of the bot version associated with this slot type.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale that the slot type will be used in. The string must match one of the supported locales. All of the bots, intents, and slots used by the slot type must have the same locale. For more information, see Supported languages.
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalSourceSetting")]
    public ExternalSourceSetting? ExternalSourceSetting { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compositeSlotTypeSetting")]
    public CompositeSlotTypeSetting? CompositeSlotTypeSetting { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
