using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UpdateSlotTypeRequest
{
    /// <summary>
    /// The unique identifier of the slot type to update.
    /// </summary>
    [JsonPropertyName("slotTypeId")]
    public required string SlotTypeId { get; init; }

    /// <summary>
    /// The new name of the slot type.
    /// </summary>
    [JsonPropertyName("slotTypeName")]
    public required string SlotTypeName { get; init; }

    /// <summary>
    /// The new description of the slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// A new list of values and their optional synonyms that define the values that the slot type can take.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotTypeValues")]
    public IReadOnlyList<SlotTypeValue>? SlotTypeValues { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("valueSelectionSetting")]
    public SlotValueSelectionSetting? ValueSelectionSetting { get; init; }

    /// <summary>
    /// The new built-in slot type that should be used as the parent of this slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentSlotTypeSignature")]
    public string? ParentSlotTypeSignature { get; init; }

    /// <summary>
    /// The identifier of the bot that contains the slot type.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The version of the bot that contains the slot type. Must be DRAFT.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale that contains the slot type. The string must match one of the supported locales. For more information, see Supported languages.
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
