using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CreateSlotRequest
{
    /// <summary>
    /// The name of the slot. Slot names must be unique within the bot that contains the slot.
    /// </summary>
    [JsonPropertyName("slotName")]
    public required string SlotName { get; init; }

    /// <summary>
    /// A description of the slot. Use this to help identify the slot in lists.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The unique identifier for the slot type associated with this slot. The slot type determines the values that can be entered into the slot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotTypeId")]
    public string? SlotTypeId { get; init; }

    [JsonPropertyName("valueElicitationSetting")]
    public required SlotValueElicitationSetting ValueElicitationSetting { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("obfuscationSetting")]
    public ObfuscationSetting? ObfuscationSetting { get; init; }

    /// <summary>
    /// The identifier of the bot associated with the slot.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The version of the bot associated with the slot.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale that the slot will be used in. The string must match one of the supported locales. All of the bots, intents, slot types used by the slot must have the same locale. For more information, see Supported languages.
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    /// <summary>
    /// The identifier of the intent that contains the slot.
    /// </summary>
    [JsonPropertyName("intentId")]
    public required string IntentId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("multipleValuesSetting")]
    public MultipleValuesSetting? MultipleValuesSetting { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subSlotSetting")]
    public SubSlotSetting? SubSlotSetting { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
