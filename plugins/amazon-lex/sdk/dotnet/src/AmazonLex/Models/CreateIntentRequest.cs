using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CreateIntentRequest
{
    /// <summary>
    /// The name of the intent. Intent names must be unique in the locale that contains the intent and cannot match the name of any built-in intent.
    /// </summary>
    [JsonPropertyName("intentName")]
    public required string IntentName { get; init; }

    /// <summary>
    /// A display name for the intent. If configured, This name will be shown to users during Intent Disambiguation instead of the intent name. Display names should be user-friendly, descriptive and match the intent's purpose to improve user experience during disambiguation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentDisplayName")]
    public string? IntentDisplayName { get; init; }

    /// <summary>
    /// A description of the intent. Use the description to help identify the intent in lists.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// A unique identifier for the built-in intent to base this intent on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentIntentSignature")]
    public string? ParentIntentSignature { get; init; }

    /// <summary>
    /// An array of strings that a user might say to signal the intent. For example, "I want a pizza", or "I want a {PizzaSize} pizza". In an utterance, slot names are enclosed in curly braces ("{", "}") to indicate where they should be displayed in the utterance shown to the user..
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

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentConfirmationSetting")]
    public IntentConfirmationSetting? IntentConfirmationSetting { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentClosingSetting")]
    public IntentClosingSetting? IntentClosingSetting { get; init; }

    /// <summary>
    /// A list of contexts that must be active for this intent to be considered by Amazon Lex. When an intent has an input context list, Amazon Lex only considers using the intent in an interaction with the user when the specified contexts are included in the active context list for the session. If the contexts are not active, then Amazon Lex will not use the intent. A context can be automatically activated using the outputContexts property or it can be set at runtime. For example, if there are two intents with different input contexts that respond to the same utterances, only the intent with the acti
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputContexts")]
    public IReadOnlyList<InputContext>? InputContexts { get; init; }

    /// <summary>
    /// A lists of contexts that the intent activates when it is fulfilled. You can use an output context to indicate the intents that Amazon Lex should consider for the next turn of the conversation with a customer. When you use the outputContextsList property, all of the contexts specified in the list are activated when the intent is fulfilled. You can set up to 10 output contexts. You can also set the number of conversation turns that the context should be active, or the length of time that the context should be active.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputContexts")]
    public IReadOnlyList<OutputContext>? OutputContexts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kendraConfiguration")]
    public KendraConfiguration? KendraConfiguration { get; init; }

    /// <summary>
    /// The identifier of the bot associated with this intent.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The version of the bot associated with this intent.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale where this intent is used. All of the bots, slot types, and slots used by the intent must have the same locale. For more information, see Supported languages.
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
