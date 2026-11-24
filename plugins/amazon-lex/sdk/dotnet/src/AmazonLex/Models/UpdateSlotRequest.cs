using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UpdateSlotRequest
{
    /// <summary>
    /// The unique identifier for the slot to update.
    /// </summary>
    [JsonPropertyName("slotId")]
    public required string SlotId { get; init; }

    /// <summary>
    /// The new name for the slot.
    /// </summary>
    [JsonPropertyName("slotName")]
    public required string SlotName { get; init; }

    /// <summary>
    /// The new description for the slot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The unique identifier of the new slot type to associate with this slot.
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
    /// The unique identifier of the bot that contains the slot.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The version of the bot that contains the slot. Must always be DRAFT.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale that contains the slot. The string must match one of the supported locales. For more information, see Supported languages.
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
