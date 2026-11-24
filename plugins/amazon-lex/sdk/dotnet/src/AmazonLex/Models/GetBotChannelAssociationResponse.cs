using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record GetBotChannelAssociationResponse
{
    /// <summary>
    /// The name of the association between the bot and the channel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// A description of the association between the bot and the channel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAlias")]
    public string? BotAlias { get; init; }

    /// <summary>
    /// The name of the Amazon Lex bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botName")]
    public string? BotName { get; init; }

    /// <summary>
    /// The date that the association between the bot and the channel was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdDate")]
    public DateTimeOffset? CreatedDate { get; init; }

    /// <summary>
    /// The type of the messaging platform.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1AmazonLexModelBuildingV2ChannelsApi? Type { get; init; }

    /// <summary>
    /// Provides information that the messaging platform needs to communicate with the Amazon Lex bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botConfiguration")]
    public IReadOnlyDictionary<string, string>? BotConfiguration { get; init; }

    /// <summary>
    /// The status of the bot channel. CREATED - The channel has been created and is ready for use. IN_PROGRESS - Channel creation is in progress. FAILED - There was an error creating the channel. For information about the reason for the failure, see the failureReason field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusAmazonLexModelBuildingV2ChannelsApi? Status { get; init; }

    /// <summary>
    /// If status is FAILED, Amazon Lex provides the reason that it failed to create the association.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failureReason")]
    public string? FailureReason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
