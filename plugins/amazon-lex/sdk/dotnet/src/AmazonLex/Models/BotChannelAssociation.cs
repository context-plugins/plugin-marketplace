using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record BotChannelAssociation
{
    /// <summary>
    /// The name of the association between the bot and the channel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// A text description of the association you are creating.
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
    /// The name of the Amazon Lex bot to which this association is being made. Currently, Amazon Lex supports associations with Facebook and Slack, and Twilio.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botName")]
    public string? BotName { get; init; }

    /// <summary>
    /// The date that the association between the Amazon Lex bot and the channel was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdDate")]
    public DateTimeOffset? CreatedDate { get; init; }

    /// <summary>
    /// Specifies the type of association by indicating the type of channel being established between the Amazon Lex bot and the external messaging platform.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeAmazonLexModelBuildingV2ChannelsApi? Type { get; init; }

    /// <summary>
    /// Provides information necessary to communicate with the messaging platform.
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
