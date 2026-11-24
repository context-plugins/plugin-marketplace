using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CreateIntentResponse
{
    /// <summary>
    /// A unique identifier for the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentId")]
    public string? IntentId { get; init; }

    /// <summary>
    /// The name specified for the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentName")]
    public string? IntentName { get; init; }

    /// <summary>
    /// The display name specified for the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentDisplayName")]
    public string? IntentDisplayName { get; init; }

    /// <summary>
    /// The description specified for the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The signature of the parent intent specified for the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentIntentSignature")]
    public string? ParentIntentSignature { get; init; }

    /// <summary>
    /// The sample utterances specified for the intent.
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
    /// The list of input contexts specified for the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputContexts")]
    public IReadOnlyList<InputContext>? InputContexts { get; init; }

    /// <summary>
    /// The list of output contexts specified for the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputContexts")]
    public IReadOnlyList<OutputContext>? OutputContexts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kendraConfiguration")]
    public KendraConfiguration? KendraConfiguration { get; init; }

    /// <summary>
    /// The identifier of the bot associated with the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The version of the bot associated with the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The locale that the intent is specified to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeId")]
    public string? LocaleId { get; init; }

    /// <summary>
    /// A timestamp of the date and time that the intent was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

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
