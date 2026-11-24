using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record PutBotResponse
{
    /// <summary>
    /// The name of the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// A description of the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// An array of Intent objects. For more information, see PutBot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intents")]
    public IReadOnlyList<ModelsLexIntent>? Intents { get; init; }

    /// <summary>
    /// Indicates whether the bot uses accuracy improvements. true indicates that the bot is using the improvements, otherwise, false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableModelImprovements")]
    public bool? EnableModelImprovements { get; init; }

    /// <summary>
    /// The score that determines where Amazon Lex inserts the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or both when returning alternative intents in a PostContent or PostText response. AMAZON.FallbackIntent is inserted if the confidence score for all intents is below this value. AMAZON.KendraSearchIntent is only inserted if it is configured for the bot.
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
    /// When you send a request to create a bot with processBehavior set to BUILD, Amazon Lex sets the status response element to BUILDING. In the READY_BASIC_TESTING state you can test the bot with user inputs that exactly match the utterances configured for the bot's intents and values in the slot types. If Amazon Lex can't build the bot, Amazon Lex sets status to FAILED. Amazon Lex returns the reason for the failure in the failureReason response element. When you set processBehavior to SAVE, Amazon Lex sets the status code to NOT BUILT. When the bot is in the READY state you can test and publish th
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status3? Status { get; init; }

    /// <summary>
    /// If status is FAILED, Amazon Lex provides the reason that it failed to build the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failureReason")]
    public string? FailureReason { get; init; }

    /// <summary>
    /// The date that the bot was updated. When you create a resource, the creation date and last updated date are the same.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDate")]
    public DateTimeOffset? LastUpdatedDate { get; init; }

    /// <summary>
    /// The date that the bot was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdDate")]
    public DateTimeOffset? CreatedDate { get; init; }

    /// <summary>
    /// The maximum length of time that Amazon Lex retains the data gathered in a conversation. For more information, see PutBot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idleSessionTTLInSeconds")]
    public int? IdleSessionTtlInSeconds { get; init; }

    /// <summary>
    /// The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. For more information, see PutBot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("voiceId")]
    public string? VoiceId { get; init; }

    /// <summary>
    /// Checksum of the bot that you created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checksum")]
    public string? Checksum { get; init; }

    /// <summary>
    /// The version of the bot. For a new bot, the version is always $LATEST.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public string? Version { get; init; }

    /// <summary>
    /// The target locale for the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locale")]
    public LocaleAmazonLexModelBuildingV2VersionsApi? Locale { get; init; }

    /// <summary>
    /// For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying true or false in the childDirected field. By specifying true in the childDirected field, you confirm that your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("childDirected")]
    public bool? ChildDirected { get; init; }

    /// <summary>
    /// True if a new version of the bot was created. If the createVersion field was not specified in the request, the createVersion field is set to false in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createVersion")]
    public bool? CreateVersion { get; init; }

    /// <summary>
    /// true if the bot is configured to send user utterances to Amazon Comprehend for sentiment analysis. If the detectSentiment field was not specified in the request, the detectSentiment field is false in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detectSentiment")]
    public bool? DetectSentiment { get; init; }

    /// <summary>
    /// A list of tags associated with the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
