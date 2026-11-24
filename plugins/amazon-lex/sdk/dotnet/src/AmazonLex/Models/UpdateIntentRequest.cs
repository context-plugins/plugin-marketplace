using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UpdateIntentRequest
{
    /// <summary>
    /// The unique identifier of the intent to update.
    /// </summary>
    [JsonPropertyName("intentId")]
    public required string IntentId { get; init; }

    /// <summary>
    /// The new name for the intent.
    /// </summary>
    [JsonPropertyName("intentName")]
    public required string IntentName { get; init; }

    /// <summary>
    /// The new display name for the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentDisplayName")]
    public string? IntentDisplayName { get; init; }

    /// <summary>
    /// The new description of the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The signature of the new built-in intent to use as the parent of this intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentIntentSignature")]
    public string? ParentIntentSignature { get; init; }

    /// <summary>
    /// New utterances used to invoke the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sampleUtterances")]
    public IReadOnlyList<SampleUtterance>? SampleUtterances { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dialogCodeHook")]
    public DialogCodeHookSettings? DialogCodeHook { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fulfillmentCodeHook")]
    public FulfillmentCodeHookSettings? FulfillmentCodeHook { get; init; }

    /// <summary>
    /// A new list of slots and their priorities that are contained by the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotPriorities")]
    public IReadOnlyList<SlotPriority>? SlotPriorities { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentConfirmationSetting")]
    public IntentConfirmationSetting? IntentConfirmationSetting { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentClosingSetting")]
    public IntentClosingSetting? IntentClosingSetting { get; init; }

    /// <summary>
    /// A new list of contexts that must be active in order for Amazon Lex to consider the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputContexts")]
    public IReadOnlyList<InputContext>? InputContexts { get; init; }

    /// <summary>
    /// A new list of contexts that Amazon Lex activates when the intent is fulfilled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputContexts")]
    public IReadOnlyList<OutputContext>? OutputContexts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kendraConfiguration")]
    public KendraConfiguration? KendraConfiguration { get; init; }

    /// <summary>
    /// The identifier of the bot that contains the intent.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The version of the bot that contains the intent. Must be DRAFT.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale where this intent is used. The string must match one of the supported locales. For more information, see Supported languages.
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("initialResponseSetting")]
    public InitialResponseSetting? InitialResponseSetting { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qnAIntentConfiguration")]
    public QnAIntentConfiguration? QnAIntentConfiguration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qInConnectIntentConfiguration")]
    public QInConnectIntentConfiguration? QInConnectIntentConfiguration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
