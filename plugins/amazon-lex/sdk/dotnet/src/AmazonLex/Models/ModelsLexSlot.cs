using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record ModelsLexSlot
{
    /// <summary>
    /// The name of the slot.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// A description of the slot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Specifies whether the slot is required or optional.
    /// </summary>
    [JsonPropertyName("slotConstraint")]
    public required SlotConstraint SlotConstraint { get; init; }

    /// <summary>
    /// The type of the slot, either a custom slot type that you defined or one of the built-in slot types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotType")]
    public string? SlotType { get; init; }

    /// <summary>
    /// The version of the slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotTypeVersion")]
    public string? SlotTypeVersion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("valueElicitationPrompt")]
    public Prompt? ValueElicitationPrompt { get; init; }

    /// <summary>
    /// Directs Amazon Lex the order in which to elicit this slot value from the user. For example, if the intent has two slots with priorities 1 and 2, AWS Amazon Lex first elicits a value for the slot with priority 1. If multiple slots share the same priority, the order in which Amazon Lex elicits values is arbitrary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("priority")]
    public int? Priority { get; init; }

    /// <summary>
    /// If you know a specific pattern with which users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of understanding user utterances.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sampleUtterances")]
    public IReadOnlyList<string>? SampleUtterances { get; init; }

    /// <summary>
    /// A set of possible responses for the slot type used by text-based clients. A user chooses an option from the response card, instead of using text to reply.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseCard")]
    public string? ResponseCard { get; init; }

    /// <summary>
    /// Determines whether a slot is obfuscated in conversation logs and stored utterances. When you obfuscate a slot, the value is replaced by the slot name in curly braces ({}). For example, if the slot name is "full_name", obfuscated values are replaced with "{full_name}". For more information, see Slot Obfuscation .
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("obfuscationSetting")]
    public ObfuscationSettingAmazonLexModelBuildingV2VersionsApi? ObfuscationSetting { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultValueSpec")]
    public SlotDefaultValueSpec? DefaultValueSpec { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
