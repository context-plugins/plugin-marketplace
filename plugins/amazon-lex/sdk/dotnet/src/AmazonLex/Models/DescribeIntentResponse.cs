using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DescribeIntentResponse
{
    /// <summary>
    /// The unique identifier assigned to the intent when it was created.
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
    /// The description of the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The identifier of the built-in intent that this intent is derived from, if any.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentIntentSignature")]
    public string? ParentIntentSignature { get; init; }

    /// <summary>
    /// User utterances that trigger this intent.
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
    /// The list that determines the priority that slots should be elicited from the user.
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
    /// A list of contexts that must be active for the intent to be considered for sending to the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputContexts")]
    public IReadOnlyList<InputContext>? InputContexts { get; init; }

    /// <summary>
    /// A list of contexts that are activated when the intent is fulfilled.
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
    /// The language and locale specified for the intent.
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

    /// <summary>
    /// A timestamp of the date and time that the intent was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDateTime")]
    public DateTimeOffset? LastUpdatedDateTime { get; init; }

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
