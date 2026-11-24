using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record PutBotRequest
{
    /// <summary>
    /// The name of the bot. The name is not case sensitive.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// A description of the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// An array of Intent objects. Each intent represents a command that a user can express. For example, a pizza ordering bot might support an OrderPizza intent. For more information, see how-it-works.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intents")]
    public IReadOnlyList<ModelsLexIntent>? Intents { get; init; }

    /// <summary>
    /// Set to true to enable access to natural language understanding improvements. When you set the enableModelImprovements parameter to true you can use the nluIntentConfidenceThreshold parameter to configure confidence scores. For more information, see Confidence Scores. You can only set the enableModelImprovements parameter in certain Regions. If you set the parameter to true, your bot has access to accuracy improvements. The Regions where you can set the enableModelImprovements parameter to true are: US East (N. Virginia) (us-east-1) US West (Oregon) (us-west-2) Asia Pacific (Sydney) (ap-southea
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableModelImprovements")]
    public bool? EnableModelImprovements { get; init; }

    /// <summary>
    /// Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or both when returning alternative intents in a PostContent or PostText response. AMAZON.FallbackIntent and AMAZON.KendraSearchIntent are only inserted if they are configured for the bot. You must set the enableModelImprovements parameter to true to use confidence scores in the following regions. US East (N. Virginia) (us-east-1) US West (Oregon) (us-west-2) Asia Pacific (Sydney) (ap-southeast-2) EU (Ireland) (eu-west-1) In other Regions, the enableModelImprovements parameter is set to t
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nluIntentConfidenceThreshold")]
    public double? NluIntentConfidenceThreshold { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clarificationPrompt")]
    public Prompt? ClarificationPrompt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("abortStatement")]
    public Statement? AbortStatement { get; init; }

    /// <summary>
    /// The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. A user interaction session remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout. For example, suppose that a user chooses the OrderPizza intent, but gets sidetracked halfway through placing an order. If the user doesn't complete the order within the specified time, Amazon Lex discards the slot information that it gathered, and the user must start over. If you don't include the idleSession
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idleSessionTTLInSeconds")]
    public int? IdleSessionTtlInSeconds { get; init; }

    /// <summary>
    /// The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user. The locale configured for the voice must match the locale of the bot. For more information, see Voices in Amazon Polly in the Amazon Polly Developer Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("voiceId")]
    public string? VoiceId { get; init; }

    /// <summary>
    /// Identifies a specific revision of the $LATEST version. When you create a new bot, leave the checksum field blank. If you specify a checksum you get a BadRequestException exception. When you want to update a bot, set the checksum field to the checksum of the most recent revision of the $LATEST version. If you don't specify the checksum field, or if the checksum does not match the $LATEST version, you get a PreconditionFailedException exception.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checksum")]
    public string? Checksum { get; init; }

    /// <summary>
    /// If you set the processBehavior element to BUILD, Amazon Lex builds the bot so that it can be run. If you set the element to SAVE Amazon Lex saves the bot, but doesn't build it. If you don't specify this value, the default value is BUILD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processBehavior")]
    public ProcessBehavior? ProcessBehavior { get; init; }

    /// <summary>
    /// Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the bot. The default is en-US.
    /// </summary>
    [JsonPropertyName("locale")]
    public required Locale2 Locale { get; init; }

    /// <summary>
    /// For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying true or false in the childDirected field. By specifying true in the childDirected field, you confirm that your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and
    /// </summary>
    [JsonPropertyName("childDirected")]
    public required bool ChildDirected { get; init; }

    /// <summary>
    /// When set to true user utterances are sent to Amazon Comprehend for sentiment analysis. If you don't specify detectSentiment, the default is false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detectSentiment")]
    public bool? DetectSentiment { get; init; }

    /// <summary>
    /// When set to true a new numbered version of the bot is created. This is the same as calling the CreateBotVersion operation. If you don't specify createVersion, the default is false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createVersion")]
    public bool? CreateVersion { get; init; }

    /// <summary>
    /// A list of tags to add to the bot. You can only add tags when you create a bot, you can't use the PutBot operation to update the tags on a bot. To update tags, use the TagResource operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
